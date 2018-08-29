const packageJSON = require('../package.json')
const jsonfile = require('jsonfile')

function handler (bot, msg, args) {
  jsonfile.readFile('./user_info/' + msg.author.id + '.usr_sav', function (err, obj) {
    bot.createMessage(msg.channel.id, {
      embed: {
        title: 'Parrot RPG - Parrots',
        description: 'You currently have the parrots below in your parrot nest',
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        fields: [
          {
            name: 'Party Parrots <a:ultrafastparrot:405266489218826241>',
            value: obj.parrots.slot1
          },
          {
            name: 'Explody Parrots <a:explodyparrot:405281379366993922>',
            value: obj.parrots.slot2
          },
          {
            name: 'Parrot Cops <a:parrotcop:405281379069460480>',
            value: obj.parrots.slot3
          },
          {
            name: 'Angry Parrots <a:angryparrot:405281384798879754>',
            value: obj.parrots.slot4
          },
          {
            name: 'Roating Parrots <a:rotatingparrot:405281387474714624>',
            value: obj.parrots.slot5
          }
        ],
        color: 0x008000,
        footer: {
          text: 'Parrot RPG ' + packageJSON.version + ' by PretzelCA'
        }
      }
    })
  })
}

module.exports = function (moduleHolder) {
  moduleHolder['parrots'] = handler
}
