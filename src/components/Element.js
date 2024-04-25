import { screen } from '../common/index.js'
export default class Element {
  /**
   * @type {string}
   * @access private
   */
  #elementName = 'Element'

  /**
   * @type {number}
   * @access private
   */
  #left = 0

  /**
   * @type {number}
   * @access private
   */
  #top = 0

  /** @type {string | undefined} */
  name = undefined

  /** @type {Element | undefined} */
  parent = undefined

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

  get left () {
    return this.#left
  }

  get top () {
    return this.#top
  }

  /**
   *
   * @param {number} left
   * @param {number} top
   * @returns {void}
   */
  display (left, top) {
    this.#left = left
    this.#top = top

    screen.writeTo(left, top, this.render())
  }

  render () {
    return ''
  }
}
