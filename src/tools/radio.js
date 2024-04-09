import { cursorTo } from 'node:readline'

import { MARKERS } from './common/constants.js'

/**
 *
 * @param {string} label
 * @param {boolean} isSelected
 * @param {number} left
 * @param {number} top
 * @returns {string}
 */
const radio = (label, isSelected, left, top) => {
  // return `${(isSelected ? MARKERS.radio.filled : MARKERS.radio.empty)} ${label}`
  cursorTo(process.stdout, left, top)
  console.log(`${(isSelected ? MARKERS.radio.filled : MARKERS.radio.empty)} ${label}`)
}

export default radio
