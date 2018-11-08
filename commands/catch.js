const packageJSON = require('../package.json')
const fs = require('fs')
const jsonfile = require('jsonfile')
const Chance = require('chance')
const talkedRecently = new Set()

chance = new Chance()

function handler (bot, msg, args) {
  if (talkedRecently.has(msg.author.id)) {
    bot.createMessage(msg.channel.id, {
      embed: {
        title: 'Parrot RPG - Cooldown',
        description: 'Hey ' + msg.author.username + ', please wait 30 seconds every catch command!',
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
    return
  }

  var saveFile = './user_info/' + msg.author.id + '.usr_sav'
  jsonfile.readFile(saveFile, function (err, obj) {
    if (err) return console.log(err)
    var maybeThisWillWork = chance.d20()
    if (maybeThisWillWork > 5) {
      if (maybeThisWillWork > 5 && maybeThisWillWork < 12) {
        var parrot = ' Party Parrot <a:ultrafastparrot:405266489218826241>'
        obj.parrots.slot1 = parseInt(obj.parrots.slot1, 10) + 1
        if (obj.parrots.slot1 === null) {
          obj.parrots.slot1 = '1'
          return
        }
        fs.writeFile(saveFile, JSON.stringify(obj, null), function (err) {
          if (err) return console.log(err)
          console.log(JSON.stringify(obj))
          console.log('writing to ' + saveFile)
        })
      } else if (maybeThisWillWork > 11 && maybeThisWillWork < 15) {
        var parrot = 'n Explody Parrot <a:explodyparrot:405281379366993922>'
        obj.parrots.slot2 = parseInt(obj.parrots.slot2, 10) + 1
        if (obj.parrots.slot2 === null) {
          obj.parrots.slot2 = '1'
          return
        }
        fs.writeFile(saveFile, JSON.stringify(obj, null), function (err) {
          if (err) return console.log(err)
          console.log(JSON.stringify(obj))
          console.log('writing to ' + saveFile)
        })
      } else if (maybeThisWillWork > 14 && maybeThisWillWork < 17) {
        var parrot = ' Parrot Cop <a:parrotcop:405281379069460480>'
        obj.parrots.slot3 = parseInt(obj.parrots.slot3, 10) + 1
        if (obj.parrots.slot3 === null) {
          obj.parrots.slot3 = '1'
          return
        }
        fs.writeFile(saveFile, JSON.stringify(obj, null), function (err) {
          if (err) return console.log(err)
          console.log(JSON.stringify(obj))
          console.log('writing to ' + saveFile)
        })
      } else if (maybeThisWillWork > 16 && maybeThisWillWork < 20) {
        var parrot = 'n Angry Parrot <a:angryparrot:405281384798879754>'
        obj.parrots.slot4 = parseInt(obj.parrots.slot4, 10) + 1
        if (obj.parrots.slot4 === null) {
          obj.parrots.slot4 = '1'
          return
        }
        fs.writeFile(saveFile, JSON.stringify(obj, null), function (err) {
          if (err) return console.log(err)
          console.log(JSON.stringify(obj))
          console.log('writing to ' + saveFile)
        })
      } else if (maybeThisWillWork > 19) {
        var parrot = ' Rotating Parrot <a:rotatingparrot:405281387474714624>'
        obj.parrots.slot5 = parseInt(obj.parrots.slot5, 10) + 1
        if (obj.parrots.slot5 === null) {
          obj.parrots.slot5 = '1'
          return
        }
        fs.writeFile(saveFile, JSON.stringify(obj, null), function (err) {
          if (err) return console.log(err)
          console.log(JSON.stringify(obj))
          console.log('writing to ' + saveFile)
        })
      }
      console.log(maybeThisWillWork)
      bot.createMessage(msg.channel.id, {
        embed: {
          title: 'Parrot RPG - Catch',
          description: 'You threw seed onto the ground and you caught a' + parrot,
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
    } else {
      bot.createMessage(msg.channel.id, {
        embed: {
          title: 'Parrot RPG - Catch',
          description: 'You threw seed onto the ground and nothing happened. <a:sadparrot:405281388212781066>',
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
  })
  talkedRecently.add(msg.author.id)
  setTimeout(() => {
    talkedRecently.delete(msg.author.id)
  }, 30000)
}

module.exports = function (moduleHolder) {
  moduleHolder['catch'] = handler
}
