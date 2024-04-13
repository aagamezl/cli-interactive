import { colors, hexToRgb } from './colors.js'

/** @typedef {(text: string) => Formatter} FormatFunction */
/** @typedef {(color: string) => Formatter} HexFunction */

/**
 * Represents a text formatter with various formatting methods.
 * @typedef {Object} Formatter
 * @property {() => string} log - A method to format text without any additional styles.
 * @property {FormatFunction} reset - A method to reset text styles to default.
 * @property {FormatFunction} bold - A method to make text bold.
 * @property {FormatFunction} dim - A method to make text appear dim.
 * @property {FormatFunction} italic - A method to italicize text.
 * @property {FormatFunction} underline - A method to underline text.
 * @property {FormatFunction} blink - A method to make text blink.
 * @property {FormatFunction} inverse - A method to invert the foreground and background colors of text.
 * @property {FormatFunction} hidden - A method to hide text.
 * @property {FormatFunction} strikeThrough - A method to strike through text.
 * @property {FormatFunction} black - A method to set text color to black.
 * @property {FormatFunction} red - A method to set text color to red.
 * @property {FormatFunction} green - A method to set text color to green.
 * @property {FormatFunction} yellow - A method to set text color to yellow.
 * @property {FormatFunction} blue - A method to set text color to blue.
 * @property {FormatFunction} magenta - A method to set text color to magenta.
 * @property {FormatFunction} cyan - A method to set text color to cyan.
 * @property {FormatFunction} white - A method to set text color to white.
 * @property {FormatFunction} gray - A method to set text color to gray.
 * @property {FormatFunction} bgBlack - A method to set background color to black.
 * @property {FormatFunction} bgRed - A method to set background color to red.
 * @property {FormatFunction} bgGreen - A method to set background color to green.
 * @property {FormatFunction} bgYellow - A method to set background color to yellow.
 * @property {FormatFunction} bgBlue - A method to set background color to blue.
 * @property {FormatFunction} bgMagenta - A method to set background color to magenta.
 * @property {FormatFunction} bgCyan - A method to set background color to cyan.
 * @property {FormatFunction} bgWhite - A method to set background color to white.
 * @property {HexFunction | Function} hex - A method to set background color to white.
 */

let styles = ''

const target = () => { }

const handler = {
  /**
   *
   * @param {Formatter} target
   * @param {string} name
   * @returns {Formatter | HexFunction}
   */
  get: (target, name) => {
    if (name === 'hex') {
      /**
       * @param {string} color
       * @returns {Formatter}
       */
      return (color) => {
        const rgb = hexToRgb(color)

        styles = colors[name].replace('<RED>', String(rgb.red))
          .replace('<GREEN>', String(rgb.green))
          .replace('<BLUE>', String(rgb.blue))

        return format
      }
    }

    if (Reflect.has(colors, name)) {
      if (styles === '') {
        styles = colors[name]
      } else {
        styles = styles.replace('{REPLACE-CONTENT}', colors[name])
      }
    }

    return format
  },
  /**
   *
   * @param {*} target
   * @param {*} thisArg
   * @param {string[]} argumentsList
   * @returns
   */
  apply: (target, thisArg, argumentsList) => {
    const formatted = styles.replace('{REPLACE-CONTENT}', argumentsList.join(' '))

    styles = ''

    return formatted
  }
}

/** @type {Formatter} */
const format = new Proxy(target, handler)

export default format
