# Preconditions when embedding modules into SAF

The Symphony Application Frame (SAF) acting as wrapper for the modules embedded. It provides localization, module communication and session management features. To provide these kind of functionalities, there are some preconditions which modules should follow.

- The modules should be deployed to under same host name with different subdomains. As "centrals.dev.eu.yunextraffic.cloud" is the global host and GIS map module is deployed with "gis.centrals.dev.eu.yunextraffic.cloud" hostname.
- The module frontend and backend applications should use oauth2-proxy as sidecar for authorization and authentication.
- The modules should use the IAM(Keycloak) instance which the SAF is already using, also modules should use the same oauth2 client(gatekeeper) with SAF.
- The cookie-refresh mechanism of oauth2 standard should be disabled for the modules components (both backend and frontend), as the SAF is the single component managing sessions. This is easy in case of usage oauth2-proxy sidecar, just set the `--cookie-refresh` to `0` in oauth2-proxy configuration.
- There is a npm package library [@yunex/mos-frame-event-module](https://artifactory.mocca.yunextraffic.cloud/ui/packages/npm:%2F%2F@yunex%2Fmos-frame-event-module/1.1.9?name=%40yunex%2Fmos-frame-event-module&type=packages) provided by SAF to handle module-to-module communication, this library should be used inside the frontend components of the modules, so they are able to listen language change messages sent from SAF and switch the desired language. 
- Embedding External Module: It's possible to load external urls as module. Keep in mind, this will restrict **Single-Sign-On(SSO)** feature won't work, if there is a different authentication provider(other than Yunex IAM) need to access the external module. Also, make sure the following conditions are met:
    - Content-Security-Policy (CSP) of the external domain whitelist the domain on which SAF is hosted. 
    - X-Frame-Options: Some website has X-Frame-Options set to 'sameorigin'. In this case, the config has to be updated to 'ALLOW-FROM origin' to allow embedding the external module.
    - Cookie: If the extenral website requires cookie to work, it should be validated that 'cookie_samesite' setting is updated to 'none'.
