---
sidebar_position: 4
---

# Message Placeholders
The **levelling** and **welcome** messages accept message placeholders, which will automatically be filled in with information relating to the user.

These are explained on the admin panel by hovering over the **?**, however here are a list of usable placeholders:

| Category | Placeholder | Description | Example |
| -------- | ----------- | ----------- | ------- |
| Guild | `{guildName}` | The name of the guild | `Mizar Support` |
| Member | `{tag}` | The full username, including the discriminator | `Mizar#7510` |
| Member | `{member}` | The mention of the user | `@Mizar` |
| Member | `{displayName}` | The nickname of the user | `Mizar is Awesome` |
| Member | `{username}` | The username of the user | `Mizar` |
| Member | `{memberJoinedAt}` | When the user joined | `1 January 2021 10:00` |
| Member | `{userCreatedAt}` | When the user created their account | `1 January 2021 10:00` |
| Levelling Member | `{level}` | The user's level | `5` |
| Levelling Member | `{exp}`, `{experience}` | The user's experience | `3.3k` |
| Levelling Member | `{messagesSent}` | The number of messages the user has sent | `1.7k` |
| Levelling Member | `{vcTime}` | The time a user has spent in voice channels | `6h 2m` |
| Misc | `{me}` | The mention of Mizar | `@Mizar` |
| Misc | `{prefix}` | The assigned prefix of Mizar | `!` |