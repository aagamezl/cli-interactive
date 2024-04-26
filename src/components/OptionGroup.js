import { POINTER } from '../common/constants.js'
import CheckBox from './CheckBox.js'
import Element from './Element.js'
import RadioButton from './RadioButton.js'

/**
 * Represents a configuration for a list component.
 * @typedef {string[]} ListOptions
 */

/** @typedef {keyof import('../common/constants.js').Markers} GroupType */

/** @typedef {'horizontal'|'vertical'} Layout */

/**
 * Configuration object for the list component.
 *
 * @typedef {Object} OptionGroupConfig
 * @property {GroupType} type - The list options type.
 * @property {ListOptions} options - An array of strings representing the options for the list.
 * @property {Layout} layout - The list options type.
 * @property {(selectedOptions: number|number[]) => void} onSelect
 */

/**
 * @typedef {Record<GroupType, typeof CheckBox | typeof RadioButton>} componentTypes
 * @access private
 */

export default class OptionGroup extends Element {
  #currentPointer = -1

  /**
   * @type {Layout}
   * @access private
   */
  #layout = 'horizontal'

  /**
   * @type {string[]}
   * @access private
   */
  #options = []

  /**
   * @type {number[]}
   * @access private
   */
  #selectedOptions = []

  /**
   * @type {GroupType}
   * @access private
   */
  #type = 'radio'

  /**
   * @type {componentTypes}
   * @access private
   */
  #componentTypes = {
    checkbox: CheckBox,
    radio: RadioButton
  }

  /**
   *
   * @param {OptionGroupConfig} config
   */
  constructor (config) {
    super('option-group')

    this.#layout = config.layout
    this.#options = config.options
    this.#type = config.type
  }

  get options () {
    return this.#options
  }

  get selectedOptions () {
    return this.#selectedOptions
  }

  render () {
    return this.#options.map((option, index) => {
      const prefix = index === this.#currentPointer ? POINTER : ' '
      const checked = this.#selectedOptions.includes(index)
      const code = new this.#componentTypes[this.#type]({ label: option, checked }).render()

      // if (config.layout === 'vertical') {
      //   cursorTo(process.stdout, config.left, config.top + index)
      // } else {
      //   cursorTo(process.stdout, config.left + displacement, config.top)
      // }

      // console.log(prefix + ' ' + code)
      // displacement += code.length + prefix.length + 2

      return prefix + ' ' + code // + LIST_LAYOUT[config.layout].glue
    }).join('\n')
  }
}
