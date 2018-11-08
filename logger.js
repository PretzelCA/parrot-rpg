const fs = require('fs')
const moment = require('moment')
const os = require('os')
const Sentry = require('@sentry/node');
var config = require('./config.json')
Sentry.init({ dsn: config.dsn });

module.exports = {
  loggerCustom: function (message, type) {
    var time = '[' + moment().format('MMMM Do YYYY, h:mm:ss a')
      var finalMessage = time + '] ' + message + os.EOL
      console.log(finalMessage)
      fType = ""
      if (type == "err") {
        Sentry.captureException(message)
      } else if (type == "msg") {
        Sentry.captureMessage(message)
      } else {
          return
      }
      fs.appendFile('./logs.txt', finalMessage, function (err) {
        if (err) {
          // Very high quality error catch here
          return loggerCustom(err, "err")
        }
      })
  }
}