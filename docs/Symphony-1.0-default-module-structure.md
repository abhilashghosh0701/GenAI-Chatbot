# Notes

1. This page acts a reference to the default navigation as defined by Centrals for Symphony 1.0 release.
2. It consists of the following:
    * Concert GIS
    * States
    * Cockpit
    * Traffic Signals
    * Traffic Detection
    * Sign Control
    * Response Plans
    * Incidents
    * Parking
    * RSU
    * CCTV
    * Prioritization
    * Fleets
    * Environmental Sensors
    * Reporting
    * Notifications
    * Calendar
    * System Monitoring
    * Administration

Following are the new modules added to Symphony App Frame in 1.0 release:
        * Schematic Views
        * Incident Generator
        * New CCTV
        * Quality Management
<br/><br/>

# Default Navigation Structure

#### Map **(id: concertGIS)**
_no left menu_

#### States **(id: states)**
_no left menu_

#### Cockpit **(id: cockpit)**
_no left menu_

#### Traffic Signals **(id: trafficSignal)**
- TSS **_(Concert: Field devices/Traffic Control)_**          **(id: tss)**
- Group of TSS **_(Concert: Field devices/Traffic Control)_**          **(id: groupsOfTSS)**
- Visu Intersections **_(Concert: Analysis/Quality Overview)_**          **(id: visuIntersection)**
- Quality Management **_(new module)_**          **(id: qualityMgmt)**
- Green Wave **_(new module)_**          **(id: greenWave)**
- Day Plan Editor **_(Concert: Control/Time Settings)_**          **(id: dayPlanEditor)**
- Day Plan Control **_(Concert: Control/Time Settings)_**          **(id: dayPlanControl)**
- Subsystems **_(Concert: Field devices/Subsystems)_**          **(id: subsystems)**
- Quality Reports **_(Concert: Analysis/Quality Overview)_**          **(id: qualityReports)**
- QC Hot Spots **_(Concert: Analysis/Quality Overview)_**          **(id: qcHotSpots)**
- Switch Reasons **_(Concert: Settings/Traffic control)_**          **(id: switchReasons)**
- Controller Switch(TSS) **_(Concert: Settings/Traffic control)_**          **(id: predefinedControlSwitch)**
- Controller Switch(TSS Group) **_(Concert: Settings/Traffic control)_**          **(id: predefinedControlSwitchGroup)**
- Virtual TSS **_(Concert: Settings/Traffic control)_**          **(id: virtualTSS)**
- Jobmanager **_(Concert: Analysis/Quality Overview)_**          **(id: jobManager)**
- Measurement Value Journal/Export **_(Concert: Analysis/Quality Overview)_**          **(id: measurementValueJournal)**
- Measurement Value Assignment **_(Concert: Settings/Analysis)_**          **(id: measurementValueAssignment)**
- Measurement Value Status **_(Concert: Settings/Analysis)_**          **(id: measurementValueStatus)**
- Threshold Editor **_(Concert: Settings/Analysis)_**          **(id: thresholdEditor)**
- Threshold Status **_(Concert: Settings/Analysis)_**          **(id: thresholdStatus)**
- Configuration distribution **_(Concert: Settings/Special)_**          **(id: configurationDistribution)**


#### Traffic Detection **(id: trafficDetection)**
- Measurement Points **_(Concert: Traffic data/Detectors)_**          **(id: measurementPoints)**
- Detectors **_(Concert: Traffic data/Detectors)_**          **(id: detectors)**
- Road Sections **_(Concert: Traffic data/Roads)_**          **(id: roadSections)**
- Roads **_(Concert: Traffic data/Roads)_**          **(id: roads)**
- Routes **_(Concert: Traffic data/Roads)_**          **(id: routes)**
- Prediction Links **_(Concert: Traffic data/Roads)_**          **(id: predictionLinks)**
- Traffic Areas **_(Concert: Traffic data/Traffic areas)_**          **(id: trafficAreas)**
- Detector Activation **_(Concert: Settings/Measurement system)_**          **(id: detectorActivation)**
- Template Administration **_(Concert: Settings/Measurement system)_**          **(id: templateAdministration)**
- Template Administration Traffic Data Objects **_(Concert: Settings/Measurement system)_**          **(id: templateAdministrationTrafficData)**
- Profile Configuration **_(Concert: Settings/Measurement system)_**          **(id: profileConfiguration)**


