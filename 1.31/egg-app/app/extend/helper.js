
const crypto = require('crypto')
const help = (password) => {
   const md5 = crypto.createHash('md5')
    md5.update(password)
    return md5.digest('hex')
}

module.exports = {
    help
}