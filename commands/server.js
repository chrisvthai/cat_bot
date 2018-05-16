module.exports = {
	name: 'server',
	description: 'Giff server info!',
	usage: '!server',
	execute(message, args) {
		message.channel.send(`${message.author}\nThis server's name is: ${message.guild.name}!\nTotal members: ${message.guild.memberCount}`);
	}
}