const packageJSON = require('../package.json')

function handler (bot, msg, args) {
  bot.createMessage(msg.channel.id, {
    embed: {
      title: 'Parrot RPG Help',
      description: 'See the commands with p!commands or join our server at http://discord.gg/BG3AUfh',
      author: {
        name: bot.user.username,
        icon_url: bot.user.avatarURL
      },
      color: 0x008000,
      footer: {
        text: 'Parrot RPG ' + packageJSON.version + ' by PretzelCA'
      }
    }
  })
}

module.exports = function (moduleHolder) {
  moduleHolder['help'] = handler
}
