import { clearScreenDown, cursorTo } from 'node:readline'

import hideCursor from './hide-cursor.js'

/**
 * Function to clear the terminal
 *
 */
const clearTerminal = () => {
  hideCursor()

  cursorTo(process.stdout, 0, 0)
  clearScreenDown(process.stdout)
}

export default clearTerminal
