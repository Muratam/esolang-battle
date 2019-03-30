//const Discord = require('discord.js');
//sconst client = new Discord.Client();

const slack = require('slack-incoming-webhook');
const send = slack({'url': process.env.SLACK_INCOMING_URL});

module.exports.send = (msg) => 
	new Promise((ok, err) => send(msg, {'channel' : '#esolang'}, ok));