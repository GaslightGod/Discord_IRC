# Discord_IRC

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
### Invite the Bot to Your Server:
 Within the Discord Developer Portal, navigate to the "OAuth2" section.
      Configure the "OAuth2 URL Generator" by selecting the "bot" scope.
      Specify the required permissions for your bot:
        Read Messages
        Send Messages
        Read Message History
      Copy the generated URL and seamlessly add your bot to the server following the presented prompts.

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

## Configuration
    1. Open the **loggers/config.js** file.
    
    2. Replace '**Bot_Token**' with the unique token assigned to your Discord bot.
    
    3. Specify '**Channel_id**' with the Discord channel ID designated for bot monitoring.
    
    4. Customize Username and Image URL:
       Access the **Logger.js** file and locate the following instantiation:
  ```js 
const hook = new Discord.WebhookClient('ID', 'Webhook_token');
```
  Replace **'ID'** & **'Webhook_token'** with the relative information

  Personalize the username and avatarURL properties as required:
```js
const hook = new Discord.WebhookClient('ID', 'Webhook_token', { username: 'YourUsername', avatarURL: 'YourImageURL' });
```
