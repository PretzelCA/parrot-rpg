const packageJSON = require('../package.json')
const logger = require('../logger.js')
function handler (bot, msg, args) {
}

module.exports = function (moduleHolder) {
  moduleHolder['battle'] = handler
}
