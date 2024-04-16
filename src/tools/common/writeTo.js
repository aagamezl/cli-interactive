import { cursorTo } from 'node:readline'

/**
 *
 * @param {number} left
 * @param {number} top
 * @param {string|string[]} message
 * @returns {void}
 */
const writeTo = (left, top, message) => {
  const lines = typeof message === 'string' ? message.split('\n') : message

  lines.forEach((line, index) => {
    cursorTo(process.stdout, left, top + index)

    process.stdout.write(line)
  })
}

export default writeTo
