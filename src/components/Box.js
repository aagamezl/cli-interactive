import Element from './Element.js'

/**  @typedef {import('./Element.js').default} Element */

/**
 * @typedef {object} BoxConfig
 * @property {number} height
 * @property {string} [title]
 * @property {number} width
*/

export default class Box extends Element {
  /** @type {Element[]} */
  #children = []

  /**
   * @type {number}
   * @access private
   */
  #height = -1

  /**
   * @type {number}
   * @access private
   */
  #scrollPosition = -1

  /**
   * @type {string|undefined}
   * @access private
   */
  #title = undefined

  /**
   * @type {number}
   * @access private
   */
  #width = -1

  /**
   *
   * @param {BoxConfig} config
   */
  constructor (config) {
    super('box')

    this.#height = config.height
    this.#width = config.width

    if (config.title) {
      this.#title = config.title
    }
  }

  /**
   *
   * @param {Element} child
   * @returns
   */
  appendChild (child) {
    child.parent = this

    this.#children.push(child)

    return this
  }

  /**
   *
   * @param {Element[]} components
   * @returns {string[]}
   */
  #renderChildren (components) {
    return components.reduce((/** @type {string[]} */ result, child) => {
      result.push(...child.render().split('\n'))

      return result
    }, [])
  }

  render () {
    /** @type {string[]} */
    const code = []

    const content = this.#renderChildren(this.#children)

    const visibleContent = content.slice(this.#scrollPosition, this.#scrollPosition + this.#height - 2)

    // Draw the top line
    const topLine = '┌' + '─'.repeat(this.#width - 2) + '┐'

    // If title is defined, add title to the box
    if (this.#title) {
      code.push(topLine.slice(0, 2) + ' ' + this.#title + ' ' + topLine.slice(this.#title.length + 4))
    } else {
      code.push(topLine)
    }

    // Draw the vertical lines and spaces in between
    if (visibleContent.length > 0) {
      // Draw the vertical lines and content
      visibleContent.forEach((line) => {
        code.push('│' + line.padEnd(this.#width - 2) + '│')
      })
    }

    // Draw the bottom line
    code.push('└' + '─'.repeat(this.#width - 2) + '┘')

    // Draw the scrollbar if necessary
    if (content.length > this.#height - 2) {
      const maxScroll = Math.max(0, content.length - this.#height + 2)
      const scrollPercentage = Math.min(1, (this.#scrollPosition / maxScroll))

      if (scrollPercentage < 1) {
        const scrollPosition = Math.floor((this.#height - 2) * scrollPercentage) + 1
        const scrollBarLine = code[scrollPosition].slice(0, -1) + '█'
        code[scrollPosition] = scrollBarLine
      } else {
        const scrollBarLine = code.at(-2).slice(0, -1) + '█'
        code[code.length - 2] = scrollBarLine
      }
    }

    return code.join('\n')
  }
}
