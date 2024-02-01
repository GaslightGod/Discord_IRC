const Discord = require('discord.js');
const client = new Discord.Client();
const log_content = require('./loggers/log_content');
const log_attachments = require('./loggers/log_attachments');
const config = require('./loggers/config');
config.monitor_id;

client.on('message', m => {
	if (m.author.id === client.user.id) return;
	if (m.channel.id !== config.monitor_id) return;

	log_content(m);
	log_attachments(m);
});

client.login(config.token);
