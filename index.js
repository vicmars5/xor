
function encode (key, msg) {
  const enc = []
  for (let i = 0; i < msg.length; i++) {
    enc.push(msg[i] ^ key[i % key.length])
  }
  return enc
}

function toCodes (str) {
  const numbers = []
  for (let i = 0; i < str.length; i++) {
    numbers.push(str.charCodeAt(i))
  }
  return numbers
}

function fromCodes (numbers) {
  const chars = numbers.map(num => String.fromCharCode(num))
  return chars.join('')
}

module.exports = { encode, toCodes, fromCodes }
