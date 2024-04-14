import { cursorTo } from 'node:readline'

/**
 *
 * @param {number} [left=0]
 * @param {number} [top=0]
 * @param {string} [message='']
 * @returns {void}
 */
const writeTo = (left = 0, top = 0, message = '') => {
  cursorTo(process.stdout, left, top)

  process.stdout.write(message)
}

export default writeTo
