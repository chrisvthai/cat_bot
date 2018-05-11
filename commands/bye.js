module.exports = {
	name: 'bye',
	description: 'Ugh, good riddance!',
	usage: '!bye',
	execute(message, args) {
		message.channel.send('Bye loser! :cat:');
	}
}