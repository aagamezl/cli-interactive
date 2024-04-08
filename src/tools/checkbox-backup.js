import { createInterface } from 'node:readline'

import clearTerminal from './common/clearTerminal.js'
import closeTerminal from './common/closeTerminal.js'
import { KEYBOARD_KEYS } from './common/constants.js'
import displayList from './common/displayList-backup.js'

/**
 *
 * @param {import('./list.js').ListConfig} config
 * @returns {Promise<number[]>}
 */
const checkbox = ({ options, message }) => {
  return new Promise((resolve) => {
    // Create readline interface
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    })

    // Initial state
    let selectedOption = 0
    /** @type {number[]} */
    const selectedOptions = []

    // Store previous prompt
    const previousPrompt = rl.getPrompt()

    // Set the current prompt to an empty string
    rl.setPrompt('')

    displayList({ options, message, selectedOption, selectedOptions, type: 'checkbox' })

    // Set up input event listeners
    process.stdin.on('keypress', (_, key) => {
      switch (key.name) {
        case KEYBOARD_KEYS.DOWN: {
          selectedOption = (selectedOption + 1) % options.length

          break
        }

        case KEYBOARD_KEYS.ESCAPE: {
          closeTerminal(rl, previousPrompt)

          break
        }

        case KEYBOARD_KEYS.SPACE: {
          const currentOption = selectedOption
          const isSelected = selectedOptions.includes(currentOption)

          if (isSelected) {
            const optionIndex = selectedOptions.indexOf(currentOption)
            selectedOptions.splice(optionIndex, 1)
          } else {
            selectedOptions.push(currentOption)
          }

          break
        }

        case KEYBOARD_KEYS.UP: {
          selectedOption = (selectedOption - 1 + options.length) % options.length

          break
        }

        default:
          break
      }

      displayList({ options, message, selectedOption, selectedOptions, type: 'checkbox' })
    })

    // Handle selection confirmation
    rl.on('line', () => {
      clearTerminal()

      closeTerminal(rl, previousPrompt)

      resolve(selectedOptions.sort())
    })

    // Capture CTRL + C
    rl.on('SIGINT', () => {
      closeTerminal(rl, previousPrompt)
    })

    rl.on('SIGTSTP', () => {
      closeTerminal(rl, previousPrompt)
    })

    // Start reading input
    rl.prompt()
  })
}

export default checkbox
