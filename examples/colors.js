import { randomHexColor } from '../src/tools/colors.js'
import { format } from '../src/tools/index.js'

// Example usage
console.log(format.blue.bgYellow.italic.bold('Hello world!'))
console.log(format.yellow.bgGreen.bold.strikeThrough('Chained and underlined!'))
console.log(format.hex('#d7ff01').bold('Hello world!'))
console.log(format.hex(randomHexColor())('Hello world!'))

// Example usage:
console.log(randomHexColor())

// console.log(process.stdout.hasColors())
// console.log(process.stdout.getColorDepth())
