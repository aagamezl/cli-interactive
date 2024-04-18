// Based on: http://groups.google.com/group/nodejs-dev/browse_thread/thread/a0c23008029e5fa7
import { dispatchEvent } from './common/events.js'
import { KEYBOARD_KEYS } from './common/constants.js'

let isActive = false

const activateMouse = () => {
  if (isActive === true) {
    return
  }

  isActive = true

  process.stdin.resume()

  process.stdin.on('data', (b) => {
    const s = b.toString('utf8')
    if (s === '\u0003') {
      console.error('Ctrl+C')
      process.stdin.pause()
    } else if (/^\u001b\[M/.test(s)) {  // eslint-disable-line
      // mouse event
      const modifier = s.charCodeAt(3)
      const key = {
        shift: !!(modifier & 4),
        meta: !!(modifier & 8),
        ctrl: !!(modifier & 16),
        x: s.charCodeAt(4) - 32,
        y: s.charCodeAt(5) - 32,
        button: '',
        sequence: s,
        buf: Buffer.from(s),
        name: ''
      }

      if ((modifier & 96) === 96) {
        key.name = 'scroll'
        key.button = modifier & 1 ? 'down' : 'up'

        dispatchEvent('MOUSE:SCROLL', key)
      } else {
        key.name = modifier & 64 ? 'move' : 'click'

        switch (modifier & 3) {
          case 0: key.button = 'left'; break
          case 1: key.button = 'middle'; break
          case 2: key.button = 'right'; break
          case 3: key.button = 'none'; break
          default: return
        }

        const EVENT = `MOUSE:${key.name}`.toUpperCase()

        dispatchEvent(EVENT, key)
      }
    } else {
      const key = {}

      // console.log(`[${b.toString()}]`)

      switch (b.toString()) {
        case '\u001b': {
          key.name = KEYBOARD_KEYS.ESCAPE
          break
        }

        case '\r': {
          key.name = KEYBOARD_KEYS.ENTER
          break
        }

        case ' ': {
          key.name = KEYBOARD_KEYS.SPACE
          break
        }

        case '\u001b[A': {
          key.name = KEYBOARD_KEYS.UP
          break
        }

        case '\u001b[B': {
          key.name = KEYBOARD_KEYS.DOWN
          break
        }

        case '\u001b[C': {
          key.name = KEYBOARD_KEYS.RIGHT
          break
        }

        case '\u001b[D': {
          key.name = KEYBOARD_KEYS.LEFT
          break
        }

        default: {
          key.name = b.toString()
        }
      }

      dispatchEvent('KEYPRESS', key)
    }
  })

  // Enable "raw mode"
  process.stdin.setRawMode(true)

  // Enable "mouse reporting"
  process.stdout.write('\x1b[?1005h')
  process.stdout.write('\x1b[?1003h')

  process.on('exit', function () {
    // don't forget to turn off mouse reporting
    process.stdout.write('\x1b[?1005l')
    process.stdout.write('\x1b[?1003l')
  })
}

export default activateMouse
