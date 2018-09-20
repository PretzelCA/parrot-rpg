const packageJSON = require('../package.json')

function handler (bot, msg, args) {

}

module.exports = function (moduleHolder) {
  moduleHolder['battle'] = handler
}
