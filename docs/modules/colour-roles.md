---
position: 2
---

# Colour Roles

:::info
Colour Roles are part of my **Roles Module** and allow each user to choose their own colour. As this works by creating a role *per user*, this is highly not recommended with large guilds to prevent reaching the Discord role limit (250).
:::

:::note
This feature is disabled by default, and must be manually enabled on the Admin Panel.
:::

## Admin Panel Settings
* **Colour Role Position** - an existing role which new colour roles will be created *underneath*
* **Enforce Role Hierarchy** - whether to allow users to change the colour role of a higher-ranked user
* **Set Other Member Restrictions** - [restrictions](../getting-started/restrictions) that determine if a user can change other user colours

## Command Usage
The `!colourrole` can be used to configure colour roles:
* Get your current colour with `!colourrole`
* Set your own colour with `!colourrole [colour]`, e.g. `!colourrole red`
* Get another person's current colour with `!colourrole [user] query`, e.g. `!colourrole Mizar query`
* Set another person's colour with `!colourrole [user] [colour]`, e.g. `!colourrole Mizar #2ec4f8`

## Removing Colour Roles
The **Remove All Colour Roles** (`!removecolourroles`) function can be used to delete all generated colour roles.