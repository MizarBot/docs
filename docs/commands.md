---
sidebar_position: 3
---

# Using Commands
Commands are the main feature of Mizar, and are used to interact with the bot.

## The Help Command
The `/help` command can be used inside a text channel to list all the commands that the user has access to.

This command additionally accepts a command argument, in the format `/help [commandName]`, to provide more information about a command itself.

:::info
The complete command list and detailed information about each command can be found on [Mizar's command page](https://mizarbot.xyz/commands).

Please note, however, that your specific server may have several commands disabled and several commands renamed - check your guild's command page for a more accurate list.
:::

## Command Types
Mizar offers two different methods to execute commands: text (custom prefix) commands and slash commands.

### Text Commands
Text commands are the original command method. **Prefix** and **prefix aliases** can be set on the webpanel (with the default being `!`), and the bot will check any message that starts with this prefix for a valid command.

E.g. `!help`

### Slash Commands
Slash commands are Discord's new command method. Typing `/` in the message box will open a list of Mizar's commands, and you can continue typing to find the command that you would like to execute. The advantage of this method is that the available arguments will be displayed as you enter them so there is less need to remember them.

## Arguments
Each command may accept a certain number of arguments, which are displayed on the [command page](https://mizarbot.xyz/commands) or by using the `/help [commandName]` command.

* Required arguments are shown by angle brackets, e.g. `<requiredArgument>`.
* Optional arguments are shown by square brackets, e.g. `[optionalArgument]`.

### Argument Types
| Type | Description | Examples |
| ---- | ----------- | ------- |
| String | A sequence of characters | `Hello` |
| Integer | A whole number | `5`, `14`, `-4` |
| Boolean | Yes or no | `Yes`/`No`<br />`True`/`False` |
| Member | A member in the server | `@Mizar`, `Mizar#7510`, `Mizar` |
| Channel | A channel in the server | `#general`, `Voice Chat` |
| Role | A role in the server | `@Admin`, `Moderators` |
| Message | A message in the server | `893598469292437596`, `https://discord.com/channels/761001765285134346/761001765285134350/893598510094647398` |
| Emoji | A default or custom emoji | `👋` |
| Time | A date and time | `5:34pm`, `23:11`, `01/01/2022`, `Tomorrow` |
| Timezone | A timezone, or a user with a set timezone | `UTC`, `AEST`, `@Mizar` |
| Voice | A TTS voice | `en`, `fr-FR`, `hi-IN-m1` |
| Colour | A colour | `Red`, `#00bc8c` |