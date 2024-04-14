import { addEventListener } from './common/events.js'
import writeTo from './common/writeTo.js'

/**
 * Configuration object for the list component.
 *
 * @typedef {Object} ProgressbarConfig
 * @property {number} total
 * @property {number} width
 * @property {string} onUpdate
 * @property {() => void} onComplete
 */

/**
 * @typedef {Object} BaseComponent
 * @property {(progress: number) => void} update
 * @property {() => void} pause
 */

/**
 * Represents a spinner component with spinner configuration and additional start and stop methods.
 * @typedef {import('./component.js').Component<ProgressbarConfig> & BaseComponent} ProgressbarComponent
 */

/**
 *
 * @param {ProgressbarConfig} config
 * @returns {ProgressbarComponent}
 */
const progressBar = (config) => {
  const fillChar = '█'
  const emptyChar = '░'
  const total = config.total
  const width = config.width ?? 50
  let current = 0
  let displayLeft = -1
  let displayTop = -1

  /** @type{ProgressbarComponent} */
  const component = {
    type: 'progress-bar',
    display: (left, top) => {
      displayLeft = left
      displayTop = top

      writeTo(displayLeft, displayTop, component.render())
    },
    render: () => {
      const percentage = Math.floor((current / total) * 100)
      const completed = Math.floor((current / total) * width)
      const remaining = width - completed
      const progressBar = fillChar.repeat(completed) + emptyChar.repeat(remaining)

      return `Progress: [${progressBar}] ${percentage}%\r`
    },
    pause: () => {},
    update: (progress) => {
      current = progress

      component.display(displayLeft, displayTop)

      if (current === total) {
        if (typeof config.onComplete === 'function') {
          config.onComplete()
        }
      }
    }
  }

  addEventListener(config.onUpdate, component.update)

  return component
}

export default progressBar
