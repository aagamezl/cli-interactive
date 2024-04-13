// // https://en.wikipedia.org/wiki/ANSI_escape_code

/** @typedef {string} ColorFormatter */

const reset = '\x1b[0m{REPLACE-CONTENT}\x1b[0m'
const bold = '\x1b[1m{REPLACE-CONTENT}\x1b[22m'
const dim = '\x1b[2m{REPLACE-CONTENT}\x1b[22m'
const italic = '\x1b[3m{REPLACE-CONTENT}\x1b[23m'
const underline = '\x1b[4m{REPLACE-CONTENT}\x1b[24m'
const blink = '\x1b[5m{REPLACE-CONTENT}\x1b[25m'
const inverse = '\x1b[7m{REPLACE-CONTENT}\x1b[27m'
const hidden = '\x1b[8m{REPLACE-CONTENT}\x1b[28m'
const strikeThrough = '\x1b[9m{REPLACE-CONTENT}\x1b[29m'

const black = '\x1b[30m{REPLACE-CONTENT}\x1b[39m'
const red = '\x1b[31m{REPLACE-CONTENT}\x1b[39m'
const green = '\x1b[32m{REPLACE-CONTENT}\x1b[39m'
const yellow = '\x1b[33m{REPLACE-CONTENT}\x1b[39m'
const blue = '\x1b[34m{REPLACE-CONTENT}\x1b[39m'
const magenta = '\x1b[35m{REPLACE-CONTENT}\x1b[39m'
const cyan = '\x1b[36m{REPLACE-CONTENT}\x1b[39m'
const white = '\x1b[37m{REPLACE-CONTENT}\x1b[39m'
const rgb = '\x1b[48;2;<r>;<g>;<b>m{REPLACE-CONTENT}\x1b[0m'
const gray = '\x1b[90m{REPLACE-CONTENT}\x1b[39m'

const bgBlack = '\x1b[40m{REPLACE-CONTENT}\x1b[49m'
const bgRed = '\x1b[41m{REPLACE-CONTENT}\x1b[49m'
const bgGreen = '\x1b[42m{REPLACE-CONTENT}\x1b[49m'
const bgYellow = '\x1b[43m{REPLACE-CONTENT}\x1b[49m'
const bgBlue = '\x1b[44m{REPLACE-CONTENT}\x1b[49m'
const bgMagenta = '\x1b[45m{REPLACE-CONTENT}\x1b[49m'
const bgCyan = '\x1b[46m{REPLACE-CONTENT}\x1b[49m'
const bgWhite = '\x1b[47m{REPLACE-CONTENT}\x1b[49m'

const hex = '\x1b[38;2;<RED>;<GREEN>;<BLUE>m{REPLACE-CONTENT}\x1b[0m'
const bgHex = '\x1b[48;2;<RED>;<GREEN>;<BLUE>m{REPLACE-CONTENT}\x1b[0m'

/** @type {Record<string, ColorFormatter>} */
export const colors = {
  reset,
  bold,
  dim,
  italic,
  underline,
  blink,
  inverse,
  hidden,
  strikeThrough,

  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  rgb,
  gray,

  bgBlack,
  bgRed,
  bgGreen,
  bgYellow,
  bgBlue,
  bgMagenta,
  bgCyan,
  bgWhite,

  hex,
  bgHex
}

/**
 *
 * @param {string} name
 * @returns {string}
 */
export const getColor = (name) => {
  return colors[name]
}

/**
 *
 * @param {string} hex
 * @returns
 */
export const hexToRgb = (hex) => {
  // Remove the # if it's present
  hex = hex.replace(/^#/, '')

  // Parse the hex values for red, green, and blue
  const red = parseInt(hex.substring(0, 2), 16)
  const green = parseInt(hex.substring(2, 4), 16)
  const blue = parseInt(hex.substring(4, 6), 16)

  // Return an object with the RGB values
  return { red, green, blue }
}

export const randomHexColor = () => {
  // Generate random values for red, green, and blue
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  // Convert the RGB values to hexadecimal format
  const hexR = r.toString(16).padStart(2, '0')
  const hexG = g.toString(16).padStart(2, '0')
  const hexB = b.toString(16).padStart(2, '0')

  // Concatenate the hexadecimal values
  const hexColor = '#' + hexR + hexG + hexB

  // Return the random hexadecimal color
  return hexColor
}
