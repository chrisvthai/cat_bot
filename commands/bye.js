module.exports = {
	name: 'bye',
	description: 'Ugh, good riddance!',
	usage: '!bye',
	execute(message, args) {
		message.channel.send(`${message.author}\nBye loser! :cat:`);
	}
}