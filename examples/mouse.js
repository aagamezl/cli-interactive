// // Based on:
// //    http://groups.google.com/group/nodejs-dev/browse_thread/thread/a0c23008029e5fa7

// import { cursorTo } from 'node:readline'
// import { dispatchEvent } from '../src/tools/common/events.js'

// process.stdin.resume()

// process.stdin.on('data', function (b) {
//   const s = b.toString('utf8')
//   if (s === '\u0003') {
//     console.error('Ctrl+C')
//     process.stdin.pause()
//   } else if (/^\u001b\[M/.test(s)) {
//     // mouse event
//     const modifier = s.charCodeAt(3)
//     const key = {}
//     key.shift = !!(modifier & 4)
//     key.meta = !!(modifier & 8)
//     key.ctrl = !!(modifier & 16)
//     key.x = s.charCodeAt(4) - 32
//     key.y = s.charCodeAt(5) - 32
//     key.button = ''
//     key.sequence = s
//     key.name = ''
//     // key.buf = Buffer(key.sequence)

//     if ((modifier & 96) === 96) {
//       key.name = 'scroll'
//       key.button = modifier & 1 ? 'down' : 'up'

//       dispatchEvent('MOUSE:SCROLL', key)
//     } else {
//       key.name = modifier & 64 ? 'move' : 'click'
//       switch (modifier & 3) {
//         case 0: key.button = 'left'; break
//         case 1: key.button = 'middle'; break
//         case 2: key.button = 'right'; break
//         case 3: key.button = 'none'; break
//         default: return
//       }

//       const EVENT = `MOUSE:${key.name}`.toUpperCase()

//       dispatchEvent(EVENT, key)
//     }

//     // cursorTo(process.stdout, 0, 0)
//     // console.error(key)
//     // process.stdout.write(key)
//   } else {
//     // something else...
//     // console.error(0, s, b)
//   }
// })

// // Enable "raw mode"
// if (process.stdin.setRawMode) {
//   process.stdin.setRawMode(true)
// } else {
//   require('tty').setRawMode(true)
// }

// // Enable "mouse reporting"
// process.stdout.write('\x1b[?1005h')
// process.stdout.write('\x1b[?1003h')

// process.on('exit', function () {
//   // don't forget to turn off mouse reporting
//   process.stdout.write('\x1b[?1005l')
//   process.stdout.write('\x1b[?1003l')
// })
