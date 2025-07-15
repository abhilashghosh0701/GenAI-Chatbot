# Integrating 3rd Party Applications into SAF

We here clasify this into 3 use cases, ordered from easy to complex:

1. Open as external module via SAF in new tab
2. Open in Symphony iFrame (without SSO)
3. Open in Symphony iFrame (with SSO)

> Note: SSO stands for Single Sign On. Meaning you only need to login once to use all applications.

## 1. Open as external module via SAF in new tab
Simply use the option in the configUI to add external modules (see: [SAF Configuration](https://manuals.yunextraffic.cloud/modules/Symphony%20Application%20Frame/configuration/Configuration/#how-to-use-the-configui))


## 2. Open in Symphony iFrame (without SSO)
This option will run the application inside Symphony's iFrame (not opening the external module in new browser tab), but the user will still need to sign in to the other application.

In order for a 3rd party/external website to be easily integrated into Symphony App Frame "iFrame" certain technical and security-related requirements must be met.

### Whitelisting for adding external website to Symphony App Frame
By default the web browser doesn't allow content to be loaded from different domain. It prevents a web page from being rendered within or element on another website. This helps mitigate `clickjacking` attacks where an attacker embeds a web page in an invisible frame to trick users into performing actions on it.

There is still a way to run modules into the iFrame. The requirements for that are below:

* No X-Frame-Option-Headers, or explicitly allowed. Possible values:
    * DENY - iFrame integration is completely prohibited.
    * SAMEORIGIN - Only integration by the same domain is permitted.
    * ALLOW-FROM uri - Integration from a specific domain is permitted (no longer supported by many modern browsers).
    * The header must not be set, or it must allow specific embeddings.

* Appropriate content security policy (CSP). Directive: frame-ancestors
    * The CSP can also specify who is authorised to integrate the page into an iframe.
    * If frame-ancestors is set to ‘none’ or the embedding page is not on the list, the iframe is blocked.
    * The page should either have no "frame-ancestors" directive or configure it so that your domain is allowed.

* Optional Cookie: If the external website requires cookie to work, it should be validated that 'cookie_samesite' setting is updated to "none".

* Optional HTTPS:
As Symphony runs via HTTPS, the embedded page should be accessible via HTTPS (increasing securtiy).

### Restrictions:
Some bad user experience specially regarding module to module communication, such as language and theme changes, are not adopted from Symphony.


## 3. Open in Symphony iFrame (with SSO)
In order to open in the iFrame AND not require to re-login, the modules need to:

* have the preconditions as usecase 2 above
* Use the same iam instance (share the same cookie)
* Symphony IAM needs to have 3rd party application permissions. Sync between 3rd Party Application team and Symphony team is preferred in such case.