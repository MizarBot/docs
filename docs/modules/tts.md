# Text to Speech

> Text to Speech (TTS) is part of my **Voice Module** which allows users to join a conversation in a voice channel even if they are unable to speak.

## TTS Modes
TTS can be run in two modes:
* Manual TTS
* Automatic TTS

### Manual TTS
The `!tts` command can be used to convert a message into an audio format.

* If you run the command when currently connected to a voice channel, Mizar will connect to it and say the requested phrase.
* If you are not connected to a voice channel or use the `-mp3` option, Mizar will return an MP3 file instead.

### Automatic TTS
By configuring the **TTS Text Channels** option in the **Voice** section of the Admin Panel, when a message is sent in one of these channels Mizar will connect to the user's voice channel and speak it.

This is subject to the following conditions:
* There are at least **two** human users in the users's voice channel
* If there are **TTS Voice Channels** whitelisted, the users's voice channel is in this list
* The message is not sent by a bot, and is not a Mizar bot command
* There is an available Mizar user that is not currently in use (e.g. already playing music)

## TTS Voices
Mizar offers over 100 different voices across over 25 languages. The full list of these can be found by running the `!voices` command.

When running the `!tts` command, the voice can be set by using the `-voice` argument, e.g. `!tts -voice fr-FR-f1 Bonjour`.

### User Default Voice
Each user can set their own voice by running the `!voices set [code]` command, e.g. `!voices set es-ES-m1`. These will override the Guild Default Voice.

### Guild Default Voice
**TTS Default Voices** can be set in the **Voice** section of the Admin Panel. By default, all of the English voices will be selected.

Users will then be randomly allocated one of these according to the **discriminator** in their username (e.g. Mizar#**7510**).

## Say Author
The **Say Author** option on the Admin Panel determines whether TTS messages are prefixed with "User Said X." There are three modes, of which **Smart** is set by default:
* **Off** - never say
* **Always** - always say
* **Smart** - say for the first time that a user uses TTS within a 2 minute period, providing that they have not switched voices and not other users have used the same voice

## Channel Join/Leave Announcements
The **Channel Join/Leave Announcements** switch on the Admin Panel determines whether Mizar will connect and say "User Joined/Left" when they move between channels.

This is subject to the same conditions as **Automatic TTS**.