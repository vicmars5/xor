const rl = require('readline-sync')

const xor = require('./index')

const keyStr = rl.question('Llave ')
const msg = rl.question('Mensaje ')

const encodedMsg = xor.encode(xor.toCodes(keyStr), xor.toCodes(msg))
console.log(encodedMsg)
const encodedStr = xor.fromCodes(encodedMsg)
console.log(encodedStr)
