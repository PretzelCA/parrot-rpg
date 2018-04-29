const packageJSON = require('../package.json')

function handler (bot, msg, args) {
  bot.createMessage(msg.channel.id, {
    embed: {
      title: 'Parrot RPG | Create User',
      description: 'we should be doing something here buuuuuuuuuuuuuuuuuuuuuuuuuuuuuut naaaaaaaaaaaaaaaaaahhhhhhhhhhh',
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
  moduleHolder['createuser'] = handler
}
