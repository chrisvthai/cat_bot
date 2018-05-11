module.exports = {
	name: 'catpic',
	description: 'You\'re bored and you want a cat pic',
	usage: '!catpic',
	execute(message, args) {
		var num = Math.floor(Math.random() * 10);
		var filename;
		switch (num) {
			case 0:
				filename = './pics/catpic0.jpg';
				break;
			case 1:
				filename = './pics/catpic1.jpg';
				break;
			case 2:
				filename = './pics/catpic2.jpg';
				break;
			case 3:
				filename = './pics/catpic3.jpg';
				break;
			case 4:
				filename = './pics/catpic4.jpg';
				break;
			case 5:
				filename = './pics/catpic5.jpg';
				break;
			case 6:
				filename = './pics/catpic6.jpg';
				break;	
			case 7:
				filename = './pics/catpic7.webp';
				break;
			case 8:
				filename = './pics/catpic8.webp';
				break;
			case 9:
				filename = './pics/catpic9.webp';
				break;
		}
		message.channel.send('Here you go! :cat:', {files: [filename]});
	}
}