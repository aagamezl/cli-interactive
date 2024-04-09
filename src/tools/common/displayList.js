import clearTerminal from './clearTerminal.js'
import { POINTER } from './constants.js'
import checkbox from '../checkbox.js'
import radio from '../radio.js'

const components = {
  checkbox,
  radio
}

/**
 * @typedef {Object} DisplayList
 * @property {import('../list.js').ListOptions} options - An array containing all available options.
 * @property {string} message - A message associated with the data object.
 * @property {number} currentPointer - An array containing selected options, defaults to an empty array if not provided.
 * @property {number[]} selectedOptions - An array containing selected options, defaults to an empty array if not provided.
 * @property {keyof import('./constants.js').Markers} type - The type of data object, defaults to 'list' if not provided.
 * @property {number} top - The list top position.
 * @property {number} left - The list left position.
 */

/**
 *
 * @param {DisplayList} config
 * @returns {string[]}
 */
const displayList = ({
  options,
  message,
  currentPointer,
  selectedOptions,
  type,
  left,
  top
}) => {
  clearTerminal()

  // cursorTo(process.stdout, left, top)
  // console.log(`${message}\n`)

  // options.forEach((option, index) => {
  return options.map((option, index) => {
    const prefix = index === currentPointer ? POINTER : ' '

    const formattedOption = [prefix]

    const isSelected = selectedOptions.includes(index)

    // cursorTo(process.stdout, left, top)
    // console.log(prefix)
    components[type](option, isSelected, left, top)
    formattedOption.push(components[type](option, isSelected, left, top))

    // console.log(formattedOption.join(' '))
    return formattedOption.join(' ')
  })
}

export default displayList
