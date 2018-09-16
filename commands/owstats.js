const {prefix} = require('../auth.json');

module.exports = {
    name: 'owstats',
    description: "Get your overwatch stats here! Don't worry if I take a little while to do so!\nPS: This only works if your profile is made public!",
    usage: '!owstats or !owstats <hero>',
    execute(message, args) {


        var request = require('request');
        var ow_heroes = require('../ow_heroes.js');
        const sqlite3 = require("sqlite3").verbose();

        const {commands} = message.client;
        const discord_acct = message.author.username;
        const sql_select = `SELECT * FROM users WHERE discord = '${message.author.id}'`;

        //Function for pulling ow stats
        function getBlizzardStats(bnet_name, hero) {
            if (hero === "none") { // Give out general stats
                var bnet_name_nohash = bnet_name.replace("#", "-");
                var options_1 = {
                    url: `https://owapi.net/api/v3/u/${bnet_name_nohash}/blob`,
                    headers: {
                       'cache-control': 'no-cache',
                       'dnt': '1',
                       'pragma': 'no-cache',
                       'upgrade_insecure-requests': '1',
                       'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36'
                    }
                }
                console.log(options_1);
                //Make HTTP request
                request(options_1, (err, res, body) => {
                    if (err || res.statusCode !== 200) {
                        console.log("Error detected: " + err);
                        console.log(res.StatusCode);
                        return message.channel.send(`${message.author} Uh oh! There was an error fetching your Overwatch stats! I totally blame the website I'm using for this; not my fault! :cold_sweat:`);
                    } else {
                        var body_json;
                        body_json = JSON.parse(body);
                        console.log(body);
                        //console.log(body);
                        //Grab a bunch of data and put it in a discord-formatted message
                        if (body_json.error === "Private")
                            return message.channel.send(`${message.author} Your profile seems to be private! I can't access your Overwatch statistics as a result! :neutral_face:`)
                        var us_stats = body_json.us.stats;
                        var level = us_stats.quickplay.overall_stats.prestige * 100 + body_json.us.stats.quickplay.overall_stats.level;
                        var rank;
                        if (us_stats.competitive.overall_stats.comprank === null)
                            rank = "Unranked";
                        else 
                            var rank = (us_stats.competitive.overall_stats.comprank).toString();
                        var games_won = (us_stats.quickplay.overall_stats.wins + body_json.us.stats.competitive.overall_stats.wins).toLocaleString();
                        var gold_medals = (us_stats.quickplay.game_stats.medals_gold + us_stats.competitive.game_stats.medals_gold).toLocaleString();
                        var silver_medals = (us_stats.quickplay.game_stats.medals_silver + us_stats.competitive.game_stats.medals_silver).toLocaleString();
                        var bronze_medals = (us_stats.quickplay.game_stats.medals_bronze + us_stats.competitive.game_stats.medals_bronze).toLocaleString();
                        var send_me = {
                            "embed": {
                                "title": `Overwatch stats for ${bnet_name}`,
                                "url": `https://playoverwatch.com/en-us/career/pc/${bnet_name_nohash}`,
                                "color": 10079487,
                                "thumbnail": {
                                  "url": body_json.us.stats.quickplay.overall_stats.avatar
                                },
                                "author": {
                                  "name": "Overwatch",
                                  "icon_url": "https://images-ext-1.discordapp.net/external/2Ic2nOllupNnMj4_3oI5UvH_cP_-F8mrsOazG6e_7DU/https/astrabot.net/assets/images/games/overwatch.png"
                                },
                                "fields": [
                                  {
                                    "name": "Account Stats",
                                    "value": `Level: **${level}**\nSkill rating: **${rank}**\nGames Won: **${games_won}**`,
                                    "inline": true
                                  },
                                  {
                                    "name": "Medals",
                                    "value": `Gold: **${gold_medals}**\nSilver: **${silver_medals}**\nBronze: **${bronze_medals}**`,
                                    "inline": true
                                  },
                                  {
                                    "name": "Quickplay Stats",
                                    "value": `Eliminations: **${us_stats.quickplay.game_stats.eliminations.toLocaleString()}**\nDeaths: **${us_stats.quickplay.game_stats.deaths.toLocaleString()}**\nFinal Blows: **${us_stats.quickplay.game_stats.final_blows.toLocaleString()}**\nSolo Kills: **${us_stats.quickplay.game_stats.solo_kills.toLocaleString()}**\nDamage Done: **${us_stats.quickplay.game_stats.all_damage_done.toLocaleString()}**\nHealing Done: **${us_stats.quickplay.game_stats.healing_done.toLocaleString()}**`,
                                    "inline": true
                                  },
                                  {
                                    "name": "Comp Stats (Current Season)",
                                    "value": `Eliminations: **${us_stats.competitive.game_stats.eliminations.toLocaleString()}**\nDeaths: **${us_stats.competitive.game_stats.deaths.toLocaleString()}**\nFinal Blows: **${us_stats.competitive.game_stats.final_blows.toLocaleString()}**\nSolo Kills: **${us_stats.competitive.game_stats.solo_kills.toLocaleString()}**\nDamage Done: **${us_stats.competitive.game_stats.all_damage_done.toLocaleString()}**\nHealing Done: **${us_stats.competitive.game_stats.healing_done.toLocaleString()}**`,
                                    "inline": true
                                  }
                                ]
                            }
                        };
                        message.channel.send(`${message.author}`);
                        message.channel.send(send_me);
                        return;
                    }
                });      
            } else { // Hero specific stats requested
                var bnet_name_nohash = bnet_name.replace("#", "-");
                var options_1 = {
                    url: `https://owapi.net/api/v3/u/${bnet_name_nohash}/blob`,
                    headers: {
                       'cache-control': 'no-cache',
                       'dnt': '1',
                       'pragma': 'no-cache',
                       'upgrade_insecure-requests': '1',
                       'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36'
                    }
                }
                request(options_1, (err, res, body) => {
                    if (err || res.statusCode !== 200) {
                        console.log("Error detected: " + err);
                        console.log(res.StatusCode);
                        return message.channel.send(`${message.author} Uh oh! There was an error fetching your Overwatch stats! I totally blame the website I'm using for this; not my fault! :cold_sweat:`);
                    } else {
                        var body_json;
                        body_json = JSON.parse(body);
                        console.log(body_json);
                        //console.log(body);
                        //Grab a bunch of data and put it in a discord-formatted message
                        if (body_json.error === "Private")
                            return message.channel.send(`${message.author} Your profile seems to be private! I can't access your Overwatch statistics as a result! :neutral_face:`);
                        var send_this;

                        switch(hero) {
                            case "reinhardt":
                                send_this = ow_heroes.reinhardt(body_json, bnet_name, bnet_name_nohash);
                                break;
                            case "dva":
                                send_this = ow_heroes.dva(body_json, bnet_name, bnet_name_nohash);
                                break;
                            case "roadhog":
                                send_this = ow_heroes.roadhog(body_json, bnet_name, bnet_name_nohash);
                                break;
                            case "orisa":
                                send_this = ow_heroes.orisa(body_json, bnet_name, bnet_name_nohash);
                                break;
                            case "winston":
                                send_this = ow_heroes.winston(body_json, bnet_name, bnet_name_nohash);
                                break;
                            case "zarya":
                                send_this = ow_heroes.zarya(body_json, bnet_name, bnet_name_nohash);
                                break;
                            case "bastion":
                                send_this = ow_heroes.bastion(body_json, bnet_name, bnet_name_nohash);
                                break;
                            case "zenyatta":
                                send_this = ow_heroes.zenyatta(body_json, bnet_name, bnet_name_nohash);
                                break;
                            case "moira":
                                send_this = ow_heroes.moira(body_json, bnet_name, bnet_name_nohash);
                                break;
                            case "mercy":
                                send_this = ow_heroes.mercy(body_json, bnet_name, bnet_name_nohash);
                                break;
                            default:
                                return message.channel.send(`${message.author} That's not a hero name!!! :rage:`);
                        }
                        message.channel.send(`${message.author}`);
                        message.channel.send(send_this);
                    }
                });
            }
        }

        // Actual execution starts here
        console.log(`Discord account: ${discord_acct}`);
        console.log(`Discord ID: ${message.author.id}`);

        let db = new sqlite3.Database('./users.sqlite');
        

        db.get(sql_select, [], function(err, row) {
            var data = [];
            var blizz_name = "";
            if (err) {
                message.channel.send(`${message.author} It appears you haven't linked any accounts!`);
                return console.error(err.message);
            }
            console.log(row);
            if (!row) {
                return message.channel.send(`${message.author} It appears you haven't linked any accounts!`);
            } else {
                if (!row["blizzard"])
                    message.channel.send(`${message.author} It appears your Blizzard account name is not linked to anything!`);
                else if (!args.length)
                    getBlizzardStats(row["blizzard"], "none");
                else
                    getBlizzardStats(row["blizzard"], args[0]);
            }
        });
    },
};