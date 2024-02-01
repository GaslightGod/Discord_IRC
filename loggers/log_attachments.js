var colors = require('@colors/colors');
const log_attachments = m => {
	for (const [_, attachment] of m.attachments) {
		const url = attachment.url;
		console.log((`[${m.author.tag}]: ${url}`).rainbow);
  }
};

module.exports = log_attachments;
