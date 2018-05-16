/*Urban dictionary query*/
module.exports = {
	name: 'ud',
	description: 'Find out what idiots on the internet think a word means',
	usage: '!ud <word>',
	execute(message, args) {
		var request = require('request');
		const data = [];

        if (!args.length) {
        	data.push(`${message.author} Right, because looking up nothing in a dictionary is totally useful right?`);
        	message.channel.send(data); 
        }
        else {
        	

        	request(`http://api.urbandictionary.com/v0/define?term=${args[0]}`, {json: true}, (err, res, body) => {
        		if (err) {return console.log(err);}

        		console.log(body.result_type);

        		if (body.result_type === "no_results") {
        			console.log('No results :(');
        			data.push(`Aww, nobody's cared to define '${args[0]}' on urban dictionary! How sad!`);
        		}
        		else {
        			console.log('Results! Yay!');
        			data.push(`${message.author} The top definition of '${args[0]}' according to urban dictionary is:`);	
        			
        			var i = 0;
        			while (i < body.list.length) {
        				if (body.list[i].definition.length >= 1900)
        					i++;
        				else {
        					data.push(`\`\`\`${body.list[i].definition}\`\`\``);
        					break;
        				}
        			}
        			if (i >= body.list.length)
        				data.push('```JUST KIDDING! The top definitions are so long for the Discord API to handle. Sorry!```');		
        		}
        		message.channel.send(data); 
        	});
		}
		//message.channel.send(data);      	 
	}
}