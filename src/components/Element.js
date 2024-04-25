export default class Element {
  /**
   * @type {string}
   * @access private
   */
  #elementName = 'Element'

  /** @type {string | undefined} */
  name = undefined

  /**
   *
   * @param {string} elementName
   */
  constructor (elementName) {
    this.#elementName = elementName
  }

  get elementName () {
    return this.#elementName
  }

  /**
   *
   * @param {number} left
   * @param {number} top
   * @returns {void}
   */
  display (left, top) { }

  render () {
    return ''
  }
}
