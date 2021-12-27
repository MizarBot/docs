---
sidebar_position: 4
---

# Moderation - Mutes

:::info
Muting is part of my **Moderation Module** which allows moderations to mute or timeout users.
:::

## Muting Modes
By default, muting uses **Discord Timeouts** which often has more advantages to using the legacy **Role Overrides** option. However, this can be toggled in the Admin Panel inside the **Mute** command options.

## Discord Timeouts
Discord Timeouts are a relatively new feature built into Discord which allows users with the **Moderate Members** permission to time out users for a predetermined period of time.

When 'timed out', users cannot:
* Send messages
* Add new reactions to messages
* Join voice channels

Users that are timed out will see a notice and countdown to when the time out will end.
![Screenshot of a timed out user](https://support.discord.com/hc/article_attachments/4416507874455/Timed_out.png)

Through the Discord UI, users can be timed out for 60 seconds, 5 minutes, 1 hour, 1 day or 1 week. However, though Mizar, the maximum timeout is **4 weeks**. This means that if a moderator was to time out a user for 5 weeks, Mizar would apply a 4 week time out, then apply another week later into the time out period.

### Advantages
* Timed out users see a notice and countdown to time out expiry
* Moderators can easily see timed out users with an icon next to their name

### Disadvantages
* The maximum time out is 4 weeks, so Mizar must automatically renew the time out for longer periods. This leads to the countdown being inaccurate
* Timed out users cannot join voice channels at all

## Role Overrides
Role Overrides are the legacy muting method, which is often found in other moderation bots too.

These work by creating a **Muted** role and then creating a permission override for each channel, denying users the Send Message (etc.) permission.

:::info
If channels are created and muted users can speak in them, delete the Muted role and re-mute the user to regenerate the role overrides.
:::

### Advantages
* All users, including those without the Moderate Members permission, can see if a user has the Muted role
* Muted users can join voice channels, but not speak

### Disadvantages
* Channel role overrides must be made for each channel, which can make them more complicated to edit
* If a user has an existing role override that allows them to send messages or speak, this cannot be disabled whilst muted
* If moderators also use Discord Timeouts through the API when a user is already muted, the Muted role will need to removed manually
* If many channels are being created, the role will need to be recreated to regenerate the overrides
