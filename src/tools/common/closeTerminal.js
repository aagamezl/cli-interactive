import showCursor from './show-cursor.js'

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

export default closeTerminal