#### Signs **(id: signControl)**
- Signs **_(Concert: Field devices/Signs)_**          **(id: signs)**
- Sign Groups **_(Concert: Field devices/Signs)_**          **(id: signGroups)**
- Gantries **_(Concert: Field devices/Freeway Management)_**          **(id: displayPanels)**
- Sign Content Library **_(Concert: Field devices/Signs)_**          **(id: signContentLibrary)**
- Programs **_(Concert: Field devices/Signs)_**          **(id: programs)**
- Scheduler **_(Concert: Control/Signs)_**          **(id: scheduler)**
- Library Administration **_(Concert: Settings/Signs)_**          **(id: libraryAdministration)**
- Layouts **_(Concert: Settings/Signs)_**          **(id: layouts)**
- Fonts **_(Concert: Settings/Signs)_**          **(id: concertFonts)**
- Picture Import **_(Concert: Settings/Signs)_**          **(id: pictureImport)**


#### Response Plans **(id: responsePlans)**
- Response Plans **_(Concert: Control/Strategy management)_**          **(id: responsePlansLeft)**
- Simulation **_(Concert: Control/Strategy management)_**          **(id: responsePlansEvaluationSimulation)**
- Simulation Archive **_(Concert: Control/Strategy management)_**          **(id: responsePlansEvaluationArchive)**
- Macros **_(Concert: Control/Strategy management)_**          **(id: macros)**
- Response Plan Search **_(Concert: Control/Strategy management)_**          **(id: responsePlanSearch)**
- Situations **_(Concert: Control/Strategy management)_**          **(id: situation)**
- Switchover **_(Concert: Control/Strategy management)_**          **(id: switchover)**
- Configure situations **_(Concert: Settings/Strategy management)_**          **(id: configureSituations)**
- Response Plan Admin **_(Concert: Settings/Strategy management)_**          **(id: responsePlanAdmin)**
- Reponse Plan Interferences **_(Concert: Settings/Strategy management)_**          **(id: responsePlanInterferences)**
- Strategy Module Admin **_(Concert: Settings/Strategy management)_**          **(id: strategyModuleAdmin)**
- Translation Table Admin **_(Concert: Settings/Strategy management)_**          **(id: translationTableAdmin)**


#### Incidents **(id: incidentManagement)**
- Traffic Messages **_(Concert: Traffic data/Traffic messages)_**          **(id: messages)**
- Archive Search **_(Concert: Traffic data/Traffic messages)_**          **(id: archiveSearch)**
- Traffic Information Display **_(Concert: Traffic data/Traffic messages)_**          **(id: informationDisplay)**
- MM Administration **_(Concert: Settings/Traffic messages)_**          **(id: administration)**
- Disturbance Generator **_(Concert: Settings/Traffic messages)_**          **(id: disturbanceGenerator)**
- Incident Generator **_(new module)_**          **(id: incidentGenerator)**

#### Parking **(id: parking)**
- Parking Facilities **_(Concert: Field devices/Parking)_**          **(id: parkingFacility)**
- Parking Districts **_(Concert: Field devices/Parking)_**          **(id: parkingDistrict)**
- Parking Signs **_(Concert: Field devices/Parking)_**          **(id: parkingSigns)**
- PGS Actions **_(Concert: Control/Parking)_**          **(id: pgsActions)**
- Parking Administration **_(Concert: Control/Parking)_**          **(id: parkingAdministration)**


#### RSU **(id: RSU)**
- RSU **_(Concert: Field devices/RSU)_**          **(id: rsuList)**
- RSU Update **_(Concert: Field devices/RSU)_**          **(id: rsuUpdate)**
- Search Areas **_(Concert: Traffic data/Search Areas)_**          **(id: searchAreas)**
- RSU NTCIP Management **_(Concert: Settings/RSU Management)_**          **(id: managementRSU)**


#### CCTV **_(new module)_**          **(id: cctv)**
_no left menu_

