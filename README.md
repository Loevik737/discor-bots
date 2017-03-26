# discord-bot
Bot written in js. The bot can be added with this link: https://discordapp.com/oauth2/authorize?&client_id=294566550210609154&scope=bot&permissions=0 . The bot is hosted on my computer, so its only online when I am.

# Music.js 
- description: plays the audio form a youtube video for all users in a voice-channel
- commands
  -  [!play] [yt-link] [volume] :: playing the audiosteam to all the users of your current voice-channel
  -  [!stop] :: stoping the audiostream, can't be resumed
  -  [!pause] :: pausing the audiostream
  -  [!resume] :: resuming the audiostream after paused
 
# hahaa.js 
- description: writes "I'm 12 btw" after a users name, can only be changed in the script
- commands
  - none
  
# Setup
- If you want to host or change the bot yourself you can follow the same steps as i did:
  - Windows
    1) Install the latest version of node(6+)
    2) Install windows build tools cmd(admin): npm install --global --production windows-build-tools
    3) Install in project folder cmd(admin): npm install discord.js node-opus --save 
    4) Install in project folder cmd(admin): npm install --save ffmpeg-binaries
    5) Make sure ffmpeg also comes in the node_modules folder and not in the roaming/npm folder witch it did for me
    7) For hosting you can just use node <filename.js> for testing each script, or pm2(https://github.com/Unitech/pm2) to host all scripts at once with a easy to use console layout
- Linux(Ubuntu not tested)
    1) Install the latest version of node(6+)
    2) Install in project folder cmd(admin): npm install discord.js node-opus --save 
    3) Install in project folder cmd(admin): npm install --save ffmpeg-binaries
    4) For hosting you can just use node <filename.js> for testing each script, or pm2(https://github.com/Unitech/pm2) to host all scripts at once with a easy to use console layout
  
 
