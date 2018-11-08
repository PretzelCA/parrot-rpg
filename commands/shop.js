const packageJSON = require('../package.json')
const logger = require('../logger.js')
const shopItems = require('../game_info/all_items.json')
function handler (bot, msg, args) {
    bot.createMessage(msg.channel.id, {
        embed: {
          title: 'About Parrot RPG',
          description: '```' + shopItems.medic.revive.name + ' | ' + shopItems.medic.revive.description + '```',
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
  moduleHolder['shop'] = handler
}
