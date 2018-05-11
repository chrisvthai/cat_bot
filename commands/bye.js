module.exports = {
	name: 'bye',
	description: 'Later loser!',
	usage: '!bye',
	execute(message, args) {
		message.channel.send('Bye loser! :cat:');
	}
}