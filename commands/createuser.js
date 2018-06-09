const packageJSON = require('../package.json')
const config = require('../config.json')
const jsonfile = require('jsonfile')
const fs = require('fs')

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
  var obj = {"user_info":{"health":"100","exp":"0","pc":"100","home_server":"" + msg.channel.guild.id + ""}, "inventory":{"slot1":"","slot2":"","slot3":"","slot4":"","slot5":"","slot6":"","slot7":"","slot8":"","slot9":"","slot10":"","slot11":"","slot12":""}}
  jsonfile.writeFile('./user_info/' + msg.author.id + '.usr_sav', obj, function (err) {
    console.error(err)
  })
}

module.exports = function (moduleHolder) {
  moduleHolder['createuser'] = handler
}
