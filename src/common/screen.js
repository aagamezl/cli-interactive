import { clearScreenDown, cursorTo } from 'node:readline'

/**
 * Function to clear the terminal
 *
 */
const clearTerminal = () => {
  hideCursor()

  cursorTo(process.stdout, 0, 0)

  clearScreenDown(process.stdout)
}

/**
 * Close the terminal
 *
 * @param {import('node:readline').Interface} rl
 * @param {string} previousPrompt
 */
const closeTerminal = (rl, previousPrompt) => {
  showCursor()

  rl.setPrompt(previousPrompt) // Restore prompt
  rl.close()
}

const hideCursor = () => {
  process.stderr.write('\x1B[?25l') // Hide terminal cursor
}

const showCursor = () => {
  process.stderr.write('\u001B[?25h') // show terminal cursor
}

/**
 *
 * @param {number} left
 * @param {number} top
 * @param {string | string[]} message
 * @returns {void}
 */
const writeTo = (left, top, message) => {
  const lines = typeof message === 'string' ? message.split('\n') : message

  lines.forEach((line, index) => {
    cursorTo(process.stdout, left, top + index)

    process.stdout.write(line)
  })
}

const screen = {
  clearTerminal,
  closeTerminal,
  hideCursor,
  showCursor,
  writeTo
}

export default screen
