import { MARKERS } from './common/constants.js'

/**
 *
 * @param {string} label
 * @param {boolean} isSelected
 * @param {number} left
 * @param {number} top
 * @returns {string}
 */
const checkbox = (label, isSelected, left, top) => {
  // cursorTo(process.stdout, left, top)
  return `${(isSelected ? MARKERS.checkbox.filled : MARKERS.checkbox.empty)} ${label}`
  // console.log(`${(isSelected ? MARKERS.checkbox.filled : MARKERS.checkbox.empty)} ${label}`)
}

export default checkbox
