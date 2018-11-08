const packageJSON = require('../package.json')
const jsonfile = require('jsonfile')
const logger = require('../logger.js')

function handler (bot, msg, args) {
  jsonfile.readFile('./user_info/' + msg.author.id + '.usr_sav', function (err, obj) {
    if (err) return logger.loggerCustom(err)
    bot.createMessage(msg.channel.id, {
      embed: {
        title: 'Parrot RPG - Battle Team',
        description: 'You currently have the parrots below in your parrot battle team',
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        fields: [
          {
            name: obj.battleTeam.slot1.name,
            value: obj.battleTeam.slot1.type + ' | HP: ' + obj.battleTeam.slot1.hp
          },
          {
            name: obj.battleTeam.slot2.name,
            value: obj.battleTeam.slot2.type + ' | HP: ' + obj.battleTeam.slot2.hp
          },
          {
            name: obj.battleTeam.slot3.name,
            value: obj.battleTeam.slot3.type + ' | HP: ' + obj.battleTeam.slot3.hp
          },
          {
            name: obj.battleTeam.slot4.name,
            value: obj.battleTeam.slot4.type + ' | HP: ' + obj.battleTeam.slot4.hp
          },
          {
            name: obj.battleTeam.slot5.name,
            value: obj.battleTeam.slot5.type + ' | HP: ' + obj.battleTeam.slot5.hp
          },
          {
            name: obj.battleTeam.slot6.name,
            value: obj.battleTeam.slot6.type + ' | HP: ' + obj.battleTeam.slot6.hp
          }
        ],
        color: 0x008000,
        footer: {
          text: 'Parrot RPG ' + packageJSON.version + ' by PretzelCA'
        }
      }
    })
    if (err) return logger.loggerCustom(err)
  })
}

module.exports = function (moduleHolder) {
  moduleHolder['battleteam'] = handler
}
