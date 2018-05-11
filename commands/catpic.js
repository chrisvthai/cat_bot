module.exports = {
	name: 'catpic',
	description: 'You\'re bored and you want a cat pic',
	usage: '!catpic',
	execute(message, args) {
		var fs = require('fs');
		var files = fs.readdirSync('pics/');

		var num = Math.floor(Math.random() * files.length);
		var filename = files[num];
	
		message.channel.send('Here you go! :cat:', {files: [`pics/${filename}`]});
	}
}