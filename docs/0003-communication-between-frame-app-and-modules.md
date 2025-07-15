# 0003 - Communication between frame application and modules

Date: 2019-12-09

## Status

Proposed

## Context

We need a way to communicate between frame application and modules. E.g. for usecases like [Synchronizing the URL](0004-url-synchronization.md) or deep linking between modules.

Preconditions: 

* The modules are reachable on subdomains. E.g. module1.foo.com and module2.foo.com.
* The communication between Frame application and modules has to be asynchronous (see [ADR-0002](0002-iframe-performance.md)).

To communicate between iFrames and the parent window, there are different possibilities:

* Synchronous JavaScript calls, by just calling the JavaScript function on the other window object.
* Cookies for storing the data.
* StorageEvents of LocalStorage, SessionStorage or IndexedDB to send and listen for data.
* BroadcastChannel API to send messages between windows.
* window.postMessage() to send messages between windows.

## Decision

We will use two browser APIs to implement the communication.

1. To comunicate between Frame application and module, we will use `window.postMessage()` API. Every other approach does not fit our usecase, as the Same-Origin-Policy of webbrowsers prohibits the communication between different subdomains.

2. To support multiple instances of the frame application, the messages will be distributed to the different instances with the ``BroadcastChannel`` API.

Example:

Let's assume the user has opened the frame application twice. If “Module 1” wants to call all instances of “Module 2”, the simplified sequence diagram could be like this:

![Example usecase](./0003-communication-between-frame-app-and-modules.png)


## Consequences

- All modules has to run inside of the frame application in an iFrame.
- Communication with modules running standalone, e.g. in a detached window, is not supported.
- The communication has to be secure. Messages sent from other webpages should be dropped.
- We have to implement a request/response pattern for later usecases.
- We have to define a common structure for the messages.