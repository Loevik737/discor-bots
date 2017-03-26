
// import the discord.js module
const Discord = require('discord.js');
// play streams using ytdl-core
const ytdl = require('ytdl');
// create an instance of a Discord Client, and call it bot
const bot = new Discord.Client();
// the token of your bot - https://discordapp.com/developers/applications/me
const token = 'Mjk0NTY2NTUwMjEwNjA5MTU0.C7XB1g.Rkg__tq1OB2RQyWYd66LPySYSYg';
//dispatcher for streaming music
var dispatcher = null;

function play_song(commands,message){
  message.member.voiceChannel.join().then(connection => {
    const streamOptions = { seek: 0, volume: commands[2],passes: 2 };
    const stream = ytdl(commands[1], {filter : 'audioonly'});
    dispatcher =connection.playStream(stream, streamOptions);
  });
}

bot.on('message', message => {
  var commands = null;
  commands = message.content.split(' ')
  if (commands[0] == '!play') {
      play_song(commands,message);
  }
  if(commands[0] =='!stop'){
    dispatcher.end()
  }
  if(commands[0] =='!pause'){
    dispatcher.pause()
  }
  if(commands[0] =='!resume'){
    dispatcher.resume()
  }

});

// log our bot in
bot.login(token);
