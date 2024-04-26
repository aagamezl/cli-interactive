import { EventEmitter } from 'node:events'
import { KEYBOARD_KEYS } from './constants.js'

const eventEmitter = new EventEmitter()

/** @typedef {(...args: any[]) => void} Listener */

/**
 *
 * @param {string} event
 * @param {Listener} listener
 * @returns {void}
 */
const addEventListener = (event, listener) => {
  // listen to the event
  eventEmitter.on(event, listener)
}

/**
 *
 * @param {string} event
 * @param {Listener} listener
 * @returns {void}
 */
const addOnceEventListener = (event, listener) => {
  // listen to the event once
  eventEmitter.once(event, listener)
}

/**
 *
 * @param {string} event
 * @param {any} data
 * @returns {void}
 */
const dispatchEvent = (event, data) => {
  eventEmitter.emit(event, data)
}

const onData = () => {
  process.stdin.resume()

  process.stdin.on('data', (b) => {
    const s = b.toString('utf8')

    if (s === '\u0003') {
      console.error('Ctrl+C')
      process.stdin.pause()
    } else if (/^\u001b\[M/.test(s)) {  // eslint-disable-line
    } else {
      const key = {}

      // console.log(`[${b.toString()}]`)

      switch (b.toString()) {
        case '\u001b': {
          key.name = KEYBOARD_KEYS.ESCAPE
          break
        }

        case '\r': {
          key.name = KEYBOARD_KEYS.ENTER
          break
        }

        case ' ': {
          key.name = KEYBOARD_KEYS.SPACE
          break
        }

        case '\u001b[A': {
          key.name = KEYBOARD_KEYS.UP
          break
        }

        case '\u001b[B': {
          key.name = KEYBOARD_KEYS.DOWN
          break
        }

        case '\u001b[C': {
          key.name = KEYBOARD_KEYS.RIGHT
          break
        }

        case '\u001b[D': {
          key.name = KEYBOARD_KEYS.LEFT
          break
        }

        default: {
          key.name = b.toString()
        }
      }

      dispatchEvent('KEYPRESS', key)
    }

    // process.stdout.write(s)
  })
}

/**
 *
 * @param {string} event
 * @param {Listener} listener
 * @returns {void}
 */
const removeEventListener = (event, listener) => {
  eventEmitter.removeListener(event, listener)
}

const events = {
  addEventListener,
  addOnceEventListener,
  dispatchEvent,
  onData,
  removeEventListener
}

export default events
