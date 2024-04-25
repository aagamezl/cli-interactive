import { MARKERS } from '../common/constants.js'
import Input from './Input.js'

/**
 * Represents attributes specific to a checkbox input element.
 * @typedef {import('./Input.js').InputAttributes & { checked: boolean }} CheckBoxAttributes
 */

export default class CheckBox extends Input {
  /** @type {boolean} */
  checked = false

  /**
   *
   * @param {CheckBoxAttributes} attributes
   */
  constructor (attributes) {
    const { checked, ...inputAttributes } = attributes

    super('checkbox', inputAttributes)

    this.checked = checked
  }

  render () {
    return `${(this.checked ? MARKERS.checkbox.filled : MARKERS.checkbox.empty)} ${this.label}`
  }
}
