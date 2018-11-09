const packageJSON = require('../package.json')
const jsonfile = require('jsonfile')
const logger = require('../logger.js')

function handler (bot, msg, args) {
  jsonfile.readFile('./user_info/' + msg.author.id + '.usr_sav', function (err, obj) {
    bot.createMessage(msg.channel.id, {
      embed: {
        title: 'Parrot RPG - Inventory',
        description: msg.author.username+', currently you have the items below in your inventory',
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        fields: [
          {
            name: obj.inventory.slot1,
            value: obj.inventory.slot1Amount,
            inline: true
          },
          {
            name: obj.inventory.slot2,
            value: obj.inventory.slot2Amount,
            inline: true
          },
          {
            name: obj.inventory.slot3,
            value: obj.inventory.slot3Amount,
            inline: true
          },
          {
            name: obj.inventory.slot4,
            value: obj.inventory.slot4Amount,
            inline: true
          },
          {
            name: obj.inventory.slot5,
            value: obj.inventory.slot5Amount,
            inline: true
          },
          {
            name: obj.inventory.slot6,
            value: obj.inventory.slot6Amount,
            inline: true
          },
          {
            name: obj.inventory.slot7,
            value: obj.inventory.slot7Amount,
            inline: true
          },
          {
            name: obj.inventory.slot8,
            value: obj.inventory.slot8Amount,
            inline: true
          },
          {
            name: obj.inventory.slot9,
            value: obj.inventory.slot9Amount,
            inline: true
          },
          {
            name: obj.inventory.slot10,
            value: obj.inventory.slot10Amount,
            inline: true
          },
          {
            name: obj.inventory.slot11,
            value: obj.inventory.slot11Amount,
            inline: true
          },
          {
            name: obj.inventory.slot12,
            value: obj.inventory.slot12Amount,
            inline: true
          }
        ],
        color: 0x008000,
        footer: {
          text: 'Parrot RPG ' + packageJSON.version + ' by PretzelCA'
        }
      }
    })
    if (err) return logger.loggerCustom(err, 'err')
  })
}

module.exports = function (moduleHolder) {
  moduleHolder['inventory'] = handler
}
