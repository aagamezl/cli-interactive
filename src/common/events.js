import { EventEmitter } from 'node:events'

const eventEmitter = new EventEmitter()

/** @typedef {(...args: any[]) => void} Listener */

/**
 *
 * @param {string} event
 * @param {Listener} listener
 * @returns {void}
 */
export const addEventListener = (event, listener) => {
  // listen to the event
  eventEmitter.on(event, listener)
}

/**
 *
 * @param {string} event
 * @param {Listener} listener
 * @returns {void}
 */
export const addOnceEventListener = (event, listener) => {
  // listen to the event once
  eventEmitter.once(event, listener)
}

/**
 *
 * @param {string} event
 * @param {any} data
 * @returns {void}
 */
export const dispatchEvent = (event, data) => {
  eventEmitter.emit(event, data)
}

/**
 *
 * @param {string} event
 * @param {Listener} listener
 * @returns {void}
 */
export const removeEventListener = (event, listener) => {
  eventEmitter.removeListener(event, listener)
}
