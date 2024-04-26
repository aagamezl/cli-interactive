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

    // If we don’t put the break line at the end we will get a weird character
    // after our string.
    // https://www.geeksforgeeks.org/difference-between-process-stdout-write-and-console-log-in-node-js/
    process.stdout.write(`${line}\r`)
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
