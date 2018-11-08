const packageJSON = require('../package.json')
const jsonfile = require('jsonfile')
const logger = require('../logger.js')

function handler (bot, msg, args) {
  bot.createMessage(msg.channel.id, {
    embed: {
      title: 'Parrot RPG | Create User',
      description: 'Welcome to the land of parrots! ' + msg.author.username + ', your adventure starts here, in the Muad region!',
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
  var obj = { 'user_info': { 'health': '100', 'exp': '0', 'pc': '100', 'home_server': '' + msg.channel.guild.id + '' }, 'battles': { 'battlesWon': '0', 'battlesLost': '0' }, 'inventory': { 'slot1': 'Empty', 'slot1Amount': '0', 'slot2': 'Empty', 'slot2Amount': '0', 'slot3': 'Empty', 'slot3Amount': '0', 'slot4': 'Empty', 'slot4Amount': '0', 'slot5': 'Empty', 'slot5Amount': '0', 'slot6': 'Empty', 'slot6Amount': '0', 'slot7': 'Empty', 'slot7Amount': '0', 'slot8': 'Empty', 'slot8Amount': '0', 'slot9': 'Empty', 'slot9Amount': '0', 'slot10': 'Empty', 'slot10Amount': '0', 'slot11': 'Empty', 'slot11Amount': '0', 'slot12': 'Empty', 'slot12Amount': '0' }, 'parrots': { 'slot1': '0', 'slot2': '0', 'slot3': '0', 'slot4': '0', 'slot5': '0', 'slot6': '0', 'slot7': '0', 'slot8': '0', 'slot9': '0', 'slot10': '0', 'slot11': '0', 'slot12': '0' }, 'battleTeam': { 'slot1': { 'type': 'Empty', 'hp': '', 'name': '' }, 'slot2': { 'type': 'Empty', 'hp': '', 'name': '' }, 'slot3': { 'type': 'Empty', 'hp': '', 'name': '' }, 'slot4': { 'type': 'Empty', 'hp': '', 'name': '' }, 'slot5': { 'type': 'Empty', 'hp': '', 'name': '' }, 'slot6': { 'type': 'Empty', 'hp': '', 'name': '' } } }
  jsonfile.writeFile('./user_info/' + msg.author.id + '.usr_sav', obj, function (err) {
    if (err) return logger.loggerCustom(err, 'err')
  })
}

module.exports = function (moduleHolder) {
  moduleHolder['createuser'] = handler
}
