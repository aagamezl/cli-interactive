import writeTo from './common/writeTo.js'

/**
 * @typedef {object} BoxConfig
 * @property {number} height
 * @property {number} width
 * @property {string} [title]
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

/** @typedef {import('./component.js').Component<BoxConfig>} BoxComponent */

/**
 *
 * @param {BoxConfig} config
 * @returns {BoxComponent}
 */
const box = (config) => {
  /** @type{BoxComponent} */
  const component = {
    type: 'box',
    display: (left, top) => {
      writeTo(left, top, component.render())
    },
    render: () => {
      const code = []

      // Draw the top line
      const topLine = '┌' + '─'.repeat(config.width - 2) + '┐'

      // If title is defined, add title to the box
      if (config.title) {
        code.push(topLine.slice(0, 2) + ' ' + config.title + ' ' + topLine.slice(config.title.length + 4))
      } else {
        code.push(topLine)
      }

      // Draw the vertical lines and spaces in between
      for (let row = 1; row < config.height - 1; row++) {
        code.push('│' + ' '.repeat(config.width - 2) + '│')
      }

      // Draw the bottom line
      code.push('└' + '─'.repeat(config.width - 2) + '┘')

      return code.join('\n')
    }
  }

  return component
}

export default box
