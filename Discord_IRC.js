const logger = require('./Logger.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const readline = require('readline');

const hook = new Discord.WebhookClient('ID', 'Webhook_token');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const go = async input => {
	await hook.send(input,
		{ avatarURL: 'Image_URL', username: 'username' });

		rl.question('>', go);
};

rl.question('>', go);
