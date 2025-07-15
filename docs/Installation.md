# Installation of Symphony-App-Frame (SAF)

## Deployment

Add the component to your system following the [SOP Add Components](https://manuals.yunextraffic.cloud/modules/Platform%20-%20WildPig/Standard%20Operating%20Procedures%20%28SOP%29/SOP%20Add%20Component/).

This will create `Chart.yaml`, `secret.values.yaml` and `values.yaml` with default configuration. Further configuration
of `secret.values.yaml` was mentioned above.

`values.yaml` file is used to define application specific settings.

## Configuration

### Initial Configuration

The first step is to configure which modules should be shown in the menu and in what order they are going to be placed. The
configuration of modules should reflect installed modules on the system.

See chapter about [Configure Module Tree](#configure-module-tree) for more information about configuration of modules.
The configuration of the `defaultModulesOrder` is a **required** step.

The second step is to configure default language and the list of the available languages (`availableLocales`). The default language is English.

The supported languages are defined in the `availableLocales` section such as:

* `en` - English
* `de` - German
* `cs` - Czech
* `fr` - French
* `it` - Italian
* `pl` - Polish
* `es` - Spanish
* `it` - Italian

After the initial configuration the `values.yaml` configuration should look similar to this, with the `defaultModulesOrder`
containing the installed modules and defined languages.

```yaml
symphony-app-frame:
  symphony-app-frame-frontend:
    defaultModulesOrder:
    ...
    availableLocales:
      default:
        language: en
        country:
      list:
        - language: en
          value: language.en
          country:
        - language: de
          value: language.de
          country: DE
```

To add a new language, simply add a new entry to the `list` section with the appropriate `language`, `value` and `country` fields.
An example for adding Spanish language would look like this:

```yaml
symphony-app-frame:
  symphony-app-frame-frontend:
    availableLocales:
      list:
        - language: es
          value: language.es
          country: ES
```

### Configure Module Tree

The full tree of available modules is listed in the
[Default Modules Order](https://manuals.yunextraffic.cloud/modules/Symphony%20Application%20Frame/default-module-structure/Symphony-1.0-default-module-structure/)
chapter.

#### Initial Copy of Configuration

Copy the full tree to `values.yaml` file with proper indentation:

```yaml
symphony-app-frame:
  symphony-app-frame-frontend:
    defaultModulesOrder:
    - concertGIS:
    - states:
    - cockpit:
    - trafficSignal:
      - tss
      - groupsOfTSS
    ...
```

**Note:** The first level (the top bar) has to end with double colon (like trafficSignal in the above example). The second level is simple string (like tss in the above example)

#### Removing not Installed Modules from Navigation

Depending on each customer needs, some modules won't need to be installed in the system, and thus should be removed from the list of navigable modules. For example, a customer might not have bought the Visu Intersection module. In that case the line with the id `visuIntersection` should be remove from the tree.

Before removing:

```yaml
    ...
    - trafficSignal:
      - tss
      - groupsOfTSS
      - visuIntersection # new module
      - qualityMgmt # new module
      - dayPlanEditor
    ...
```

After removing:

```yaml
    ...
    - trafficSignal:
      - tss
      - groupsOfTSS
      - qualityMgmt # new module
      - dayPlanEditor
    ...
```

**Note:** The concert modules in the tree are listed without any comment. The **new** modules are denoted by _new module_ comment.

#### Changing Order of Modules

The order can be changed in the first level (top SAF bar) as well as in the second level (left menu) of the navigation. In case of first level, the whole section has to be moved.

The following example shows that "Traffic Signals" (as a whole module) is moved to second position in the top SAF bar.

```yaml
    defaultModulesOrder:
    - concertGIS:
    - trafficSignal:
      - tss
      - groupsOfTSS
      ...
    - states:
    - cockpit:
    ...
```

The following example shows that inside "Traffic Signals" module, the menu item "Group of TSS" was moved to first position in the left menu.

```yaml
    ...
    - trafficSignal:
      - groupsOfTSS
      - tss
      - dayPlanEditor
      - qualityMgmt # new module
    ...
```

**Note:** It is not possible to move modules from first level to second or other way around. It is also not possible to move
modules on second level between first level items.

#### Dividers and Headers

There are special items in the tree - dividers and headers. These are UI elements that are visible in the left menu. They are used just as visiual guides to enhance the navigation. Both can be moved and removed in the same manner as normal modules. They can be identified by suffix of the id -  _Divider_ and _Header_. The list of dividers and headers is predefined. Removing and changing their order has the same rules as regular modules.

### Additional Configuration

There are additional configuration options which are described in [Configuration page](https://manuals.yunextraffic.cloud/modules/Symphony%20Application%20Frame/configuration/Configuration/).
