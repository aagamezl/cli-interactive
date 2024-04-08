// @ts-check

import { createInterface } from 'node:readline'

import clearTerminal from './common/clearTerminal.js'
import closeTerminal from './common/closeTerminal.js'
import { KEYBOARD_KEYS } from './common/constants.js'
import displayList from './common/displayList.js'

/**
 * Represents a configuration for a list component.
 * @typedef {string[]} ListOptions
 */

/**
 * Configuration object for the list component.
 *
 * @typedef {Object} ListConfig
 * @property {ListOptions} options - An array of strings representing the options for the list.
 * @property {string} message - Message associated with the list.
 * @property {keyof import('./common/constants.js').Markers} type - The list options type.
 */

/**
 *
 * @param {ListConfig} config
 * @returns {Promise<number|number[]|undefined>}
 */
const list = ({ options, message, type }) => {
  return new Promise((resolve) => {
    // Create readline interface
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    })

    process.stdin.setRawMode(true)

    // Initial state
    let currentPointer = 0

    /** @type {number[]} */
    const selectedOptions = []

    // Store previous prompt
    const previousPrompt = rl.getPrompt()

    // Set the current prompt to an empty string
    rl.setPrompt('')

    displayList({ options, message, currentPointer, selectedOptions, type })

    // Set up input event listeners
    process.stdin.on('keypress', (_, key) => {
      switch (key.name) {
        case KEYBOARD_KEYS.DOWN: {
          currentPointer = (currentPointer + 1) % options.length

          break
        }

        case KEYBOARD_KEYS.ESCAPE: {
          closeTerminal(rl, previousPrompt)

          break
        }

        case KEYBOARD_KEYS.SPACE: {
          switch (type) {
            case 'checkbox': {
              const isSelected = selectedOptions.includes(currentPointer)

              if (isSelected) {
                const optionIndex = selectedOptions.indexOf(currentPointer)
                selectedOptions.splice(optionIndex, 1)
              } else {
                selectedOptions.push(currentPointer)
              }

              break
            }

            case 'radio': {
              selectedOptions.pop()
              selectedOptions.push(currentPointer)
            }
          }

          break
        }

        case KEYBOARD_KEYS.UP: {
          currentPointer = (currentPointer - 1 + options.length) % options.length

          break
        }

        default:
          break
      }

      displayList({ options, message, currentPointer, selectedOptions, type })
    })

    // Handle selection confirmation
    rl.on('line', () => {
      clearTerminal()

      closeTerminal(rl, previousPrompt)
      console.log('line')

      return resolve(type === 'radio' ? selectedOptions[0] : selectedOptions.sort())
    })

    // Capture CTRL + C
    rl.on('SIGINT', () => {
      closeTerminal(rl, previousPrompt)
    })

    rl.on('SIGTSTP', () => {
      console.log('SIGTSTP')
      closeTerminal(rl, previousPrompt)
    })

    // Start reading input
    rl.prompt()
  })
}

export default list
