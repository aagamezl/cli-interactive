import { createInterface, cursorTo } from 'node:readline'

import clearTerminal from './common/clearTerminal.js'
import closeTerminal from './common/closeTerminal.js'
import { KEYBOARD_KEYS, LIST_LAYOUT, POINTER } from './common/constants.js'
import checkbox from './checkbox.js'
import radio from './radio.js'

/**
 * Represents a configuration for a list component.
 * @typedef {string[]} ListOptions
 */

/**
 * Configuration object for the list component.
 *
 * @typedef {Object} ListConfig
 * @property {keyof import('./common/constants.js').Markers} type - The list options type.
 * @property {ListOptions} options - An array of strings representing the options for the list.
 * @property {'horizontal'|'vertical'} layout - The list options type.
 * @property {number} left
 * @property {number} top
 * @property {(selectedOptions: number|number[]) => void} onSelect
 */

/** @typedef {import('./component.js').Component<ListConfig>} ListComponent */

/**
 * Represents a checkbox object with label and checked status.
 * @typedef {Object} ChoiceConfig
 * @property {string} label - The label associated with the checkbox.
 * @property {boolean} checked - The status of the checkbox, indicating whether it's checked (true) or not (false).
 */

/**
 * @typedef {object} Components
 * @property {Record<string, import('./component.js').Component<ListOptions>>} choice
 */
const components = {
  checkbox,
  radio
}

/**
 *
 * @param {ListConfig} config
 * @returns {ListComponent}
 */
const list = (config) => {
  // Create readline interface
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  })

  // Store previous prompt
  const previousPrompt = rl.getPrompt()

  // Set the current prompt to an empty string
  rl.setPrompt('')

  // Initial state
  let currentPointer = 0

  /** @type {number[]} */
  const selectedOptions = []

  // Set up input event listeners

  // Handle selection confirmation
  rl.on('line', () => {
    clearTerminal()

    closeTerminal(rl, previousPrompt)

    config.onSelect(config.type === 'radio' ? selectedOptions[0] ?? -1 : selectedOptions.sort())
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

  process.stdin.on('keypress', (_, key) => {
    const FORWARD_KEY = LIST_LAYOUT[config.layout].forward
    const BACKWARD_KEY = LIST_LAYOUT[config.layout].backward

    switch (key.name) {
      case FORWARD_KEY: {
        currentPointer = (currentPointer + 1) % config.options.length

        break
      }

      case KEYBOARD_KEYS.ESCAPE: {
        closeTerminal(rl, previousPrompt)

        break
      }

      case KEYBOARD_KEYS.SPACE: {
        switch (config.type) {
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
        currentPointer = (currentPointer - 1 + config.options.length) % config.options.length

        break
      }

      default:
        break
    }

    component.render()
  })

  /** @type{ListComponent} */
  const component = {
    type: 'list',
    render: (update) => {
      const updatedConfig = { ...config, ...update }
      let displacement = 0

      return updatedConfig.options.map((option, index) => {
        const prefix = index === currentPointer ? POINTER : ' '
        const checked = selectedOptions.includes(index)
        const code = components[config.type]({ label: option, checked }).render()

        if (config.layout === 'vertical') {
          cursorTo(process.stdout, config.left, config.top + index)
        } else {
          cursorTo(process.stdout, config.left + displacement, config.top)
        }

        console.log(prefix + ' ' + code)
        displacement += code.length + prefix.length + 2

        return prefix + ' ' + code
      }).join('')
    },
    display: (left, top) => {
      cursorTo(process.stdout, left, top)

      console.log(component.render())
    }
  }

  return component
}

export default list
