const packageJSON = require('../package.json')

function handler (bot, msg, args) {
  bot.createMessage(msg.channel.id, {
    embed: {
      title: 'About Parrot RPG',
      description: 'More information coming soon, source code is at https://github.com/PretzelCA/parrot-rpg',
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
  moduleHolder['about'] = handler
}
