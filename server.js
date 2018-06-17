const Eris = require('eris');
 
var DISCORD_BOT_TOKEN = "NDQ3NzExODYxMjkxNDgzMTQ1.DeLnwg.wo3a8x71AxmTFiXYK_rCs-VdpCY"

const bot = new Eris(DISCORD_BOT_TOKEN);   // Replace DISCORD_BOT_TOKEN in .env with your bot accounts token
 
var prefix = '> '
var mute = []

bot.on('ready', () => {                                // When the bot is ready
    console.log('Ready!');                             // Log "Ready!"
});
 
bot.on('messageCreate', (msg) => {
    for (var i = 0; i < mute.length; i++) {
      if (msg.author.id == mute[i]) {
        msg.delete("User is muted")
      }
    }
    if (msg.content == prefix + 'list') {
      mute.forEach(function(muteid) {
        bot.createMessage(msg.channel.id, muteid);
      })
    }
    if (msg.content == prefix + 'clear') {
      mute = []
      bot.createMessage(msg.channel.id, 'Mute list cleared!');
    }
    if (msg.content.startsWith(prefix + 'mute ')) {
      var ida = msg.content.split("mute ").pop()
      if (typeof(Number(ida)) == 'number' && Number(ida) != 345346351875358721) {
        mute.push(ida)
        bot.createMessage(msg.channel.id, 'User added to mute list! Use `> unmute <id>` to unmute them.');
      } else{
        var mentions = msg.mentions
        mentions.forEach(function (item) {
          bot.createMessage(msg.channel.id, 'OOPS! try using their ID')
        })
      }
    }
      if (msg.content.startsWith(prefix + 'unmute ')) {
      var ida = msg.content.split("mute ").pop()
      if (typeof(Number(ida)) == 'number' && Number(ida) != 345346351875358721) {
        delete mute[mute.indexOf(ida)]
        bot.createMessage(msg.channel.id, 'User removed from mute list! Use `> mute <id>` to mute them.');
      } else{
        var mentions = msg.mentions
        mentions.forEach(function (item) {
          bot.createMessage(msg.channel.id, 'OOPS! try using their ID')
        })
      }
    }
});
 
bot.editStatus('online', {
  name: 'PREFIX: "> "',
  type: 0
});

bot.connect();                                         // Get the bot to connect to Discord