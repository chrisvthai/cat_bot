module.exports = {
    name: 'link',
    description: 'Link your Blizzard, League of Legends, Steam, Fortnite account!',
    usage: '!link <service> <account_name>, where service = blizzard, lol, steam, fortnite, pubg\nor !link <service>',
    examples: '\n!link blizzard cats#124\n!link steam',
    execute(message, args) {

        const {commands} = message.client;
        const discord_acct = message.author.username;
        console.log(`Discord account: ${discord_acct}`);
        console.log(`Discord ID: ${message.author.id}`);

        const sqlite3 = require("sqlite3").verbose();
        let db = new sqlite3.Database('./users.sqlite');
        
        let sql_create = "CREATE TABLE if not exists users (discord TEXT, blizzard TEXT, lol TEXT, steam TEXT, fortnite TEXT, pubg TEXT)";
        db.run(sql_create);

        if (!args.length) {
        	message.channel.send(`${message.author} You gave me nothing to link to? :confused:`);
            return;
        }
        else if (args.length === 1) {
            var types = ['blizzard', 'lol', 'steam', 'fortnite', 'pubg'];
            if (!types.includes(args[0])) {
                message.channel.send(`${message.author} I can't identify what gaming account service '${args[0]}' is. :confused:`);
                return;
            }

            let sql_select = `SELECT * FROM users WHERE discord = '${message.author.id}'`;
            db.get(sql_select, [], function(err, row) {
                if (err) {
                    message.channel.send(`${message.author} It appears you haven't linked any accounts!`);
                    return console.error(err.message);
                }
                console.log(row);
                if (!row) {
                    return message.channel.send(`${message.author} It appears you haven't linked any accounts!`);
                } else {
                    if (!row[args[0]])
                        message.channel.send(`${message.author} It appears your ${args[0]} account name is not linked to anything!`);
                    else
                        message.channel.send(`${message.author} Your ${args[0]} account name is linked as '${row[args[0]]}'!`);
                }
            });
            return;
		}
      	else {
            var types = ['blizzard', 'lol', 'steam', 'fortnite', 'pubg'];
            if (!types.includes(args[0])) {
                message.channel.send(`${message.author} I can't identify what gaming account service ${args[0]} is. :confused:`);
                return;
            }
            else { //Go into the SQLite database
                let sql_create = "CREATE TABLE if not exists users (discord TEXT, blizzard TEXT, lol TEXT, steam TEXT, fortnite TEXT, pubg TEXT)";
                let sql_update = `UPDATE users SET ${args[0]} = '${args[1]}' WHERE discord = ${message.author.id}`;
                let sql_insert = `INSERT INTO users (discord, ${args[0]}) VALUES (${message.author.id}, '${args[1]}')`; 
                let sql_select = `SELECT * FROM users WHERE discord = '${message.author.id}'`;

                console.log('sql_create = ' + sql_create);
                console.log('sql_update = ' + sql_update);
                console.log('sql_insert = ' + sql_insert);
                console.log('sql_select = ' + sql_select);

                db.get(sql_select, [], function(err, row) {
                    if (err) {
                        return console.error(err.message);
                    }
                    else if (!row) { //No row found
                        console.log("No row found.");
                        db.run(sql_insert, function (err) {
                            if (err) {
                                message.channel.send(`${message.author} Uh oh! Something went wrong trying to link your account! :neutral_face:`);
                                return console.error(err.message);
                            }
                            console.log(`A row has been inserted with discordID ${message.author.id}`);
                            message.channel.send(`${message.author} Succesfully linked your ${args[0]} account to '${args[1]}'!`);
                        });
                    } else {
                        console.log("Row found!");
                        db.run(sql_update, function (err) {
                            if (err) {
                                message.channel.send(`${message.author} Uh oh! Something went wrong trying to link your account! :neutral_face:`);                                
                                return console.error(err.message);
                            }
                            console.log(`Row updated: ${this.changes}`); 
                            message.channel.send(`${message.author} Succesfully linked your ${args[0]} account to '${args[1]}'!`);  
                        });
                    }
                });
            }
        } 
        db.close();     
    },
};

//Previous code using sqlite (not sqlite3)
/*
        const {commands} = message.client;
        const discord_acct = message.author.username;
        console.log(`Discord account: ${discord_acct}`);
        console.log(`Discord ID: ${message.author.id}`);

        const sql = require("sqlite");
        sql.open("./users.sqlite");

        if (!args.length) {
            message.channel.send(`${message.author} You gave me nothing to link to? :confused:`);
            return;
        }
        else if (args.length === 1) {
            message.channel.send(`${message.author} You only gave me one parameter. I need two! :rage:`);
            return;
        }
        else {
            var types = ['blizzard', 'lol', 'steam', 'fortnite', 'pubg'];
            if (!types.includes(args[0])) {
                message.channel.send(`${message.author} I can't identify what gaming account service ${args[0]} is. :confused:`);
                return;
            }
            else { //Go into the SQLite database
                sql.all(`SELECT * FROM users WHERE discord = "${message.author.id}"`, function (err, row) {
                    if (!row) { //can't find row!
                        sql.run(`INSERT INTO users (discord, ${args[0]}) VALUES (${message.author.id}, '${args[1]}')`);//, [message.author.id, args[1]]);
                    } else { //Found the row!
                        sql.run(`UPDATE users SET ${args[0]} = '${args[1]}' WHERE discord = ${message.author.id}`);
                    }
                    console.log(`In database, we have discord = ${row.discord}, blizzard = ${row.blizzard}, lol = ${row.lol}, steam = ${row.steam}, fortnite = ${row.fortnite}, pubg = ${row.pubg}`);
                }).catch(() => {
                    console.error;
                    sql.run("CREATE TABLE if not exists users (discord TEXT, blizzard TEXT, lol TEXT, steam TEXT, fortnite TEXT, pubg TEXT)").then(() => {
                        sql.run(`INSERT INTO users (discord, ${args[0]}) VALUES (${message.author.id}, '${args[1]}')`);//, [message.author.id, args[1]]);
                    });
                    console.log(`In database, we have discord = ${row.discord}, blizzard = ${row.blizzard}, lol = ${row.lol}, steam = ${row.steam}, fortnite = ${row.fortnite}, pubg = ${row.pubg}`);
                });
            }
        }      
*/