//const Discord = require('discord.js');
//const client = new Discord.Client();

//const readyPromise = new Promise((resolve) => {
//	client.on('ready', () => {
//		resolve();
//	});
//});
const slack = require('slack-incoming-webhook');
const send = slack({'url': process.env.SLACK_INCOMING_URL});
/*
client.login(process.env.DISCORD_TOKEN);

module.exports.send = async (...args) => {
	await readyPromise;
	return client.channels.get(process.env.DISCORD_CHANNEL).send(...args);
};
*/
module.exports.send = (msg) =>
  new Promise((ok, err) => send(msg, {'channel' : '#esolang'}, ok));