#### CCTV (Old) **(id: oldCCTV)**
- Cameras **_(Concert: Field devices/Cameras)_**          **(id: cameras)**

#### Prioritization **(id: prioritization)**
- Moving Vehicles **_(Concert: Traffic data/Public transport)_**          **(id: movingVehicles)**
- EVR **_(Concert: Control/Traffic control)_**          **(id: EVR)**
- Trigger Lines **_(Concert: Traffic data/Trigger lines)_**          **(id: triggerLines)**


#### Fleets **(id: fleets)**
- Public Transport Lines **_(Concert: Traffic data/Public transport)_**          **(id: publicTransportLines)**
- Public Transport Stops **_(Concert: Traffic data/Public transport)_**          **(id: publicTransportStops)**
- Public Transport Stopping Points **_(Concert: Traffic data/Public transport)_**          **(id: publicTransportStoppingPoints)**


#### Sensors **(id: environmentalSensors)**
- Sensors **_(Concert: Field devices/Sensors)_**          **(id: sensor)**

#### Schematic Views **(id: SV)**
- Schematic Views **_(new module)_**          **(id: schematicView)**
- Configuration **_(new module)_**          **(id: svConfig)**

#### Reporting **(id: reporting)**
- Statistics **_(Concert: Analysis/Statistics)_**          **(id: statistics)**
- Measurement Export **_(Concert: Analysis/Statistics)_**          **(id: measurementExport)**
- Down Time **_(Concert: Analysis/Quality overview)_**          **(id: downTime)**
- Operation Message Archive **_(Concert: Analysis/Operation Message Archive)_**          **(id: operationMessageArchive)**

#### Notifications **(id: notifications)**
- Media Manager **_(Concert: Control/Strategy management)_**          **(id: mediaManager)**
- Confirmations **_(Concert: Control/Strategy management)_**          **(id: confirmations)**
- Address Book **_(Concert: Control/Strategy management/Media manager)_**          **(id: addressBook)**
- Service Notifications **_(Concert: Settings/Service Notification)_**          **(id: serviceNotifications)**


#### Calendar **(id: calendar)**
- Calendar **_(Concert: Control/Time Settings)_**          **(id: calendarLeft)**
- Day Type Definition **_(Concert: Control/Time Settings)_**          **(id: dayTypes)**


#### System Monitoring **(id: systemMonitoring)**
- System Status **_(Concert: Settings/System)_**          **(id: systemStatus)**
- Tasks **_(Concert: Settings/System)_**          **(id: taskList)**
- Information **_(Concert: Settings/System)_**          **(id: infoList)**

