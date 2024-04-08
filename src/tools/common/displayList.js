import clearTerminal from './clearTerminal.js'
import { MARKERS, POINTER } from './constants.js'

/**
 * @typedef {Object} DisplayList
 * @property {import('../list.js').ListOptions} options - An array containing all available options.
 * @property {string} message - A message associated with the data object.
 * @property {number} currentPointer - An array containing selected options, defaults to an empty array if not provided.
 * @property {number[]} selectedOptions - An array containing selected options, defaults to an empty array if not provided.
 * @property {keyof import('./constants.js').Markers} type - The type of data object, defaults to 'list' if not provided.
 */

/**
 *
 * @param {DisplayList} config
 */

const displayList = ({ options, message, currentPointer, selectedOptions, type }) => {
  clearTerminal()

  console.log(`${message}\n`)

  options.forEach((option, index) => {
    const prefix = index === currentPointer ? POINTER : ' '

    const formattedOption = [prefix]

    const isSelected = selectedOptions.includes(index)
    formattedOption.push(isSelected ? MARKERS[type].filled : MARKERS[type].empty)

    formattedOption.push(option)

    console.log(formattedOption.join(' '))
  })
}

export default displayList
