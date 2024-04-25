import { MARKERS } from '../common/constants.js'
import Input from './Input.js'

/**
 * Represents attributes specific to a checkbox input element.
 * @typedef {import('./Input.js').InputAttributes & { checked: boolean }} RadioButtonAttributes
 */

export default class RadioButton extends Input {
  /**
   *
   * @param {RadioButtonAttributes} attributes
   */
  constructor (attributes) {
    const { checked, ...inputAttributes } = attributes

    super('radio', inputAttributes)

    this.checked = checked
  }

  render () {
    return `${(this.checked ? MARKERS.radio.filled : MARKERS.radio.empty)} ${this.label}`
  }
}
