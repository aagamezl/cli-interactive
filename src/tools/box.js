/**
 *
 * @param {number} top
 * @param {number} left
 * @param {number} height
 * @param {number} width
 * @returns {string}
 */
const box = (top, left, height, width) => {
  // Draw the top line
  let result = ' '.repeat(left) + '┌' + '─'.repeat(width - 2) + '┐\n'

  // Draw the vertical lines and spaces in between
  for (let i = 1; i < height - 1; i++) {
    result += ' '.repeat(left) + '│' + ' '.repeat(width - 2) + '│\n'
  }

  // Draw the bottom line
  result += ' '.repeat(left) + '└' + '─'.repeat(width - 2) + '┘\n'

  return result
}

export default box
