import writeTo from './common/writeTo.js'
import hideCursor from './common/hide-cursor.js'
// import activateMouse from './activate-mouse.js'
import { addEventListener } from './common/events.js'
import activateMouse from './activate-mouse.js'

// import '../../examples/mouse.js'

/**
 * @typedef {object} BoxConfig
 * @property {number} height
 * @property {number} width
 * @property {string} [title]
*/

/** @typedef {import('./component.js').Component<BoxConfig>} Component */

/**
 * @typedef {Object} BaseComponent
 * @property {number} scrollPosition
 * @property {string|import('./component.js').Component<any>[]} content
 * @property {() => void} scrollDown
 * @property {() => void} scrollUp
 * @property {(content: string|import('./component.js').Component<any>[]) => void} setContent
 */

/** @typedef {Component & BaseComponent} BoxComponent */

/**
 *
 * @param {import('./component.js').Component<any>[]} components
 * @returns {string[]}
 */
const renderChildren = (components) => {
  return components.reduce((result, child) => {
    result.push(...child.render().split('\n'))
    // return child.render()

    return result
  }, [])
}

/**
 *
 * @param {BoxConfig} config
 * @returns {BoxComponent}
 */
const box = (config) => {
  // const displayLeft = -1
  // const displayTop = -1

  // Create readline interface

  // process.stdin.on('keypress', (_, key) => {
  //   switch (key.name) {
  //     case KEYBOARD_KEYS.DOWN: {
  //       component.scrollDown()

  //       break
  //     }

  //     case KEYBOARD_KEYS.UP: {
  //       component.scrollUp()

  //       break
  //     }

  //     default:
  //       break
  //   }
  // })

  // Start reading input
  hideCursor()

  activateMouse()

  addEventListener('MOUSE:SCROLL', (event) => {
    if (event.button === 'up') {
      component.scrollUp()
    } else {
      component.scrollDown()
    }
  })

  /** @type{BoxComponent} */
  const component = {
    type: 'box',
    scrollPosition: 0,
    // content: '',
    children: [],
    appendChild: (child) => {
      child.parent = component

      component.children.push(child)

      return component
    },
    display: (left, top) => {
      // displayLeft = left
      // displayTop = top
      component.left = left
      component.top = top

      // writeTo(displayLeft, displayTop, component.render())
      writeTo(component.left, component.top, component.render())
    },
    render: () => {
      const code = []

      // const content = Array.isArray(component.content)
      //   ? renderChildren(component.content)
      //   : component.content.trim().split('\n')

      const content = renderChildren(component.children)

      // const visibleContent = component.content.slice(component.scrollPosition, component.scrollPosition + config.height - 2)
      const visibleContent = content.slice(component.scrollPosition, component.scrollPosition + config.height - 2)

      // Draw the top line
      const topLine = '┌' + '─'.repeat(config.width - 2) + '┐'

      // If title is defined, add title to the box
      if (config.title) {
        code.push(topLine.slice(0, 2) + ' ' + config.title + ' ' + topLine.slice(config.title.length + 4))
      } else {
        code.push(topLine)
      }

      // Draw the vertical lines and spaces in between
      if (visibleContent.length > 0) {
        // Draw the vertical lines and content
        visibleContent.forEach((line) => {
          code.push('│' + line.padEnd(config.width - 2) + '│')
        })
      }

      // Draw the bottom line
      code.push('└' + '─'.repeat(config.width - 2) + '┘')

      // Draw the scrollbar if necessary
      if (content.length > config.height - 2) {
        const maxScroll = Math.max(0, content.length - config.height + 2)
        const scrollPercentage = Math.min(1, (component.scrollPosition / maxScroll))

        if (scrollPercentage < 1) {
          const scrollPosition = Math.floor((config.height - 2) * scrollPercentage) + 1
          const scrollBarLine = code[scrollPosition].slice(0, -1) + '█'
          code[scrollPosition] = scrollBarLine
        } else {
          const scrollBarLine = code.at(-2).slice(0, -1) + '█'
          code[code.length - 2] = scrollBarLine
        }
      }

      return code.join('\n')
    },
    scrollDown: () => {
      // const maxScroll = Math.max(0, component.content.length - config.height + 2)
      // const maxScroll = Math.max(0, component.content.trim().split('\n').length - config.height + 2)
      const maxScroll = Math.max(0, renderChildren(component.children).length - config.height + 2)

      if (component.scrollPosition < maxScroll) {
        component.scrollPosition++
        // component.display(displayLeft, displayTop)
        component.display(component.left, component.top)
      }
    },
    scrollUp: () => {
      if (component.scrollPosition > 0) {
        component.scrollPosition--

        // component.display(displayLeft, displayTop)
        component.display(component.left, component.top)
      }
    },
    setContent: (content) => {
      // component.content = content.trim().split('\n')
      component.content = content
    }
  }

  return component
}

export default box
