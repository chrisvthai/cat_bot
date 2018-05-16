module.exports = {
	name: 'hi',
	description: 'You would like a salutation, no?',
	usage: '!hi',
	execute(message, args) {
		message.channel.send(`${message.author}\nMeow! :cat:`);
	}
}