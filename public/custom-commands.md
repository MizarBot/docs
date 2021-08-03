# Custom Commands
Custom commands can be used to truly customize Mizar. Add your own responses to messages that match a phrase or regex filter and create short commands which can be used to prefill normal command arguments

## Triggers
Triggers are the event that causes the custom command to run. They can be one of the following:
* **Command** - Treated as a regular command and will return errors as normal. Can be used to prefill existing command arguments, e.g. '!playlist' can be a shortcut for '!play Faded'
* **Phrase** - Will trigger if any user sends a message containing a case-sensitive phrase. * and ? can be used as wildcards
* **Regex** - Advanced use only - will trigger if a user sends a message that matches a Regular Expression. Please see [Regexr](https://regexr.com) for more details and to test your Regex

## Actions
Actions are the events that will be executed when the command is triggered:
* **Command** - A Mizar command that will be run, without any prefix. Must include all arguments. No errors will be shown if the trigger is a phrase or regex
* **Message** - A custom message that will be sent

## Restrictions
Restrictions can be used to limit the custom command to a certain channel/user. They work in exactly the same way as other Mizar restrictions do, except no errors will be shown if the trigger is a phrase or regex. Please see the [restrictions page](/restrictions) for more information.