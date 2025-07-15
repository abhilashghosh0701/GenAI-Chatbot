---
id: action-center

source: 1256849500
---

# Action center

Action center shows all your inbox messages and pending actions from all modules in one place. Here, you can also react on incoming requests without switching to a different user interface.

The Bell icon in notification area informs you about the number of unread messages. The number is also shown in the browser’s tab title.

## Check messages {#Check-messages}

1. Click **Bell icon** in notification area to show or hide Action center sidebar.
2. Check new messages in Action center > **Unread** tab.

   * Message category is represented by icon
   * Message type is represented by color

     + Action based messages are represented in Red
     + Info based messages are represented in Grey
3. You can react on a message by selecting an action. The message will be automatically marked as read and moved to Read tab.
4. You can also manually mark a message as read. It will move to Read tab.

   * Eventually, you can mark a message as unread again. It will move back to Unread tab.
5. To mark all messages as read, click **More** menu (…) > **Mark all as read**.

:::info

Reading and reacting to messages is based on user permissions. The producer of the message (ex: response plans) specifies which permission is needed to view the message and which permission is needed to react to it.

:::

## Mute sound {#Mute-sound}

By default, a sound plays when a new notification arrives.

To mute/unmute the sound, simply use the sound toggle icon in the application header.

## Configure request messages for response plans {#Configure-request-messages-for-response-plans}

You can extend response plans with an intervention request that needs to be confirmed by an operator in order to run the response actions. Simply add a condition with a message text and allowed actions.

1. Go to **Response plans** module, select a response plan and click **Edit**.
2. Go to **Actions** tab and add / insert a **Condition**.
3. Click **Input dialog** button to open **Configure message** dialog.
4. Configure a message:

   * Question text
   * Buttons
   * Message type: Show message in Action center
5. Add action(s) to be executed when user confirms the request.
6. Finish changes and save the response plan.

Once the response plan gets triggered, the message appears in Action center.

## Navigate to path {#Navigate-to-path}

Producer of the message can specify a target path in the message. If it is specified, there will be an icon on the bottom right corner of the message. When clicked, user will be navigated to this path.