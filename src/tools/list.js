// @ts-check

import { createInterface, cursorTo } from 'node:readline'

import clearTerminal from './common/clearTerminal.js'
import closeTerminal from './common/closeTerminal.js'
import { KEYBOARD_KEYS, LIST_LAYOUT } from './common/constants.js'
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
 * @property {'horizontal'|'vertical'} layout - The list options type.
 * @property {number} top - The list top position.
 * @property {number} left - The list left position.
 */

/**
 *
 * @param {ListConfig} config
 * @returns {Promise<number|number[]>}
 */
const list = ({ options, message, type, layout = 'vertical', top, left }) => {
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

    // const displacement = options.reduce((maximum, option) => {
    //   maximum = option.length > maximum ? option.length : maximum

    //   return maximum
    // }, 0)

    // console.log(displacement)
    let displacement = 0

    displayList({
      options,
      message,
      currentPointer,
      selectedOptions,
      type,
      left,
      top
    }).forEach((component, index) => {
      if (layout === 'vertical') {
        cursorTo(process.stdout, left, top + index)
      } else {
        // cursorTo(process.stdout, left + ((component.length + 4) * index), top)
        cursorTo(process.stdout, left + displacement, top)
      }

      displacement += component.length + 1

      console.log(component)
    })
    /* .join(LIST_LAYOUT[layout].glue) */

    // console.log(displacement)

    const FORWARD_KEY = LIST_LAYOUT[layout].forward
    const BACKWARD_KEY = LIST_LAYOUT[layout].backward

    // Set up input event listeners
    process.stdin.on('keypress', (_, key) => {
      switch (key.name) {
        case FORWARD_KEY: {
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

        case BACKWARD_KEY: {
          currentPointer = (currentPointer - 1 + options.length) % options.length

          break
        }

        default:
          break
      }

      displacement = 0

      displayList({
        options,
        message,
        currentPointer,
        selectedOptions,
        type,
        left,
        top
      }).forEach((component, index) => {
        if (layout === 'vertical') {
          cursorTo(process.stdout, left, top + index)
        } else {
          // cursorTo(process.stdout, left + ((displacement + 5) * index), top)
          cursorTo(process.stdout, left + displacement, top)
        }

        displacement += component.length + 1

        console.log(component)
      })
    })

    // Handle selection confirmation
    rl.on('line', () => {
      clearTerminal()

      closeTerminal(rl, previousPrompt)
      console.log('line')

      return resolve(type === 'radio' ? selectedOptions[0] ?? -1 : selectedOptions.sort())
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
