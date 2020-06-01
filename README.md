# byte-discord
An extremely simple Discord moderator bot. No levels, no bloated commands.

It only does three things:
- Deletes messages that contain words in a swear list
- Alerts mods when someone leaves the server
- Logs messages that are edited

## Prerequisites
You'll need `node`, which can be downloaded [here](https://nodejs.org/en/) (v12 LTS should be fine).

You'll also need to make a Discord Application and Bot User on the [Discord Developer Portal](https://discord.com/developers/applications). Once you've made the application you can invite the bot to your server.
There are many guides out there detailing how to do this, so it won't be repeated here.

Download the repo and open a command prompt in the directory.
![Command Prompt example](https://i.imgur.com/bYkUkNi.png)

Type `npm install` and press enter.

## Setup
Open `config.js` to configure the bot. The following properties can be set:

Property| Description
------------ | -------------
prefix | Prefix used for bot commands.
token | Bot token from the Discord Developer Dashboard.
guildId | The ID of the server where the bot will listen to events.
logsChannelId | The ID of the channel where message edits and member leave notices are posted.
admins | A list of Discord User IDs who are allowed to execute commands.
dmSwearWarning | Set this to true to DM swear warnings to the user instead of posting them to the server. (The user may have DMs disabled and may not recieve the message.)
swearList | The list of words the bot will look out for in messages. Messages containing these terms will be deleted.

Getting the required IDs can be obtained by enabling Discord's Developer Mode. More information on this can be found [here](https://discordia.me/en/developer-mode).

Once you've configured everything you can type `node index` in the command prompt to start the bot.