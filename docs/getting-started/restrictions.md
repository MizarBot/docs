---
sidebar_position: 3
---

# Restrictions
![An image of two restrictions](/images/restrictions.jpg)

Restrictions can be added to commands, modules or the entire guild using the online dashboard. They allow for the most flexibility in defining which commands users can execute and where they can execute them.

:::note
Mizar's restrictions system is completely separate to Discord's new [slash command permission system](https://discord.com/blog/slash-commands-permissions-discord-apps-bots). Mizar's restrictions are more powerful and apply to both [slash commands and text commands](./commands).

If you are having issues using this system, feel free to reach out on the [Support Discord](https://mizarbot.xyz/discord)
:::

Restrictions are divided into multiple **Restriction Cards** - such as `cankick` and `staff`. These restriction cards can be created, accessed and edited across the whole guild admin dashboard - so, for example, the `staff` restriction card could be applied to several commands.

* For a user to run a command, they must meet **at least one** Restriction Card.

Within each restriction card, there are multiple **Restriction Paths** separated by the `Or` divider.

* For a user to pass a Restriction Card, they must meet **at least one** Restriction Path.

Within each restriction path, multiple individual **Restriction Conditions** can be set.

* For a user to pass a Restriction Path, they must meet **all** Restriction Conditions.

:::info
**Example using the above configuration**

From the above image, the user must meet the following conditions:

* Meet the `cankick` Restriction Card, i.e.
  * Have the `Kick Members` Discord permission
* **OR** meet the `staff` Restriction Card, i.e.
  * Have both the `Admin` Discord role **AND** be in the `#private` channel
  * **OR** be the user named `JTwhizzkid`
:::


## Adding a Restriction
![An image of adding a restriction](/images/add-restriction.jpg)

To add a new restriction to the restrictions list, you can either select an existing one by using the dropdown box or creating a new one by entering a new name.

## Configuring a Restriction
![A labelled image of an individual restriction](/images/restriction.jpg)

* Each restriction will consist of one or more **paths** (the lighter grey areas). These are an `OR` condition - only one of these needs to be met for the restriction to pass
  *	 Additional restrictions can be added using the plus button highlighted in *pink*
* Each path will consist of one or more **conditions** (rows). These are an `AND` condition - all of these needs to be met for the restriction to pass
  * Additional conditions can be added using the plus buttons highlighted in *orange*
  * Conditions can be removed using the cross buttons on the right of the condition
* Conditions have the following options:
  * Type (*blue*):
    * **Permission** - checks that the user has a certain Discord permission
    * **Role** - checks that the user has a certain role
    * **Channel** - checks that the command is being executed in a certain channel or category
    * **User** - checks for a specific user
  * Option (*green*) - either a dropdown box (permission/role/channel) or search field (user) that reflects the condition type
  * Invert (*red*) - will invert the check (e.g. only pass if the channel is **not** `general`)