#### Administration **(id: administrationComponent)**
- Dialog Locks **_(Concert: Settings/User management)_**          **(id: dialogLocks)**
- Groups **_(Concert: Settings/User management)_**          **(id: groups)**
- Tenants **_(Concert: Settings/User management)_**          **(id: tenants)**
- Tenants Assignment **_(Concert: Settings/User management)_**          **(id: tenantsAssignment)**
- Service Accounts **_(Concert: Settings/User management)_**          **(id: serviceAccounts)**
- Measurement Aggregation **_(Concert: Settings/Archive)_**          **(id: measurementAggregation)**
- Profile Administration **_(Concert: Settings/Archive)_**          **(id: profileAdministration)**
- Delete Archive Partitions **_(Concert: Settings/Archive)_**          **(id: deleteArchivePartitions)**
- Archive Administration **_(Concert: Settings/Archive)_**          **(id: archiveAdministration)**
- Archive Synchronization (OCIT-C) **_(Concert: Settings/Archive)_**          **(id: archiveSynchronization)**
- MD Export/Import **_(Concert: Settings/Special)_**          **(id: MDImportExport)**
- MDServer Migration **_(Concert: Settings/Special)_**          **(id: migration)**
- File Browser **_(Concert: Settings/Special)_**          **(id: TSCServerFileBrowser)**
- Layout Filter Editor **_(Concert: Settings/User interface)_**          **(id: layoutFilterEditor)**
- Edit ColorAndCode **_(Concert: Settings/Map)_**          **(id: editColorAndCode)**
- Web GISConfiguration **_(Concert: Settings/Map)_**          **(id: webGISConfiguration)**
- Printing Template Editor **_(Concert: Settings/User interface)_**          **(id: printingTemplateEditor)**
- MD Viewer **_(Concert: Debug/MDServer)_**          **(id: debugMDViewer)**
- MD Monitor **_(Concert: Debug/MDServer)_**          **(id: debugMDMonitor)**
- SetValue Tool **_(Concert: Debug/MDServer)_**          **(id: debugSetValueTool)**
- Create Units **_(Concert: Debug/MDServer)_**          **(id: debugCreateUnits)**
- LinkObjectsImport **_(Concert: Debug/MDServer)_**          **(id: debugLinkObjectsImport)**
- MDArchive **_(Concert: Debug/MDServer)_**          **(id: debugMDArchive)**
- Export Statistics **_(Concert: Debug/MDServer)_**          **(id: debugExportStatistics)**
- Clear Statistics **_(Concert: Debug/MDServer)_**          **(id: debugClearStatistics)**
- Event Explorer **_(Concert: Debug/Strategy Management)_**          **(id: debugEventExplorer)**
- Event Day List **_(Concert: Debug/Strategy Management)_**          **(id: debugEventDayList)**
- Object State Explorer **_(Concert: Debug/Strategy Management)_**          **(id: debugObjectStateExplorer)**
- Container Viewer **_(Concert: Debug/Strategy Management)_**          **(id: debugContainerViewer)**
- System State Query **_(Concert: Debug/Strategy Management)_**          **(id: debugSystemStateQuery)**
- System Msg Buffer **_(Concert: Debug/Strategy Management)_**          **(id: debugSystemMessageBuffer)**
- Show Tasks Cache **_(Concert: Debug/Strategy Management)_**          **(id: debugShowTasksCache)**
- Clear Tasks Cache **_(Concert: Debug/Strategy Management)_**          **(id: debugClearTasksCache)**
- XML Archive **_(Concert: Debug/Strategy Management)_**          **(id: debugXMLArchive)**
- System Info **_(Concert: Debug/System)_**          **(id: debugSystemInfo)**
- Memory Info **_(Concert: Debug/System)_**          **(id: debugMemoryInfo)**
- Log Levels (log4j) **_(Concert: Debug/System)_**          **(id: debugLogLevels)**
- Thread Dump **_(Concert: Debug/System)_**          **(id: debugThreadDump)**
- Thread Monitor **_(Concert: Debug/System)_**          **(id: debugThreadMonitor)**
- Create VBA Objects (text) **_(Concert: Debug/GIS)_**          **(id: debugCreateVBAObjectsText)**
- Create VBA Objects (images) **_(Concert: Debug/GIS)_**          **(id: debugCreateVBAObjectsImages)**
- SchematicView CompleteSync **_(Concert: Debug/GIS)_**          **(id: debugSchematicViewCompleteSync)**
- TSC Log Settings **_(Concert: Debug/TSC)_**          **(id: debugTSCLogSettings)**
- TSC Refresh Log **_(Concert: Debug/TSC)_**          **(id: debugTSCRefreshLog)**
- TSC Refresh Monitor **_(Concert: Debug/TSC)_**          **(id: debugTSCRefreshMonitor)**
- TSC Session Monitor **_(Concert: Debug/TSC)_**          **(id: debugTSCSesstionMonitor)**
- TSC Statistics **_(Concert: Debug/TSC)_**          **(id: debugTSCStatistics)**
- TSC Table Cache **_(Concert: Debug/TSC)_**          **(id: debugTSCTableCache)**

# Yaml configuration of default Modules Order present in Symphony App Frame (SAF) 1.0

