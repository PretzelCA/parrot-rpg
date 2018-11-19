const packageJSON = require('../package.json')
const config = require('../config.json')
// const shopItems = require('../game_info/all_items.json')
function handler (bot, msg, args) {
  if (args === 'view') {
    bot.createMessage(msg.channel.id, {
      embed: {
        title: 'Parrot RPG - Shop',
        description: 'We have all sorts of items, to view a category, use `' + config.prefix + 'shop view` and then the category name.',
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        fields: [{
          name: 'Categories',
          value: '`functional`, `medical`, `buffs`'
        }],
        color: 0x008000,
        footer: {
          text: 'Parrot RPG ' + packageJSON.version + ' by PretzelCA'
        }
      }
    })
  } else {
    bot.createMessage(msg.channel.id, {
      embed: {
        title: 'Parrot RPG - Shop',
        description: 'Welcome to the shop! Take a look around, use ' + config.prefix + 'shop view to view all categories and use ' + config.prefix + 'shop buy to buy an item!',
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
}

module.exports = function (moduleHolder) {
  moduleHolder['shop'] = handler
}
