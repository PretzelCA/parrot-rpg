const Eris = require('eris')
const packageJSON = require('./package.json')
const fs = require('fs')
const pathModule = require('path')
const logger = require('./logger.js')

// Manage unhandled exceptions as early as possible
process.on('uncaughtException', (e) => {
  console.error(`Caught unhandled exception: ${e}`)
})

// Load Commands
var commands = []

function LoadModules (path) {
  fs.lstat(path, function (err, stat) {
    if (err) {
      return logger.loggerCustom(err, 'err')
    }
    if (stat.isDirectory()) {
      // we have a directory: do a tree walk
      fs.readdir(path, function (err, files) {
        if (err) {
          return logger.loggerCustom(err, 'err')
        }
        var f = files.length
        var l = files.length
        for (var i = 0; i < l; i++) {
          f = pathModule.join(path, files[i])
          var arrayPls = f.replace('.js', '')
          var arrayPls1 = arrayPls.replace(pathModule.join(__dirname, 'commands'), '')
          var arrayPls2 = arrayPls1.replace(/\\/g, '')
          var arrayPls3 = arrayPls2.replace('/', '')
          commands.push(' ' + arrayPls3)
          LoadModules(f)
        }
      })
    } else {
      // we have a file: load it
      try {
        require(path)(moduleHolder)
      } catch (err) {
        logger.loggerCustom(err, 'err')
      }
    }
  })
}

var DIR = pathModule.join(__dirname, 'commands')
LoadModules(DIR)
var moduleHolder = {}
exports.moduleHolder = moduleHolder

// Load Config
var config = require('./config.json')

var bot = new Eris(config.token)
var prefix = config.prefix
var rpgVersion = packageJSON.version

bot.on('messageCreate', (msg) => {
  if (msg.content.startsWith(prefix)) {
    if (msg.content === prefix + 'commands') {
      bot.createMessage(msg.channel.id, 'Here are all the commands that can be used')
      bot.createMessage(msg.channel.id, '`' + commands + '`')
      bot.createMessage(msg.channel.id, 'You can use these commands by doing `' + prefix + '<command> <args>`')
    } else {
      var watCom = prefix
      if (msg.content.length === watCom.length) {
        return
      }
      var commandFound = msg.content.substring(watCom.length)
      var actualCommand = commandFound.split(' ')
      var preArgCommand = prefix + actualCommand[0]
      var args = msg.content.substring(preArgCommand.length + 1)
      try {
        moduleHolder[actualCommand[0]](bot, msg, args)
      } catch (err) {
        logger.loggerCustom(err, 'err')
      }
    }
  }
})

bot.connect()
logger.loggerCustom('Welcome to Parrot RPG, Version ' + rpgVersion, 'f')
try {
  bot.editStatus('Use ' + prefix + 'commands for commands.')
} catch (err) {
  logger.loggerCustom(err, 'f')
}
