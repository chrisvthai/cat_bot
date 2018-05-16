/*Urban dictionary query*/
module.exports = {
	name: 'dict',
	description: 'Find out what a word means by looking up Oxford Dictionary (also for when Bobby blanks on a word b/c he\'s dumb!',
	usage: '!dict <word>',
	execute(message, args) {
		var request = require('request');
		const data = [];

        if (!args.length) {
        	data.push(`${message.author} Right, because looking up nothing in a dictionary is totally useful right?`);
        	message.channel.send(data); 
        }
        else {
        	
        	var options_1 = {
        		url: `https://od-api.oxforddictionaries.com/api/v1/entries/en/${args[0]}`,
        		headers: {
        			'app_id': '7d7bb585',
        			'app_key': 'ee0dd4b05d8dc2fee8c790e50d07404f'
        		}
        	};

        	request(options_1, (err, res, body) => {
        		if (err) {return console.log(err);}

        		console.log(body);

        		if (res.statusCode !== 200) {
        			if (res.statusCode === 404) { //Look for the inflection using lemmatron
        				console.log("Did not find word, gonna try to find an inflection");
        				var options_2 = {
        					url: `https://od-api.oxforddictionaries.com/api/v1/inflections/en/${args[0]}`,
        					headers: {
        						'app_id': '7d7bb585',
        						'app_key': 'ee0dd4b05d8dc2fee8c790e50d07404f'
        					}
        				};

        				request(options_2, (err2, res2, body2) => {
                                                if (res2.statusCode === 404) {
                                                        data.push(`${message.author} Your word '${args[0]}' does not exist in the Oxford dictionary, or I may have stupidly queried the database wrong!`);
                                                        message.channel.send(data);
                                                        return;
                                                }
        					var body2_json = JSON.parse(body2);
        					var new_word = body2_json.results[0].lexicalEntries[0].inflectionOf[0].id;
        					console.log("New word inflected: ", new_word);
        					//data.push(`We did not find the word ${args[0]}, but we did find an inflection ${new_word}! Here's the definition of ${new_word}`);

        					//Another request for the new word now!
        					var options_3 = {
        						url: `https://od-api.oxforddictionaries.com/api/v1/entries/en/${new_word}`,
        						headers: {
        							'app_id': '7d7bb585',
        							'app_key': 'ee0dd4b05d8dc2fee8c790e50d07404f'
        						}
        					};

        					request(options_3, (err3, res3, body3) => {
        						var body3_json = JSON.parse(body3);
        						data.push(`${message.author} We did not find the word '${args[0]}', but we did find an inflection '${new_word}'! Here's the definition of '${new_word}'`);	
        						data.push('\`\`\`');
        			
        						var i = 0;

        						while (i < body3_json.results[0].lexicalEntries.length) {
        							data.push(`${i+1}. ${body3_json.results[0].lexicalEntries[i].entries[0].senses[0].definitions[0]}`);
        							i++;	
        						}
        						data.push('\`\`\`');

        						message.channel.send(data);
        					});
        				});
        			}
        		} else {
        			data.push(`${message.author} The definition of '${args[0]}' according to the Oxford dictionary is:`);	
        			data.push('\`\`\`')
        			
        			var i = 0;
        			var body_json = JSON.parse(body);

        			while (i < body_json.results[0].lexicalEntries.length) {
    
        				data.push(`${i+1}. ${body_json.results[0].lexicalEntries[i].entries[0].senses[0].definitions[0]}`);
        				i++;	
        			}
        			data.push('\`\`\`')

        			message.channel.send(data);
        		}

        		/*if (body.result_type === "no_results") {
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
        		message.channel.send(data); */
        	});
		}
		//message.channel.send(data);      	 
	}
}