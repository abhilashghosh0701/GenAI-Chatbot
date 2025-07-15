## Overview

Symphony-App-Frame is an unified platform that can launch modules that are developed within ITS, without the friction of switching and logging into different products.
Also providing the integration guidelines that makes the integration looking and performing seamlessly.

All components will be displayed in iFrames and they might communicate with each other as information broker. All these components are provided by Yunex ITS or for specific project purposes, they might be third-party components configured by Yunex ITS for the purpose of usage within Symphony-App-Frame.
Symphony-App-Frame does not store personal data and in particular it does not store personal data under the GDPR. Though, it uses session tokens in the browser cache provided by keycloak for IAM to give a single-sign-on experience for all components it displays.

### Purpose

- Display a set of ITS components through iFrames
- Switch between components for different aspects of a work to be done
- Add, display, hide and remove components from an environment
- Provide a single point of entry into the component landscape of ITS
- Provide a communication layer for the components to exchange information.
- Provide a single point of sign on for all components
- Provide a single point for user settings for all components (e.g. language settings, choice of UI themes)

### Scope

Platform UI including

- Main Navbar
- Left Side menu
- Profile (user account)
- Settings (system)
- UI feedback, errors and alerts

![Scope](./images/saf-screens-2.png)

### High level architecture

![high-level-architecture](./images/MOS-Frame-architecture.jpg)


