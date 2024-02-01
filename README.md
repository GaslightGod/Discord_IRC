# Discord_IRC
<div align="center">
  <img src="https://cdn.discordapp.com/attachments/1003507541382287503/1202621750136021023/image.png?ex=65ce1fc8&is=65bbaac8&hm=83bcf2e79e2e8a46bd19200ebc39d3d96e2c98fdcdd176629c8c848d58c1387c&" alt="Alt Text" width="400">
</div>

## Introduction

Discord_IRC is an advanced Discord IRC (Internet Relay Chat) bot designed to intelligently monitor and log messages within a specified channel. 
This bot excels in capturing message content and attachments, providing users with a comprehensive and streamlined logging solution.

## Prerequisites
Before delving into the deployment of Discord_IRC, ensure that your system is equipped with the following prerequisites:
<a target="_new" href="https://nodejs.org/">Node.js</a> (Version 14 or higher)

## Discord Bot Setup

### Create a Discord Bot:
    
Visit the <a target="_new" href="https://discord.com/developers/applications">Discord Developer Portal</a>
    Initiate the creation of a new application, providing it with a meaningful name.
    Navigate to the "Bot" section and instantiate your bot by clicking on "Add Bot."
    Record the issued token; this token is instrumental for successful configuration.
    
  <div align="center">
  <img src="https://media.discordapp.net/attachments/1003507541382287503/1202622522101858304/image.png?ex=65ce2080&is=65bbab80&hm=85a16a244169c74c58b45aeae6adbbf0d79bf0cd358bd0a9192ed1757cc0a120&=&format=webp&quality=lossless&width=720&height=78" alt="Alt Text" width="600">
</div>


### Invite the Bot to Your Server:
 Within the Discord Developer Portal, navigate to the "OAuth2" section.
      Configure the "OAuth2 URL Generator" by selecting the "bot" scope.
      Specify the required permissions for your bot:
        Read Messages
        Send Messages
        Read Message History
      Copy the generated URL and seamlessly add your bot to the server following the presented prompts.

### Create a webhook in the channel you wish to send messages in
  Within Discord, navigate to the channel setting and select integrations
  Create a new webhook
  Copy the webhooks URL and open it in your browser
  
## Installation
Clone the repository to your local machine:

```bash
git clone https://github.com/GaslightGod/Discord_IRC.git
```
Navigate to the project directory:

```bash
cd Discord_IRC
```
Install the essential Node.js modules:
```bash
npm install
```
Install Discord.js
```bash
npm install discord.js@12.5.1
```

## Configuration
1. Open the **loggers/config.js** file.
    
2. Replace '**Bot_Token**' with the unique token assigned to your Discord bot.
    
3. Specify '**Channel_id**' with the Discord channel ID designated for bot monitoring.
    
4. Add Webhook Token and ID:
       Access the **Discord_IRC.js** file and locate the following instantiation:
  ```js 
const hook = new Discord.WebhookClient('ID', 'Webhook_token');
```
  Replace **'ID'** & **'Webhook_token'** with the relative information
  
5. Personalize the username and avatarURL properties as required:
```js
{ avatarURL: 'Image_URL', username: 'username' });
```
6. Access the **log_content.js** file and locate the following line
```js
if (m.author.tag === 'NAMETAG GOES HERE') return;
```
This is case sensitive to what you set your username to, make sure they match!

## Usage
To run the Discord IRC bot, follow these steps:

1. Open a terminal and navigate to the project directory:

```bash 
cd path/to/Discord_IRC
```
2. Run the bot:
```bash
node Logger.js
```
Additionally, run the Discord IRC:
```bash
node Discord_IRC.js
```
3. The bot will now be active, monitoring the specified Discord channel.

## Issues
If you need any help open an issue and let me know what is happening and I'll get back in a timely manner.