```yaml
defaultModulesOrder:
- concertGIS:
- states:
- cockpit:
- trafficSignal:
  - tss
  - groupsOfTSS
  - visuIntersection
  - qualityMgmt # new module
  - greenWave   # new module
  - dayPlanEditor
  - dayPlanControl
  - subsystems
  - qualityReports
  - qcHotSpots
  - trafficSignalsDivider#1 # UI divider
  - switchReasons
  - predefinedControlSwitch
  - predefinedControlSwitchGroup
  - virtualTSS
  - jobManager
  - trafficSignalsDivider#2 # UI divider
  - measurementValueJournal
  - measurementValueAssignment
  - measurementValueStatus
  - thresholdEditor
  - thresholdStatus
  - configurationDistribution
- trafficDetection:
  - measurementPoints
  - detectors
  - roadSections
  - roads
  - routes
  - predictionLinks
  - trafficAreas
  - trafficDetectionDivider # UI divider
  - detectorActivation
  - templateAdministration
  - templateAdministrationTrafficData
  - profileConfiguration
- signControl:
  - signs
  - signGroups
  - displayPanels
  - signContentLibrary
  - programs
  - signControlDivider # UI divider
  - scheduler
  - libraryAdministration
  - layouts
  - concertFonts
  - pictureImport
- responsePlans:
  - responsePlansLeft
  - responsePlansEvaluationSimulation
  - responsePlansEvaluationArchive
  - macros
  - responsePlanSearch
  - situation
  - switchover
  - responsePlanDivider # UI divider
  - configureSituations
  - responsePlanAdmin
  - responsePlanInterferences
  - strategyModuleAdmin
  - translationTableAdmin
- incidentManagement:
  - messages
  - archiveSearch
  - informationDisplay
  - incidentManagementDivider # UI divider
  - administration
  - disturbanceGenerator
  - incidentGenerator # new module
- parking:
  - parkingFacility
  - parkingDistrict
  - parkingSigns
  - parkingDivider # UI divider
  - pgsActions
  - parkingAdministration
- RSU:
  - rsuList
  - rsuUpdate
  - RSUDivider # UI divider
  - searchAreas
  - managementRSU
- cctv: # new module
- oldCCTV:
  - cameras
- prioritization:
  - movingVehicles
  - EVR
  - triggerLines
- fleets:
  - publicTransportLines
  - publicTransportStops
  - publicTransportStoppingPoints
- environmentalSensors:
  - sensor
- SV: # new module
  - schematicView
  - svConfig
- reporting:
  - statistics
  - measurementExport
  - downTime
  - operationMessageArchive
- notifications:
  - mediaManager
  - confirmations
  - addressBook
  - notificationsDivider # UI divider
  - serviceNotifications
- calendar:
  - calendarLeft
  - dayTypes
- systemMonitoring:
  - systemStatus
  - taskList
  - infoList
- administrationComponent:
  - userManagementHeader # UI header
  - dialogLocks
  - groups
  - tenants
  - tenantsAssignment
  - serviceAccounts
  - dataHeader # UI header
  - measurementAggregation
  - profileAdministration
  - deleteArchivePartitions
  - archiveAdministration
  - archiveSynchronization
  - MDImportExport
  - migration
  - TSCServerFileBrowser
  - userInterfaceHeader # UI header
  - layoutFilterEditor
  - editColorAndCode
  - webGISConfiguration
  - printSettingsHeader # UI header
  - printingTemplateEditor
  - debugDivider # UI divider
  - debugMDServerHeader # UI header
  - debugMDViewer
  - debugMDMonitor
  - debugSetValueTool
  - debugCreateUnits
  - debugLinkObjectsImport
  - debugMDArchive
  - debugExportStatistics
  - debugClearStatistics
  - debugStrategyManagementHeader # UI header
  - debugEventExplorer
  - debugEventDayList
  - debugObjectStateExplorer
  - debugContainerViewer
  - debugSystemStateQuery
  - debugSystemMessageBuffer
  - debugShowTasksCache
  - debugClearTasksCache
  - debugXMLArchive
  - debugSystemHeader # UI header
  - debugSystemInfo
  - debugMemoryInfo
  - debugLogLevels
  - debugThreadDump
  - debugThreadMonitor
  - debugGISHeader # UI header
  - debugCreateVBAObjectsText
  - debugCreateVBAObjectsImages
  - debugSchematicViewCompleteSync
  - debugTSCLogSettings
  - debugTSCRefreshLog
  - debugTSCRefreshMonitor
  - debugTSCSesstionMonitor
  - debugTSCStatistics
  - debugTSCTableCache
```
