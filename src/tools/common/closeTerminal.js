/**
 * Close the terminal
 *
 * @param {import('node:readline').Interface} rl
 * @param {string} previousPrompt
 */
const closeTerminal = (rl, previousPrompt) => {
  // process.stderr.write('\x1B[?25h') // Show terminal cursor

  rl.setPrompt(previousPrompt) // Restore prompt
  rl.close()
}

export default closeTerminal
