import Element from './Element.js'

/**
 * @typedef {object} InputAttributes
 * @property {string} label
 * @property {string} [name]
 * @property {unknown} value
 */

/**
 * Represents the type of input, which can be one of: checkbox, radio, or text.
 * @typedef {'checkbox' | 'radio' | 'text'} InputType
 */

export default class Input extends Element {
  /**
   * @type {InputType}
   * @access private
   */
  #type = 'text'

  /** @type {string} */
  label = ''

  /** @type {unknown} */
  value = undefined

  /**
   *
   * @param {InputType} type
   * @param {InputAttributes} attributes
   */
  constructor (type, attributes) {
    super('input')

    this.#type = type

    this.label = attributes.label
    this.name = attributes.name
    this.value = attributes.value
  }

  get type () {
    return this.#type
  }
}
