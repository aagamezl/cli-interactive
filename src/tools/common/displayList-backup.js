import { MARKERS, POINTER } from './constants.js'
import clearTerminal from './clearTerminal.js'

/**
 * @typedef {Object} DisplayList
 * @property {import('../list.js').ListOptions} options - An array containing all available options.
 * @property {string} message - A message associated with the data object.
 * @property {number} selectedOption - The currently selected option.
 * @property {number[]} [selectedOptions=[]] - An array containing selected options, defaults to an empty array if not provided.
 * @property {keyof import('./constants.js').Markers} [type='radio'] - The type of data object, defaults to 'list' if not provided.
 */

/**
 *
 * @param {DisplayList} config
 */
const displayList = ({ options, message, selectedOption, selectedOptions = [], type = 'radio' }) => {
  clearTerminal()

  console.log(`${message}\n`)

  options.forEach((option, index) => {
    const prefix = index === selectedOption ? POINTER : ' '

    const formattedOption = [prefix]

    if (Object.keys(MARKERS).includes(type)) {
      const isSelected = selectedOptions.includes(index)
      formattedOption.push(isSelected ? MARKERS[type].filled : MARKERS[type].empty)
    }

    formattedOption.push(option)
    // const glyph = isSelected ? MARKERS[type].filled : MARKERS[type].empty

    // const formattedOption = `${prefix} ${glyph} ${option}`

    // console.log(formattedOption)
    console.log(formattedOption.join(' '))
  })
}

export default displayList
