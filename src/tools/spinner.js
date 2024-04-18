import { createInterface } from 'readline'

import closeTerminal from './common/closeTerminal.js'
import format from './format.js'
import hideCursor from './common/hide-cursor.js'
import showCursor from './common/show-cursor.js'
import writeTo from './common/writeTo.js'
import { randomHexColor } from './colors.js'

// https://en.wikipedia.org/wiki/List_of_Unicode_characters
// https://en.wikipedia.org/wiki/Braille_Patterns

/**
 * Configuration object for the list component.
 *
 * @typedef {Object} SpinnerConfig
 * @property {string} type
 * @property {number} speed
 * @property {() => void} start
 * @property {() => void} stop
 */

/**
 * @typedef {Object} BaseSpinnerComponent
 * @property {() => void} start
 * @property {() => void} stop
 */

/**
 * Represents a spinner component with spinner configuration and additional start and stop methods.
 * @typedef {import('./component.js').Component<SpinnerConfig> & BaseSpinnerComponent} SpinnerComponent
 */

/** @type {Record<string, string[]>} */
const SPINNER_TYPE = {
  arc: ['◜', '◝', '◞', '◟'],
  'pulsing-ciercle': ['◌', '○', '⊙', '●', '⊙', '○'],
  'braille-coveyer-belt': ['⢸', '⣸', '⢼', '⢺', '⢹', '⡏', '⡗', '⡧', '⣇', '⡇'],
  // braile:['⡏', '⣸', '⣇'],
  'braile-circle-worm': ['⠋', '⠙', '⠹', '⠸', '⢰', '⣰', '⣠', '⣄', '⣆', '⡆', '⠇', '⠏'],
  'braile-circle-hole': ['⢿', '⣻', '⣽', '⣾', '⣷', '⣯', '⣟', '⡿'],
  'braille-bouncing-ball': ['⣤', '⠶', '⠛', '⠛', '⠶'],
  'braille-up-down': [
    '⢸', '⣸', '⢼', '⢺', '⢹',
    '⢺', '⢼', '⣸', '⢸', '⡇',
    '⣇', '⡧', '⡗', '⡏', '⡗',
    '⡧', '⣇', '⡇'
  ],
  'braile-stacking': '⡀⠄⠂⠁⠈⠐⠠⢀⣀⢄⢂⢁⢈⢐⢠⣠⢤⢢⢡⢨⢰⣰⢴⢲⢱⢸⣸⢼⢺⢹⣹⢽⢻⣻⢿⣿⣶⣤⣀'.split('')
}

/**
 *
 * @param {SpinnerConfig} config
 * @returns {SpinnerComponent}
 */
const spinner = (config) => {
  /** @type {NodeJS.Timeout} */
  let interval
  let index = 0
  let displayLeft = -1
  let displayTop = -1

  // Create readline interface
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  })

  // Store previous prompt
  const previousPrompt = rl.getPrompt()

  // Set the current prompt to an empty string
  rl.setPrompt('')
  hideCursor()

  /** @type{SpinnerComponent} */
  const component = {
    type: 'spinner',
    start: () => {
      interval = setInterval(() => {
        if (index < SPINNER_TYPE[config.type].length - 1) {
          index++
        } else {
          index = 0
        }

        component.display(displayLeft, displayTop)
      }, config.speed)
    },
    stop: () => {
      showCursor()

      clearInterval(interval)
      closeTerminal(rl, previousPrompt)
    },
    render: () => {
      return format.hex(randomHexColor())(SPINNER_TYPE[config.type][index])
    },
    display: (left, top) => {
      displayLeft = left
      displayTop = top

      // cursorTo(process.stdout, displayLeft, displayTop)

      // console.log(component.render())
      writeTo(displayLeft, displayTop, component.render())
    }
  }

  return component
}

export default spinner
