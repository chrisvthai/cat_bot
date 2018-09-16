// heroes.s
// Helper functions for hero-specific Overwatch stats, to read jsons
var request = require('request')

function get_stat(data_point) {
	if (data_point == undefined)
		return "???";
	else
		return data_point.toLocaleString();
}

module.exports = {
	reinhardt: function(stats, bnet_name, bnet_name_nohash) {
		console.log("Running the Reinhardt function!");
		var qpheading = stats.us.heroes.stats.quickplay.reinhardt;
		var qp_time_played = get_stat(qpheading.general_stats.time_played);
		var qp_elims = get_stat(qpheading.general_stats.eliminations);
		var qp_deaths = get_stat(qpheading.general_stats.deaths);
		var qp_damage_blocked = get_stat(qpheading.hero_stats.damage_blocked);
		var qp_medals = get_stat(qpheading.general_stats.medals);
		var qp_final_blows = get_stat(qpheading.general_stats.final_blows);
		var qp_games_won = get_stat(qpheading.general_stats.games_won);
		var qp_damage_done = get_stat(qpheading.general_stats.hero_damage_done);
		var qp_charge_kills = get_stat(qpheading.hero_stats.charge_kills);
		var qp_fire_strike_kills = get_stat(qpheading.hero_stats.fire_strike_kills);
		var qp_earthshatter_kills = get_stat(qpheading.hero_stats.earthshatter_kills);

		var cmheading = stats.us.heroes.stats.competitive.reinhardt;
		var cm_time_played = get_stat(cmheading.general_stats.time_played);
		var cm_elims = get_stat(cmheading.general_stats.eliminations);
		var cm_deaths = get_stat(cmheading.general_stats.deaths);
		var cm_damage_blocked = get_stat(cmheading.hero_stats.damage_blocked);
		var cm_medals = get_stat(cmheading.general_stats.medals);
		var cm_final_blows = get_stat(cmheading.general_stats.final_blows);
		var cm_games_won = get_stat(cmheading.general_stats.games_won);
		var cm_damage_done = get_stat(cmheading.general_stats.hero_damage_done);
		var cm_charge_kills = get_stat(cmheading.hero_stats.charge_kills);
		var cm_fire_strike_kills = get_stat(cmheading.hero_stats.fire_strike_kills);
		var cm_earthshatter_kills = get_stat(cmheading.hero_stats.earthshatter_kills);


		var send_me = {
	        "embed": {
	            "title": `Overwatch stats for ${bnet_name}`,
	            "url": `https://playoverwatch.com/en-us/career/pc/${bnet_name_nohash}`,
	            "color": 10079487,
	            "thumbnail": {
	              "url": stats.us.stats.quickplay.overall_stats.avatar
	            },
	            "author": {
	              "name": "Overwatch: Reinhardt stats",
	              "icon_url": "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000007.png"
	            },
	            "fields": [
	              {
	                "name": "Quickplay Stats",
	                "value": `Time played: **${qp_time_played} hours**\nElimations: **${qp_elims}**\nDeaths: **${qp_deaths}**\nDmg Blocked: **${qp_damage_blocked}**\nDmg Done: **${qp_damage_done}**\nFinal Blows: **${qp_final_blows}**\nMedals: **${qp_medals}**\nGames Won: **${qp_games_won}**\nCharge Kills: **${qp_charge_kills}**\nFirestrike Kills: **${qp_fire_strike_kills}**\nEarthshatter Kills: **${qp_earthshatter_kills}**`,
	                "inline": true
	              },
	              {
	                "name": "Competitive Stats",
	                "value": `Time played: **${cm_time_played} hours**\nElimations: **${cm_elims}**\nDeaths: **${cm_deaths}**\nDmg Blocked: **${cm_damage_blocked}**\nDmg Done: **${cm_damage_done}**\nFinal Blows: **${cm_final_blows}**\nMedals: **${cm_medals}**\nGames Won: **${cm_games_won}**\nCharge Kills: **${cm_charge_kills}**\nFirestrike Kills: **${cm_fire_strike_kills}**\nEarthshatter Kills: **${cm_earthshatter_kills}**`,
	                "inline": true
	              }
	            ]
	        }
	    };
	    return send_me;
	},
	dva: function(stats, bnet_name, bnet_name_nohash) {
		console.log("Running the D.Va function!");
		var qpheading = stats.us.heroes.stats.quickplay.dva;
		var qp_time_played = get_stat(qpheading.general_stats.time_played);
		var qp_elims = get_stat(qpheading.general_stats.eliminations);
		var qp_deaths = get_stat(qpheading.general_stats.deaths);
		var qp_damage_blocked = get_stat(qpheading.hero_stats.damage_blocked);
		var qp_medals = get_stat(qpheading.general_stats.medals);
		var qp_final_blows = get_stat(qpheading.general_stats.final_blows);
		var qp_games_won = get_stat(qpheading.general_stats.games_won);
		var qp_damage_done = get_stat(qpheading.general_stats.hero_damage_done);
		var qp_weapon_accuracy = get_stat(qpheading.general_stats.weapon_accuracy);
		var qp_mechs_called = get_stat(qpheading.hero_stats.mechs_called);
		var qp_mech_deaths = get_stat(qpheading.hero_stats.mech_deaths);
		var qp_self_destruct_kills = get_stat(qpheading.hero_stats.self_destruct_kills);
		

		var cmheading = stats.us.heroes.stats.competitive.dva;
		var cm_time_played = get_stat(cmheading.general_stats.time_played);
		var cm_elims = get_stat(cmheading.general_stats.eliminations);
		var cm_deaths = get_stat(cmheading.general_stats.deaths);
		var cm_damage_blocked = get_stat(cmheading.hero_stats.damage_blocked);
		var cm_medals = get_stat(cmheading.general_stats.medals);
		var cm_final_blows = get_stat(cmheading.general_stats.final_blows);
		var cm_games_won = get_stat(cmheading.general_stats.games_won);
		var cm_damage_done = get_stat(cmheading.general_stats.hero_damage_done);
		var cm_weapon_accuracy = get_stat(cmheading.general_stats.weapon_accuracy);
		var cm_mechs_called = get_stat(cmheading.hero_stats.mechs_called);
		var cm_mech_deaths = get_stat(cmheading.hero_stats.mech_deaths);
		var cm_self_destruct_kills = get_stat(cmheading.hero_stats.self_destruct_kills);

		var send_me = {
	        "embed": {
	            "title": `Overwatch stats for ${bnet_name}`,
	            "url": `https://playoverwatch.com/en-us/career/pc/${bnet_name_nohash}`,
	            "color": 10079487,
	            "thumbnail": {
	              "url": stats.us.stats.quickplay.overall_stats.avatar
	            },
	            "author": {
	              "name": "Overwatch: D.Va stats",
	              "icon_url": "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000007.png"
	            },
	            "fields": [
	              {
	                "name": "Quickplay Stats",
	                "value": `Time played: **${qp_time_played} hours**\nElimations: **${qp_elims}**\nDeaths: **${qp_deaths}**\nDmg Blocked: **${qp_damage_blocked}**\nDmg Done: **${qp_damage_done}**\nWeapon Accuracy: **${qp_weapon_accuracy}**\nFinal Blows: **${qp_final_blows}**\nMedals: **${qp_medals}**\nGames Won: **${qp_games_won}**\nMechs Called: **${qp_mechs_called}**\nMech Deaths: **${qp_mech_deaths}**\nSelf-Destruct Kills: **${qp_self_destruct_kills}**`,
	                "inline": true
	              },
	              {
	                "name": "Competitive Stats",
	                "value": `Time played: **${cm_time_played} hours**\nElimations: **${cm_elims}**\nDeaths: **${cm_deaths}**\nDmg Blocked: **${cm_damage_blocked}**\nDmg Done: **${cm_damage_done}**\nWeapon Accuracy: **${cm_weapon_accuracy}**\nFinal Blows: **${cm_final_blows}**\nMedals: **${cm_medals}**\nGames Won: **${cm_games_won}**\nMechs Called: **${cm_mechs_called}**\nMech Deaths: **${cm_mech_deaths}**\nSelf-Destruct Kills: **${cm_self_destruct_kills}**`,
	                "inline": true
	              }
	            ]
	        }
	    };
	    return send_me;
	},
	orisa: function(stats, bnet_name, bnet_name_nohash) {
		console.log("Running the Orisa function!");
		var qpheading = stats.us.heroes.stats.quickplay.orisa;
		var qp_time_played = get_stat(qpheading.general_stats.time_played);
		var qp_elims = get_stat(qpheading.general_stats.eliminations);
		var qp_deaths = get_stat(qpheading.general_stats.deaths);
		var qp_damage_blocked = get_stat(qpheading.hero_stats.damage_blocked);
		var qp_medals = get_stat(qpheading.general_stats.medals);
		var qp_final_blows = get_stat(qpheading.general_stats.final_blows);
		var qp_games_won = get_stat(qpheading.general_stats.games_won);
		var qp_damage_done = get_stat(qpheading.general_stats.hero_damage_done);
		var qp_weapon_accuracy = get_stat(qpheading.general_stats.weapon_accuracy);
		var qp_damage_amplified = get_stat(qpheading.hero_stats.damage_amplified);
		var qp_supercharger_assists = get_stat(qpheading.hero_stats.supercharger_assists);
		

		var cmheading = stats.us.heroes.stats.competitive.orisa;
		var cm_time_played = get_stat(cmheading.general_stats.time_played);
		var cm_elims = get_stat(cmheading.general_stats.eliminations);
		var cm_deaths = get_stat(cmheading.general_stats.deaths);
		var cm_damage_blocked = get_stat(cmheading.hero_stats.damage_blocked);
		var cm_medals = get_stat(cmheading.general_stats.medals);
		var cm_final_blows = get_stat(cmheading.general_stats.final_blows);
		var cm_games_won = get_stat(cmheading.general_stats.games_won);
		var cm_damage_done = get_stat(cmheading.general_stats.hero_damage_done);
		var cm_weapon_accuracy = get_stat(cmheading.general_stats.weapon_accuracy);
		var cm_damage_amplified = get_stat(cmheading.hero_stats.damage_amplified);
		var cm_supercharger_assists = get_stat(cmheading.hero_stats.supercharger_assists);
		

		var send_me = {
	        "embed": {
	            "title": `Overwatch stats for ${bnet_name}`,
	            "url": `https://playoverwatch.com/en-us/career/pc/${bnet_name_nohash}`,
	            "color": 10079487,
	            "thumbnail": {
	              "url": stats.us.stats.quickplay.overall_stats.avatar
	            },
	            "author": {
	              "name": "Overwatch: Orisa stats",
	              "icon_url": "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000007.png"
	            },
	            "fields": [
	              {
	                "name": "Quickplay Stats",
	                "value": `Time played: **${qp_time_played} hours**\nElimations: **${qp_elims}**\nDeaths: **${qp_deaths}**\nDmg Blocked: **${qp_damage_blocked}**\nDmg Done: **${qp_damage_done}**\nWeapon Accuracy: **${qp_weapon_accuracy}**\nFinal Blows: **${qp_final_blows}**\nMedals: **${qp_medals}**\nGames Won: **${qp_games_won}**\nDamage Amplified: **${qp_damage_amplified}**\nSupercharger Assists: **${qp_supercharger_assists}**`,
	                "inline": true
	              },
	              {
	                "name": "Competitive Stats",
	                "value": `Time played: **${cm_time_played} hours**\nElimations: **${cm_elims}**\nDeaths: **${cm_deaths}**\nDmg Blocked: **${cm_damage_blocked}**\nDmg Done: **${cm_damage_done}**\nWeapon Accuracy: **${cm_weapon_accuracy}**\nFinal Blows: **${cm_final_blows}**\nMedals: **${cm_medals}**\nGames Won: **${cm_games_won}**\nDamage Amplified: **${cm_damage_amplified}**\nSupercharger Assists: **${cm_supercharger_assists}**`,
	                "inline": true

	              }
	            ]
	        }
	    };
	    return send_me;
	},
	roadhog: function(stats, bnet_name, bnet_name_nohash) {
		console.log("Running the Roadhog function!");
		var qpheading = stats.us.heroes.stats.quickplay.roadhog;
		var qp_time_played = get_stat(qpheading.general_stats.time_played);
		var qp_elims = get_stat(qpheading.general_stats.elimination);
		var qp_deaths = get_stat(qpheading.general_stats.deaths);
		//var qp_damage_blocked = qpheading.hero_stats.damage_blocked.toLocaleString();
		var qp_medals = get_stat(qpheading.general_stats.medals);
		var qp_final_blows = get_stat(qpheading.general_stats.final_blows);
		var qp_games_won = get_stat(qpheading.general_stats.games_won);
		var qp_damage_done = get_stat(qpheading.general_stats.hero_damage_done);
		var qp_weapon_accuracy = get_stat(qpheading.general_stats.weapon_accuracy);
		var qp_env_kills = get_stat(qpheading.general_stats.environmental_kills);
		var qp_self_healing = get_stat(qpheading.hero_stats.self_healing);
		var qp_hook_accuracy = get_stat(qpheading.hero_stats.hook_accuracy);
		var qp_whole_hog_kills = get_stat(qpheading.hero_stats.whole_hog_kills);

		var cmheading = stats.us.heroes.stats.competitive.roadhog;
		var cm_time_played = get_stat(cmheading.general_stats.time_played);
		var cm_elims = get_stat(cmheading.general_stats.elimination);
		var cm_deaths = get_stat(cmheading.general_stats.death);
		//var cm_damage_blocked = cmheading.hero_stats.damage_blocked.toLocaleString();
		var cm_medals = get_stat(cmheading.general_stats.medals);
		var cm_final_blows = get_stat(cmheading.general_stats.final_blow);
		var cm_games_won = get_stat(cmheading.general_stats.games_won);
		var cm_damage_done = get_stat(cmheading.general_stats.hero_damage_done);
		var cm_weapon_accuracy = get_stat(cmheading.general_stats.weapon_accuracy);
		var cm_env_kills = get_stat(cmheading.hero_stats.environmental_kills);
		var cm_self_healing = get_stat(cmheading.hero_stats.self_healing);
		var cm_hook_accuracy = get_stat(cmheading.hero_stats.hook_accuracy);
		var cm_whole_hog_kills = get_stat(cm_heading.hero_stats.whole_hog_kills);
		
		var send_me = {
	        "embed": {
	            "title": `Overwatch stats for ${bnet_name}`,
	            "url": `https://playoverwatch.com/en-us/career/pc/${bnet_name_nohash}`,
	            "color": 10079487,
	            "thumbnail": {
	              "url": stats.us.stats.quickplay.overall_stats.avatar
	            },
	            "author": {
	              "name": "Overwatch: Roadhog stats",
	              "icon_url": "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000007.png"
	            },
	            "fields": [
	              {
	                "name": "Quickplay Stats",
	                "value": `Time played: **${qp_time_played} hours**\nElimations: **${qp_elims}**\nDeaths: **${qp_deaths}**\nDmg Done: **${qp_damage_done}**\nWeapon Accuracy: **${qp_weapon_accuracy}**\nFinal Blows: **${qp_final_blows}**\nMedals: **${qp_medals}**\nGames Won: **${qp_games_won}**\nEnvironment Kills: **${qp_env_kills}**\nSelf Healing: **${qp_self_healing}**\nHook Accuracy: **${qp_hook_accuracy}**\nWhole Hog Kills: **${qp_whole_hog_kills}**`,
	                "inline": true
	              },
	              {
	                "name": "Competitive Stats",
	                "value": `Time played: **${cm_time_played} hours**\nElimations: **${cm_elims}**\nDeaths: **${cm_deaths}**\nDmg Done: **${cm_damage_done}**\nWeapon Accuracy: **${cm_weapon_accuracy}**\nFinal Blows: **${cm_final_blows}**\nMedals: **${cm_medals}**\nGames Won: **${cm_games_won}**\nEnvironment Kills: **${cm_env_kills}**\nSelf Healing: **${cm_self_healing}**\nHook Accuracy: **${cm_hook_accuracy}**\nWhole Hog Kills: **${cm_whole_hog_kills}**`,
	                "inline": true

	              },
	              {
	              	"name": "Roadhog competitive stat datapoints were pretty janky for some reason",
	              	"value": ":expressionless:",
	              	"inline": false
	              }
	            ]
	        }
	    };
	    return send_me;
	},
	winston: function(stats, bnet_name, bnet_name_nohash) {
		console.log("Running the Winston function!");
		var qpheading = stats.us.heroes.stats.quickplay.winston;
		var qp_time_played = get_stat(qpheading.general_stats.time_played);
		var qp_elims = get_stat(qpheading.general_stats.eliminations);
		var qp_deaths = get_stat(qpheading.general_stats.deaths);
		var qp_damage_blocked = get_stat(qpheading.hero_stats.damage_blocked);
		var qp_medals = get_stat(qpheading.general_stats.medals);
		var qp_final_blows = get_stat(qpheading.general_stats.final_blows);
		var qp_games_won = get_stat(qpheading.general_stats.games_won);
		var qp_damage_done = get_stat(qpheading.general_stats.hero_damage_done);
		//var qp_weapon_accuracy = qpheading.general_stats.weapon_accuracy.toLocaleString();
		var qp_env_kills = get_stat(qpheading.general_stats.environmental_kills);
		var qp_melee_kills = get_stat(qpheading.hero_stats.melee_kills);
		var qp_jump_pack_kills = get_stat(qpheading.hero_stats.jump_pack_kills);
		var qp_primal_rage_kills = get_stat(qpheading.hero_stats.primal_rage_kills);
		var qp_players_knocked_back = get_stat(qpheading.hero_stats.players_knocked_back);
		

		var cmheading = stats.us.heroes.stats.competitive.winston;
		var cm_time_played = get_stat(cmheading.general_stats.time_played);
		var cm_elims = get_stat(cmheading.general_stats.eliminations);
		var cm_deaths = get_stat(cmheading.general_stats.deaths);
		var cm_damage_blocked = get_stat(cmheading.hero_stats.damage_blocked);
		var cm_medals = get_stat(cmheading.general_stats.medals);
		var cm_final_blows = get_stat(cmheading.general_stats.final_blows);
		var cm_games_won = get_stat(cmheading.general_stats.games_won);;
		var cm_damage_done = get_stat(cmheading.general_stats.hero_damage_done);
		//var cm_weapon_accuracy = cmheading.general_stats.weapon_accuracy.toLocaleString();
		var cm_env_kills = get_stat(cmheading.general_stats.environmental_kills);;
		var cm_melee_kills = get_stat(cmheading.hero_stats.melee_kills);
		var cm_jump_pack_kills = get_stat(cmheading.hero_stats.jump_pack_kills);
		var cm_primal_rage_kills = get_stat(cmheading.hero_stats.primal_rage_kills);
		var cm_players_knocked_back = get_stat(cmheading.hero_stats.players_knocked_back);	
		
		var send_me = {
	        "embed": {
	            "title": `Overwatch stats for ${bnet_name}`,
	            "url": `https://playoverwatch.com/en-us/career/pc/${bnet_name_nohash}`,
	            "color": 10079487,
	            "thumbnail": {
	              "url": stats.us.stats.quickplay.overall_stats.avatar
	            },
	            "author": {
	              "name": "Overwatch: Winston stats",
	              "icon_url": "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000007.png"
	            },
	            "fields": [
	              {
	                "name": "Quickplay Stats",
	                "value": `Time played: **${qp_time_played} hours**\nElimations: **${qp_elims}**\nDeaths: **${qp_deaths}**\nDmg Done: **${qp_damage_done}**\nDamage Blocked: **${qp_damage_blocked}**\nFinal Blows: **${qp_final_blows}**\nMedals: **${qp_medals}**\nGames Won: **${qp_games_won}**\nEnvironment Kills: **${qp_env_kills}**\nMelee Kills: **${qp_melee_kills}**\nJump-pack Kills: **${qp_jump_pack_kills}**\nPlayers Knocked Back: **${qp_players_knocked_back}**\nPrimal Rage Kills: **${qp_primal_rage_kills}**`,
	                "inline": true
	              },
	              {
	                "name": "Competitive Stats",
	                "value": `Time played: **${cm_time_played} hours**\nElimations: **${cm_elims}**\nDeaths: **${cm_deaths}**\nDmg Done: **${cm_damage_done}**\nDamage Blocked: **${cm_damage_blocked}**\nFinal Blows: **${cm_final_blows}**\nMedals: **${cm_medals}**\nGames Won: **${cm_games_won}**\nEnvironment Kills: **${cm_env_kills}**\nMelee Kills: **${cm_melee_kills}**\nJump-pack Kills: **${cm_jump_pack_kills}**\nPlayers Knocked Back: **${cm_players_knocked_back}**\nPrimal Rage Kills: **${cm_primal_rage_kills}**`,
	                "inline": true

	              },
	            ]
	        }
	    };
	    return send_me;
	},
	hammond: function(stats, bnet_name, bnet_name_nohash) {

	},
	zarya: function(stats, bnet_name, bnet_name_nohash) {
		console.log("Running the Zarya function!");
		var qpheading = stats.us.heroes.stats.quickplay.zarya;
		var qp_time_played = get_stat(qpheading.general_stats.time_played);
		var qp_elims = get_stat(qpheading.general_stats.eliminations);
		var qp_deaths = get_stat(qpheading.general_stats.deaths);
		var qp_damage_blocked = get_stat(qpheading.hero_stats.damage_blocked);
		var qp_medals = get_stat(qpheading.general_stats.medals);
		var qp_final_blows = get_stat(qpheading.general_stats.final_blows);
		var qp_games_won = get_stat(qpheading.general_stats.games_won);
		var qp_damage_done = get_stat(qpheading.general_stats.hero_damage_done);
		var qp_weapon_accuracy =get_stat( qpheading.general_stats.weapon_accuracy);
		var qp_average_energy = get_stat(qpheading.average_stats.average_energy);
		var qp_high_energy_kills = get_stat(qpheading.hero_stats.high_energy_kills);
		var qp_projected_barriers = get_stat(qpheading.hero_stats.projected_barriers_applied);
		var qp_graviton_kills = get_stat(qpheading.hero_stats.graviton_surge_kills);

		var cmheading = stats.us.heroes.stats.competitive.zarya;
		var cm_time_played = get_stat(cmheading.general_stats.time_played);
		var cm_elims = get_stat(cmheading.general_stats.eliminations);
		var cm_deaths = get_stat(cmheading.general_stats.deaths);
		var cm_damage_blocked = get_stat(cmheading.hero_stats.damage_blocked);
		var cm_medals = get_stat(cmheading.general_stats.medals);
		var cm_final_blows = get_stat(cmheading.general_stats.final_blows);
		var cm_games_won = get_stat(cmheading.general_stats.games_won);;
		var cm_damage_done = get_stat(cmheading.general_stats.hero_damage_done);
		var cm_weapon_accuracy = get_stat(cmheading.general_stats.weapon_accuracy);
		var cm_average_energy = get_stat(cmheading.average_stats.average_energy);
		var cm_high_energy_kills = get_stat(cmheading.hero_stats.high_energy_kills);
		var cm_projected_barriers = get_stat(cmheading.hero_stats.projected_barriers_applied);
		var cm_graviton_kills = get_stat(cmheading.hero_stats.graviton_surge_kills);

		var send_me = {
	        "embed": {
	            "title": `Overwatch stats for ${bnet_name}`,
	            "url": `https://playoverwatch.com/en-us/career/pc/${bnet_name_nohash}`,
	            "color": 10079487,
	            "thumbnail": {
	              "url": stats.us.stats.quickplay.overall_stats.avatar
	            },
	            "author": {
	              "name": "Overwatch: Zarya stats",
	              "icon_url": "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000007.png"
	            },
	            "fields": [
	              {
	                "name": "Quickplay Stats",
	                "value": `Time played: **${qp_time_played} hours**\nElimations: **${qp_elims}**\nDeaths: **${qp_deaths}**\nDmg Done: **${qp_damage_done}**\nDamage Blocked: **${qp_damage_blocked}**\nFinal Blows: **${qp_final_blows}**\nWeapon Accuracy: **${qp_weapon_accuracy}**\nMedals: **${qp_medals}**\nGames Won: **${qp_games_won}**\nAvg Energy: **${qp_average_energy}**\nHigh Energy Kills: **${qp_high_energy_kills}**\nProjected Barriers: **${qp_projected_barriers}**\nGraviton Kills: **${qp_graviton_kills}**`,
	                "inline": true
	              },
	              {
	                "name": "Competitive Stats",
	                "value": `Time played: **${cm_time_played} hours**\nElimations: **${cm_elims}**\nDeaths: **${cm_deaths}**\nDmg Done: **${cm_damage_done}**\nDamage Blocked: **${cm_damage_blocked}**\nFinal Blows: **${cm_final_blows}**\nWeapon Accuracy: **${cm_weapon_accuracy}**\nMedals: **${cm_medals}**\nGames Won: **${cm_games_won}**\nAvg Energy: **${cm_average_energy}**\nHigh Energy Kills: **${cm_high_energy_kills}**\nProjected Barriers: **${cm_projected_barriers}**\nGraviton Kills: **${cm_graviton_kills}**`,
	                "inline": true

	              },
	            ]
	        }
	    };
	    return send_me;
	},
	bastion: function(stats, bnet_name, bnet_name_nohash) {
		console.log("Running the Bastion function!");
		var qpheading = stats.us.heroes.stats.quickplay.bastion;
		var qp_time_played = get_stat(qpheading.general_stats.time_played);
		var qp_elims = get_stat(qpheading.general_stats.eliminations);
		var qp_deaths = get_stat(qpheading.general_stats.deaths);
		//var qp_damage_blocked = qpheading.hero_stats.damage_blocked.toLocaleString();
		var qp_medals = get_stat(qpheading.general_stats.medals);
		var qp_final_blows = get_stat(qpheading.general_stats.final_blows);
		var qp_games_won = get_stat(qpheading.general_stats.games_won);
		var qp_damage_done = get_stat(qpheading.general_stats.hero_damage_done);
		var qp_weapon_accuracy = get_stat(qpheading.general_stats.weapon_accuracy);
		var qp_self_healing = get_stat(qpheading.hero_stats.self_healing);
		var qp_sentry_kills = get_stat(qpheading.hero_stats.sentry_kills);
		var qp_recon_kills = get_stat(qpheading.hero_stats.recon_kills);
		var qp_tank_kills = get_stat(qpheading.hero_stats.tank_kills);
		
		var cmheading = stats.us.heroes.stats.competitive.bastion;
		var cm_time_played = get_stat(cmheading.general_stats.time_played);
		var cm_elims = get_stat(cmheading.general_stats.eliminations);
		var cm_deaths = get_stat(cmheading.general_stats.deaths);
		//var cm_damage_blocked = cmheading.hero_stats.damage_blocked.toLocaleString();
		var cm_medals = get_stat(cmheading.general_stats.medals);
		var cm_final_blows = get_stat(cmheading.general_stats.final_blows);
		var cm_games_won = get_stat(cmheading.general_stats.games_won);
		var cm_damage_done = get_stat(cmheading.general_stats.hero_damage_done);
		var cm_weapon_accuracy = get_stat(cmheading.general_stats.weapon_accuracy);
		var cm_self_healing = get_stat(cmheading.hero_stats.self_healing);
		var cm_sentry_kills = get_stat(cmheading.hero_stats.sentry_kills);
		var cm_recon_kills = get_stat(cmheading.hero_stats.recon_kills);
		var cm_tank_kills = get_stat(cmheading.hero_stats.tank_kills);
		

		var send_me = {
	        "embed": {
	            "title": `Overwatch stats for ${bnet_name}`,
	            "url": `https://playoverwatch.com/en-us/career/pc/${bnet_name_nohash}`,
	            "color": 10079487,
	            "thumbnail": {
	              "url": stats.us.stats.quickplay.overall_stats.avatar
	            },
	            "author": {
	              "name": "Overwatch: Bastion stats",
	              "icon_url": "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000007.png"
	            },
	            "fields": [
	              {
	                "name": "Quickplay Stats",
	                "value": `Time played: **${qp_time_played} hours**\nElimations: **${qp_elims}**\nDeaths: **${qp_deaths}**\nDmg Done: **${qp_damage_done}**\nFinal Blows: **${qp_final_blows}**\nWeapon Accuracy: **${qp_weapon_accuracy}**\nMedals: **${qp_medals}**\nGames Won: **${qp_games_won}**\nSelf Healing: **${qp_self_healing}**\nSentry Kills: **${qp_sentry_kills}**\nRecon Kills: **${qp_recon_kills}**\nTank Kills: **${qp_tank_kills}**`,
	                "inline": true
	              },
	              {
	                "name": "Competitive Stats",
	                "value": `Time played: **${cm_time_played} hours**\nElimations: **${cm_elims}**\nDeaths: **${cm_deaths}**\nDmg Done: **${cm_damage_done}**\nFinal Blows: **${cm_final_blows}**\nWeapon Accuracy: **${cm_weapon_accuracy}**\nMedals: **${cm_medals}**\nGames Won: **${cm_games_won}**\nSelf Healing: **${cm_self_healing}**\nSentry Kills: **${cm_sentry_kills}**\nRecon Kills: **${cm_recon_kills}**\nTank Kills: **${cm_tank_kills}**`,
	                "inline": true

	              },
	            ]
	        }
	    };
	    return send_me;
	},
	doomfist: function(stats, bnet_name, bnet_name_nohash) {

	},
	genji: function(stats, bnet_name, bnet_name_nohash) {

	},
	hanzo: function(stats, bnet_name, bnet_name_nohash) {

	},
	junkrat: function(stats, bnet_name, bnet_name_nohash) {

	},
	mccree: function(stats, bnet_name, bnet_name_nohash) {

	},
	mei: function(stats, bnet_name, bnet_name_nohash) {

	},
	pharah: function(stats, bnet_name, bnet_name_nohash) {

	},
	reaper: function(stats, bnet_name, bnet_name_nohash) {

	},
	soldier76: function(stats, bnet_name, bnet_name_nohash) {

	},
	sombra: function(stats, bnet_name, bnet_name_nohash) {

	},
	symmetra: function(stats, bnet_name, bnet_name_nohash) {

	},
	torbjorn: function(stats, bnet_name, bnet_name_nohash) {

	},
	tracer: function(stats, bnet_name, bnet_name_nohash) {

	},
	widowmaker: function(stats, bnet_name, bnet_name_nohash) {

	},
	ana: function(stats, bnet_name, bnet_name_nohash) {

	},
	brigitte: function(stats, bnet_name, bnet_name_nohash) {

	},
	lucio: function(stats, bnet_name, bnet_name_nohash) {
		var qpheading = stats.us.heroes.stats.quickplay.lucio;
		var qp_time_played = get_stat(qpheading.general_stats.time_played);
		var qp_elims = get_stat(qpheading.general_stats.eliminations);
		var qp_deaths = get_stat(qpheading.general_stats.deaths);
		//var qp_damage_blocked = qpheading.hero_stats.damage_blocked.toLocaleString();
		var qp_medals = get_stat(qpheading.general_stats.medals);
		var qp_final_blows = get_stat(qpheading.general_stats.final_blows);
		var qp_games_won = get_stat(qpheading.general_stats.games_won);
		var qp_healing_done = get_stat(qpheading.general_stats.healing_done);
		var qp_damage_done = get_stat(qpheading.general_stats.hero_damage_done);
		//var qp_weapon_accuracy = get_stat(qpheading.general_stats.weapon_accuracy);
		//var qp_crit_accuracy = get_stat(qpheading.general_stats.critical_hit_accuracy);
		var qp_offensive_assists = get_stat(qpheading.general_stats.offensive_assists);
		var qp_defensive_assists = get_stat(qpheading.general_stats.defensive_assists);
		var qp_environment_kills = get_stat(qpheading.general_stats.environmental_kills);
		var qp_sound_barriers = get_stat(qpheading.hero_stats.sound_barriers_provided);


		var cmheading = stats.us.heroes.stats.competitive.lucio;
		var cm_time_played = get_stat(cmheading.general_stats.time_played);
		var cm_elims = get_stat(cmheading.general_stats.eliminations);
		var cm_deaths = get_stat(cmheading.general_stats.deaths);
		//var cm_damage_blocked = cmheading.hero_stats.damage_blocked.toLocaleString();
		var cm_medals = get_stat(cmheading.general_stats.medals);
		var cm_final_blows = get_stat(cmheading.general_stats.final_blows);
		var cm_games_won = get_stat(cmheading.general_stats.games_won);
		var cm_damage_done = get_stat(cmheading.general_stats.hero_damage_done);
		var cm_healing_done = get_stat(cmheading.general_stats.healing_done);
		//var cm_weapon_accuracy = get_stat(cmheading.general_stats.weapon_accuracy);
		//var cm_crit_accuracy = get_stat(cmheading.general_stats.critical_hit_accuracy);
		var cm_offensive_assists = get_stat(cmheading.general_stats.offensive_assists);
		var cm_defensive_assists = get_stat(cmheading.general_stats.defensive_assists);
		var cm_environment_kills = get_stat(cmheading.general_stats.environmental_kills);
		var cm_sound_barriers = get_stat(cmheading.hero_stats.sound_barriers_provided);
		

		var send_me = {
	        "embed": {
	            "title": `Overwatch stats for ${bnet_name}`,
	            "url": `https://playoverwatch.com/en-us/career/pc/${bnet_name_nohash}`,
	            "color": 10079487,
	            "thumbnail": {
	              "url": stats.us.stats.quickplay.overall_stats.avatar
	            },
	            "author": {
	              "name": "Overwatch: Lucio stats",
	              "icon_url": "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000007.png"
	            },
	            "fields": [
	              {
	                "name": "Quickplay Stats",
	                "value": `Time played: **${qp_time_played} hours**\nElimations: **${qp_elims}**\nDeaths: **${qp_deaths}**\nHealing Done: **${qp_healing_done}**\nDmg Done: **${qp_damage_done}**\nFinal Blows: **${qp_final_blows}**\nOffensive Assists: **${qp_offensive_assist}**\nDefensive Assists: **${qp_defensive_assists}**\nMedals: **${qp_medals}**\nGames Won: **${qp_games_won}**Environmental Kills **${qp_environment_kills}**\nSound Barriers: **${qp_sound_barriers}**`,
	                "inline": true
	              },
	              {
	                "name": "Competitive Stats",
	                "value": `Time played: **${cm_time_played} hours**\nElimations: **${cm_elims}**\nDeaths: **${cm_deaths}**\nHealing Done: **${cm_healing_done}**\nDmg Done: **${cm_damage_done}**\nFinal Blows: **${cm_final_blows}**\nOffensive Assists: **${cm_offensive_assist}**\nDefensive Assists: **${cm_defensive_assists}**\nMedals: **${cm_medals}**\nGames Won: **${cm_games_won}\nEnvironmental Kills: **${cm_environment_kills}**\nSound Barriers: **${cm_sound_barriers}**`,
	                "inline": true

	              },
	            ]
	        }
	    };
	    return send_me;
	},
	mercy: function(stats, bnet_name, bnet_name_nohash) {
		var qpheading = stats.us.heroes.stats.quickplay.mercy;
		var qp_time_played = get_stat(qpheading.general_stats.time_played);
		var qp_elims = get_stat(qpheading.general_stats.eliminations);
		var qp_deaths = get_stat(qpheading.general_stats.deaths);
		//var qp_damage_blocked = qpheading.hero_stats.damage_blocked.toLocaleString();
		var qp_medals = get_stat(qpheading.general_stats.medals);
		var qp_final_blows = get_stat(qpheading.general_stats.final_blows);
		var qp_games_won = get_stat(qpheading.general_stats.games_won);
		var qp_healing_done = get_stat(qpheading.general_stats.healing_done);
		var qp_damage_done = get_stat(qpheading.general_stats.hero_damage_done);
		//var qp_weapon_accuracy = get_stat(qpheading.general_stats.weapon_accuracy);
		//var qp_crit_accuracy = get_stat(qpheading.general_stats.critical_hit_accuracy);
		var qp_offensive_assists = get_stat(qpheading.general_stats.offensive_assists);
		var qp_defensive_assists = get_stat(qpheading.general_stats.defensive_assists);
		var qp_damage_amplified = get_stat(qpheading.hero_stats.damage_amplified);
		var qp_players_resurrected = get_stat(qpheading.hero_stats.players_resurrected);
		var qp_blaster_kills = get_stat(qpheading.hero_stats.blaster_kills);

		var cmheading = stats.us.heroes.stats.competitive.mercy;
		var cm_time_played = get_stat(cmheading.general_stats.time_played);
		var cm_elims = get_stat(cmheading.general_stats.eliminations);
		var cm_deaths = get_stat(cmheading.general_stats.deaths);
		//var cm_damage_blocked = cmheading.hero_stats.damage_blocked.toLocaleString();
		var cm_medals = get_stat(cmheading.general_stats.medals);
		var cm_final_blows = get_stat(cmheading.general_stats.final_blows);
		var cm_games_won = get_stat(cmheading.general_stats.games_won);
		var cm_damage_done = get_stat(cmheading.general_stats.hero_damage_done);
		var cm_healing_done = get_stat(cmheading.general_stats.healing_done);
		//var cm_weapon_accuracy = get_stat(cmheading.general_stats.weapon_accuracy);
		//var cm_crit_accuracy = get_stat(cmheading.general_stats.critical_hit_accuracy);
		var cm_offensive_assists = get_stat(cmheading.general_stats.offensive_assists);
		var cm_defensive_assists = get_stat(cmheading.general_stats.defensive_assists);
		var cm_damage_amplified = get_stat(cmheading.hero_stats.damage_amplified);
		var cm_players_resurrected = get_stat(cmheading.hero_stats.players_resurrected);
		var cm_blaster_kills = get_stat(cmheading.hero_stats.blaster_kills);

		var send_me = {
	        "embed": {
	            "title": `Overwatch stats for ${bnet_name}`,
	            "url": `https://playoverwatch.com/en-us/career/pc/${bnet_name_nohash}`,
	            "color": 10079487,
	            "thumbnail": {
	              "url": stats.us.stats.quickplay.overall_stats.avatar
	            },
	            "author": {
	              "name": "Overwatch: Mercy stats",
	              "icon_url": "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000007.png"
	            },
	            "fields": [
	              {
	                "name": "Quickplay Stats",
	                "value": `Time played: **${qp_time_played} hours**\nElimations: **${qp_elims}**\nDeaths: **${qp_deaths}**\nHealing Done: **${qp_healing_done}**\nDmg Done: **${qp_damage_done}**\nFinal Blows: **${qp_final_blows}**\nOffensive Assists: **${qp_offensive_assist}**\nDefensive Assists: **${qp_defensive_assists}**\nMedals: **${qp_medals}**\nGames Won: **${qp_games_won}**\nDamage Amplified: **${qp_damage_amplified}**\nPlayers Resurrected: **${qp_players_resurrected}**\nBlaster Kills: **${qp_blaster_kills}**`,
	                "inline": true
	              },
	              {
	                "name": "Competitive Stats",
	                "value": `Time played: **${cm_time_played} hours**\nElimations: **${cm_elims}**\nDeaths: **${cm_deaths}**\nHealing Done: **${cm_healing_done}**\nDmg Done: **${cm_damage_done}**\nFinal Blows: **${cm_final_blows}**\nOffensive Assists: **${cm_offensive_assist}**\nDefensive Assists: **${cm_defensive_assists}**\nMedals: **${cm_medals}**\nGames Won: **${cm_games_won}**\nDamage Amplified: **${cm_damage_amplified}**\nPlayers Resurrected: **${cm_players_resurrected}**\nBlaster Kills: **${cm_blaster_kills}**`,
	                "inline": true

	              },
	            ]
	        }
	    };
	    return send_me;
	},
	moira: function(stats, bnet_name, bnet_name_nohash) {
		var qpheading = stats.us.heroes.stats.quickplay.moira;
		var qp_time_played = get_stat(qpheading.general_stats.time_played);
		var qp_elims = get_stat(qpheading.general_stats.eliminations);
		var qp_deaths = get_stat(qpheading.general_stats.deaths);
		//var qp_damage_blocked = qpheading.hero_stats.damage_blocked.toLocaleString();
		var qp_medals = get_stat(qpheading.general_stats.medals);
		var qp_final_blows = get_stat(qpheading.general_stats.final_blows);
		var qp_games_won = get_stat(qpheading.general_stats.games_won);
		var qp_healing_done = get_stat(qpheading.general_stats.healing_done);
		var qp_damage_done = get_stat(qpheading.general_stats.hero_damage_done);
		//var qp_weapon_accuracy = get_stat(qpheading.general_stats.weapon_accuracy);
		//var qp_crit_accuracy = get_stat(qpheading.general_stats.critical_hit_accuracy);
		//var qp_offensive_assists = get_stat(qpheading.general_stats.offensive_assists);
		var qp_defensive_assists = get_stat(qpheading.general_stats.defensive_assists);
		var qp_coalescence_healing = get_stat(qpheading.hero_stats.coalescence_healing);
		var qp_coalescence_kills = get_stat(qpheading.hero_stats.coalescence_kills);

		var cmheading = stats.us.heroes.stats.competitive.moira;
		var cm_time_played = get_stat(cmheading.general_stats.time_played);
		var cm_elims = get_stat(cmheading.general_stats.eliminations);
		var cm_deaths = get_stat(cmheading.general_stats.deaths);
		//var cm_damage_blocked = cmheading.hero_stats.damage_blocked.toLocaleString();
		var cm_medals = get_stat(cmheading.general_stats.medals);
		var cm_final_blows = get_stat(cmheading.general_stats.final_blows);
		var cm_games_won = get_stat(cmheading.general_stats.games_won);
		var cm_damage_done = get_stat(cmheading.general_stats.hero_damage_done);
		var cm_healing_done = get_stat(cmheading.general_stats.healing_done);
		//var cm_weapon_accuracy = get_stat(cmheading.general_stats.weapon_accuracy);
		//var cm_crit_accuracy = get_stat(cmheading.general_stats.critical_hit_accuracy);
		//var cm_offensive_assists = get_stat(cmheading.general_stats.offensive_assists);
		var cm_defensive_assists = get_stat(cmheading.general_stats.defensive_assists);
		var cm_coalescence_healing = get_stat(cmheading.hero_stats.coalescence_healing);
		var cm_coalescence_kills = get_stat(cmheading.hero_stats.coalescence_kills);

		var send_me = {
	        "embed": {
	            "title": `Overwatch stats for ${bnet_name}`,
	            "url": `https://playoverwatch.com/en-us/career/pc/${bnet_name_nohash}`,
	            "color": 10079487,
	            "thumbnail": {
	              "url": stats.us.stats.quickplay.overall_stats.avatar
	            },
	            "author": {
	              "name": "Overwatch: Moira stats",
	              "icon_url": "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000007.png"
	            },
	            "fields": [
	              {
	                "name": "Quickplay Stats",
	                "value": `Time played: **${qp_time_played} hours**\nElimations: **${qp_elims}**\nDeaths: **${qp_deaths}**\nHealing Done: **${qp_healing_done}**\nDmg Done: **${qp_damage_done}**\nFinal Blows: **${qp_final_blows}**\nDefensive Assists: **${qp_defensive_assists}**\nMedals: **${qp_medals}**\nGames Won: **${qp_games_won}**\nCoalescence Healing: **${qp_coalescence_healing}**\nCoalescence Kills: **${qp_coalescence_kills}**`,
	                "inline": true
	              },
	              {
	                "name": "Competitive Stats",
	                "value": `Time played: **${cm_time_played} hours**\nElimations: **${cm_elims}**\nDeaths: **${cm_deaths}**\nHealing Done: **${cm_healing_done}**\nDmg Done: **${cm_damage_done}**\nFinal Blows: **${cm_final_blows}**\nDefensive Assists: **${cm_defensive_assists}**\nMedals: **${cm_medals}**\nGames Won: **${cm_games_won}**\nCoalescence Healing: **${cm_coalescence_healing}**\nCoalescence Kills: **${cm_coalescence_kills}**`,
	                "inline": true

	              },
	            ]
	        }
	    };
	    return send_me;
	},
	zenyatta: function(stats, bnet_name, bnet_name_nohash) {
		var qpheading = stats.us.heroes.stats.quickplay.zenyatta;
		var qp_time_played = get_stat(qpheading.general_stats.time_played);
		var qp_elims = get_stat(qpheading.general_stats.eliminations);
		var qp_deaths = get_stat(qpheading.general_stats.deaths);
		//var qp_damage_blocked = qpheading.hero_stats.damage_blocked.toLocaleString();
		var qp_medals = get_stat(qpheading.general_stats.medals);
		var qp_final_blows = get_stat(qpheading.general_stats.final_blows);
		var qp_games_won = get_stat(qpheading.general_stats.games_won);
		var qp_healing_done = get_stat(qpheading.general_stats.healing_done);
		var qp_damage_done = get_stat(qpheading.general_stats.hero_damage_done);
		var qp_weapon_accuracy = get_stat(qpheading.general_stats.weapon_accuracy);
		var qp_crit_accuracy = get_stat(qpheading.general_stats.critical_hit_accuracy);
		var qp_offensive_assists = get_stat(qpheading.general_stats.offensive_assists);
		var qp_defensive_assists = get_stat(qpheading.general_stats.defensive_assists);
		var qp_transcendence_healing = get_stat(qpheading.hero_stats.transcendence_healing);

		var cmheading = stats.us.heroes.stats.competitive.zenyatta;
		var cm_time_played = get_stat(cmheading.general_stats.time_played);
		var cm_elims = get_stat(cmheading.general_stats.eliminations);
		var cm_deaths = get_stat(cmheading.general_stats.deaths);
		//var cm_damage_blocked = cmheading.hero_stats.damage_blocked.toLocaleString();
		var cm_medals = get_stat(cmheading.general_stats.medals);
		var cm_final_blows = get_stat(cmheading.general_stats.final_blows);
		var cm_games_won = get_stat(cmheading.general_stats.games_won);
		var cm_damage_done = get_stat(cmheading.general_stats.hero_damage_done);
		var cm_healing_done = get_stat(cmheading.general_stats.healing_done);
		var cm_weapon_accuracy = get_stat(cmheading.general_stats.weapon_accuracy);
		var cm_crit_accuracy = get_stat(cmheading.general_stats.critical_hit_accuracy);
		var cm_offensive_assists = get_stat(cmheading.general_stats.offensive_assists);
		var cm_defensive_assists = get_stat(cmheading.general_stats.defensive_assists);
		var cm_transcendence_healing = get_stat(cmheading.hero_stats.transcendence_healing);

		var send_me = {
	        "embed": {
	            "title": `Overwatch stats for ${bnet_name}`,
	            "url": `https://playoverwatch.com/en-us/career/pc/${bnet_name_nohash}`,
	            "color": 10079487,
	            "thumbnail": {
	              "url": stats.us.stats.quickplay.overall_stats.avatar
	            },
	            "author": {
	              "name": "Overwatch: Zenyatta stats",
	              "icon_url": "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/0x02E0000000000007.png"
	            },
	            "fields": [
	              {
	                "name": "Quickplay Stats",
	                "value": `Time played: **${qp_time_played} hours**\nElimations: **${qp_elims}**\nDeaths: **${qp_deaths}**\nHealing Done: **${qp_healing_done}**\nDmg Done: **${qp_damage_done}**\nFinal Blows: **${qp_final_blows}**\nWeapon Accuracy: **${qp_weapon_accuracy}**\nOffensive Assists: **${qp_offensive_assists}**\nDefensive Assists: **${qp_defensive_assists}**\nMedals: **${qp_medals}**\nGames Won: **${qp_games_won}**\nTranscendence Healing: **${qp_transcendence_healing}**`,
	                "inline": true
	              },
	              {
	                "name": "Competitive Stats",
	                "value": `Time played: **${cm_time_played} hours**\nElimations: **${cm_elims}**\nDeaths: **${cm_deaths}**\nHealing Done: **${cm_healing_done}**\nDmg Done: **${cm_damage_done}**\nFinal Blows: **${cm_final_blows}**\nWeapon Accuracy: **${cm_weapon_accuracy}**\nOffensive Assists: **${cm_offensive_assists}**\nDefensive Assists: **${cm_defensive_assists}**\nMedals: **${cm_medals}**\nGames Won: **${cm_games_won}**\nTranscendence Healing: **${cm_transcendence_healing}**`,
	                "inline": true

	              },
	            ]
	        }
	    };
	    return send_me;
	}
}

