const packageJSON = require('../package.json')
const jsonfile = require('jsonfile')
const logger = require('../logger.js')

function handler (bot, msg, args) {
  jsonfile.readFile('./user_info/' + msg.author.id + '.usr_sav', function (err, obj) {
    if (err) return logger.loggerCustom(err)
    bot.createMessage(msg.channel.id, {
      embed: {
        title: 'Parrot RPG - User Stats',
        description: 'User stats for ' + msg.author.username,
        color: 0x008000,
        footer: {
          text: 'Parrot RPG ' + packageJSON.version + ' by PretzelCA'
        },
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        fields: [
          {
            name: 'Health',
            value: obj.user_info.health
          },
          {
            name: 'Experience',
            value: obj.user_info.exp
          },
          {
            name: 'Parrot Coins',
            value: obj.user_info.pc
          },
          {
            name: 'Battles Won',
            value: obj.battles.battlesWon,
            inline: true
          },
          {
            name: 'Battles Lost',
            value: obj.battles.battlesLost,
            inline: true
          }
        ]
      }
    })
  })
}

module.exports = function (moduleHolder) {
  moduleHolder['stats'] = handler
}
