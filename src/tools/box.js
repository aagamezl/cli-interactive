import { createInterface, cursorTo } from 'node:readline'

/**
 * @typedef {object} BoxConfig
 * @property {number} left
 * @property {number} top
 * @property {number} width
 * @property {number} height
*/

// const getCursorPos = () => new Promise((resolve) => {
//   const termcodes = { cursorGetPosition: '\u001b[6n' }

//   process.stdin.setEncoding('utf8')
//   process.stdin.setRawMode(true)

//   const readfx = function () {
//     const buf = process.stdin.read()
//     const str = JSON.stringify(buf) // "\u001b[9;1R"
//     const regex = /\[(.*)/g
//     const xy = regex.exec(str)[0].replace(/\[|R"/g, '').split(';')
//     const pos = { rows: xy[0], cols: xy[1] }
//     process.stdin.setRawMode(false)
//     resolve(pos)
//   }

//   process.stdin.once('readable', readfx)
//   process.stdout.write(termcodes.cursorGetPosition)
// })

/**
 *
 * @param {BoxConfig} config
 * @returns {import('./component.js').Component<BoxConfig>}
 */
const box = (config) => {
  return {
    type: 'box',
    display: (left, top) => {

    },
    render: (update) => {
      const code = []

      // Draw the top line
      code.push(' '.repeat(config.left) + '┌' + '─'.repeat(config.width - 2) + '┐\n')

      // Draw the vertical lines and spaces in between
      for (let row = 1; row < config.height - 1; row++) {
        cursorTo(process.stdout, config.left, config.top + row)
        code.push(' '.repeat(config.left) + '│' + ' '.repeat(config.width - 2) + '│\n')
      }

      // console.log(rl.getCursorPos())

      // cursorTo(process.stdout, config.left, config.top)

      // Draw the bottom line
      code.push(' '.repeat(config.left) + '└' + '─'.repeat(config.width - 2) + '┘\n')

      // console.log(result)

      // return result
      return code.join('')
    }
  }
}

export default box
