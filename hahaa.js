
// import the discord.js module
const Discord = require('discord.js');

// create an instance of a Discord Client, and call it bot
const bot = new Discord.Client();

// the token of your bot - https://discordapp.com/developers/applications/me
const token = '';

// create an event listener for messages
bot.on('message', message => {
  // if the messages authors username is "name"
  if (message.author.username === 'havard.lovik') {
    // send message to the same channel.
    message.channel.sendMessage("I'm 12 btw");
  }

});

// log our bot in
bot.login(token);
