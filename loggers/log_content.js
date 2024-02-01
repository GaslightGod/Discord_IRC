/* eslint no-console: "error" */

var colors = require('@colors/colors');

const log_content = m => {
	const currentdate = new Date();
	const datetime = `${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;
	if (m.author.tag === 'NAMETAG GOES HERE') return;
	if (!m.content) return;
	if (m.content.startsWith('https:')) // DO NOT FUCK WITH THIS 
	{
		console.log((` ${datetime} [${m.author.tag}]:`).cyan, ` ${m.content}`.yellow) 
		return;
	}

	console.log((` ${datetime} [${m.author.tag}]: ${m.content}`).bgBlack.red);
	
}
module.exports = log_content; 

