---
sidebar_position: 5
---

# Privacy Policy
Mizar takes personal data seriously and is compliant with the UK Data Protection Act 2018 and General Data Protection Regulation.

## What Information is Stored?
For any user who logs into the website, Mizar stores their:
* User ID
* OAuth token, refresh token and expiry date
  
For any member who is part of a guild with Mizar, Mizar can store their:
* User ID
* Role IDs
* Nickname
* Number of messages sent
* Time spent in voice chat
* Experience and level
* Moderation actions
  
For any user who logs into the website or is in a guild with Mizar, Mizar can store their:
* User ID
* Tag (username)
* Avatar URL
* User defined timezone

For any guild that Mizar is in, Mizar stores its:
* Guild ID
* Name
* Owner tag
* Guild settings

## Why is it Stored?
* User IDs and guild IDs are used to track which user/guild the data is regarding.
* OAuth information is used to persist a user's authentication session between multiple individual sessions, so they do not have to keep logging in. The OAuth token itself is stored to allow a user to be logged in from multiple different browsers at once.
* Role IDs and nicknames are used for user persistence if the user leaves the guild, so if the user joins again within a short timeframe their roles and nickname can be restored.
* Number of messages sent, time spent in voice chat and experience are used for ranks and the levelling leaderboard
* Moderation actions are used to keep a record of all actions taken against a user
* Tags and avatar URLs are used for the levelling leaderboard, so each user doesn't have to be manually fetched every time the leaderboard is loaded.
* Guild names and owner tags are used for the website so that users can easily see which guild they are currently viewing.

## How Long is it Stored?
* Users can be retained for up to two months depending on the guilds' individual user persistence settings
* Guilds can be retained for up to one week to allow for settings restoration if Mizar is accidently removed

## Where is it Stored?
All information is stored in a database hosted in the EU, which only Mizar developers have access to. These are routinely backed up.

A temporary cache of your data will be stored on the server Mizar is running on, in a data centre in the United Kingdom.

Essential information such as tokens is stored in your browser as cookies and local storage.

## Third Parties
Mizar shares data with the following third parties to improve the bot and fix bugs:
- [Statcord](https://statcord.com)
- [Google Analytics](https://analytics.google.com)
- [Sentry](https://sentry.io)
- [New Relic](https://newrelic.com)

Mizar also uses several other 3rd parties for commands (e.g. YouTube, Genius, Merriam-Webster dictionary, etc.) however the personal information sent is limited to the arguments used in commands (e.g. song names)

## Discord Privileged Intents
To protect users, Discord requires bots such as Mizar to clearly state why they need to see specific data before it can be accessed. The requested intents have been stated here for the sake of transparency:
- **Server Members Intent** - Mizar requires server member data for the audit log, moderation commands, roles commands and whois command.
- **Presence Intent** - Mizar requires presence data for the audit log and leaderboard.
- **Message Content Intent**  - Mizar requires message content data for custom commands, auto TTS and reaction translation.

## Removing Your Data and Requesting More Information
Please join the [support Discord server](https://mizarbot.xyz/support) if you have any questions or would like to request your data be deleted.

Alternatively, email [help@mizarbot.co.uk](mailto:help@mizarbot.co.uk).
