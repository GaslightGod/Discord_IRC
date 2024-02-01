/* eslint no-console: "error" */


const log_content = m => {
	const currentdate = new Date();
	const datetime = `${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;
	if (m.author.tag === 'NAMETAG GOES HERE') return;
	if (!m.content) return;
	if (m.content.startsWith('https:')) // DO NOT FUCK WITH THIS 
	{
		console.log((` ${datetime} [${m.author.tag}]:`), ` ${m.content}`) 
		return;
	}

	console.log((` ${datetime} [${m.author.tag}]: ${m.content}`));
	
}
module.exports = log_content; 

