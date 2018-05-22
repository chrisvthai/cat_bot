const {prefix} = require('../auth.json');

module.exports = {
    name: 'help',
    description: 'List all of my commands or info about a specific command.',
    usage: '!help or !help <cmd>',
    execute(message, args) {
        const {commands} = message.client;
        const data = [message.author];

        if (!args.length) {
        	data.push(`Here\'s as list of all my commands :cat::`);
        	data.push(commands.map(command => command.name).join(', '));
        	data.push(`\nYou can send \`${prefix}help [command name]\` to get info on that specific command!`);
        }
        else {
        	if (!commands.has(args[0])) {
        		return message.reply(`That\'s not a valid command!`);
        	}
        	const command = commands.get(args[0]);
        	data.push(`**Name:** ${command.name}`);

        	if (command.description) data.push(`**Description:** ${command.description}`);
			if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
			if (command.usage) data.push(`**Usage:** ${command.usage}`);
            if (command.examples) data.push(`**Examples:** ${command.examples}`);
		}
      	
      	message.channel.send(data);  
    },
};