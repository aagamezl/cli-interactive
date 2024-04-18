/**
 * Common structure for checkbox and radio markers.
 * @typedef {Object} Marker
 * @property {string} empty - Character representing an empty marker.
 * @property {string} filled - Character representing a filled marker.
 */

/**
 * Marker object containing characters for checkbox and radio markers.
 * @typedef {Object} Markers
 * @property {Marker} checkbox - Marker characters for checkboxes.
 * @property {Marker} radio - Marker characters for radio buttons.
 */

export const POINTER = '\u276F'

export const KEYBOARD_KEYS = {
  DOWN: 'down',
  ENTER: 'enter',
  ESCAPE: 'escape',
  LEFT: 'left',
  RIGHT: 'right',
  SPACE: 'space',
  UP: 'up'
}

export const MARKERS = {
  checkbox: {
    empty: '\u2610',
    filled: '\u2612'
  },
  radio: {
    empty: '\u25CB',
    filled: '\u25C9'
  }
}

export const LIST_LAYOUT = {
  horizontal: {
    glue: ' ',
    forward: KEYBOARD_KEYS.RIGHT,
    backward: KEYBOARD_KEYS.LEFT
  },
  vertical: {
    glue: '\n',
    forward: KEYBOARD_KEYS.DOWN,
    backward: KEYBOARD_KEYS.UP
  }
}

// const LINE = {
//   HORIZONTAL: '─',
//   VERTICAL: '│',
//   HORIZONTAL_DOUBLE: '═',
//   VERTICAL_DOUBLE: '║'
// }

// const BOX = {
//   TOP_LEFT: '┌─',
//   TOP_RIGHT: '─┐',
//   BOTTOM_LEFT: '└─',
//   BOTTOM_RIGHT: '─┘',
//   TOP_LEFT_ROUNDED: '╭─',
//   TOP_RIGHT_ROUNDED: '─╮',
//   BOTTOM_LEFT_ROUNDED: '╰─',
//   BOTTOM_RIGHT_ROUNDED: '─╯'
// }

// https://en.wikipedia.org/wiki/List_of_Unicode_characters#Box_Drawing
export const BOX_DRAWING = {
  HORIZONTAL: {
    LIGHT: '─',
    HEAVY: '━',
    DOUBLE: '═',
    LIGHT_DOUBLE_DASH: '╌',
    HEAVY_DOUBLE_DASH: '╍',
    LIGHT_TRIPLE_DASH: '┄',
    HEAVY_TRIPLE_DASH: '┅',
    LIGHT_QUADRUPLE_DASH: '┈',
    HEAVY_QUADRUPLE_DASH: '┉'
  },
  UPPER_LEFT: {
    LIGHT: '┌',
    HEAVY: '┏',
    DOUBLE: '╔'
  },
  UPPER_RIGHT: {
    LIGHT: '┐',
    HEAVY: '┓',
    DOUBLE: '╗'
  },
  LOWER_LEFT: {
    LIGHT: '└',
    HEAVY: '┗',
    DOUBLE: '╚'
  },
  LOWER_RIGHT: {
    LIGHT: '┘',
    HEAVY: '┛',
    DOUBLE: '╝'
  },
  VERTICAL: {
    LIGHT: '│',
    HEAVY: '║',
    DOUBLE: '╣',
    LIGHT_DOUBLE_DASH: '╎',
    HEAVY_DOUBLE_DASH: '╏',
    LIGHT_TRIPLE_DASH: '┆',
    HEAVY_TRIPLE_DASH: '┇',
    LIGHT_QUADRUPLE_DASH: '┊',
    HEAVY_QUADRUPLE_DASH: '┋'
  },
  ARC: {
    UPPER_LEFT: '╭',
    UPPER_RIGHT: '╮',
    LOWER_LEFT: '╰',
    LOWER_RIGHT: '╯'
  },
  DIAGONAL: {
    UPPER_RIGHT_TO_LOWER_LEFT: '╲',
    UPPER_LEFT_TO_LOWER_RIGHT: '╱',
    CROSS: '╳'
  },
  TEE: {
    LIGHT: {
      VERTICAL_RIGHT: '┤',
      VERTICAL_LEFT: '├',
      DOWN_HORIZONTAl: '┬',
      UP_HORIZONTAl: '┴',
      VERTICAL_HORIZONTAL: '┼'
    },
    HEAVY: {
      VERTICAL_RIGHT: '┣',
      VERTICAL_LEFT: '┫',
      DOWN_HORIZONTAl: '┳',
      UP_HORIZONTAl: '┻',
      VERTICAL_HORIZONTAL: '╋'
    },
    DOUBLE: {
      VERTICAL_RIGHT: '╠',
      VERTICAL_LEFT: '╣',
      DOWN_HORIZONTAl: '╦',
      UP_HORIZONTAl: '╩',
      VERTICAL_HORIZONTAL: '╬'
    }
  }
}

// https://en.wikipedia.org/wiki/List_of_Unicode_characters#Block_Elements
export const BLOCK_ELEMENTS = {
  UPPER_HALF: '▀', // U+2580
  LOWER_ONE_EIGHTH: '▁', // U+2581
  LOWER_ONE_QUARTER: '▂', // U+2582
  LOWER_THREE_EIGHTHS: '▃', // U+2583
  LOWER_HALF: '▄', // U+2584
  LOWER_FIVE_EIGHTHS: '▅', // U+2585
  LOWER_THREE_QUARTERS: '▆', // U+2586
  LOWER_SEVEN_EIGHTHS: '▇', // U+2587
  FULL_BLOCK: '█', // U+2588
  LEFT_SEVEN_EIGHTHS: '▉', // U+2589
  LEFT_THREE_QUARTERS: '▊', // U+258A
  LEFT_FIVE_EIGHTHS: '▋', // U+258B
  LEFT_HALF: '▌', // U+258C
  LEFT_THREE_EIGHTHS: '▍', // U+258D
  LEFT_ONE_QUARTER: '▎', // U+258E
  LEFT_ONE_EIGHTH: '▏', // U+258F
  RIGHT_HALF: '▐', // U+2590
  LIGHT_SHADE: '░', // U+2591
  MEDIUM_SHADE: '▒', // U+2592
  DARK_SHADE: '▓', // U+2593
  UPPER_ONE_EIGHTH: '▔', // U+2594
  RIGHT_ONE_EIGHTH: '▕', // U+2595
  QUADRANT_LOWER_LEFT: '▖', // U+2596
  QUADRANT_LOWER_RIGHT: '▗', // U+2597
  QUADRANT_UPPER_LEFT: '▘', // U+2598
  QUADRANT_UPPER_LEFT_LOWER_LEFT_LOWER_RIGHT: '▙', // U+2599
  QUADRANT_UPPER_LEFT_LOWER_RIGHT: '▚', // U+259A
  QUADRANT_UPPER_LEFT_UPPER_RIGHT_LOWER_LEFT: '▛', // U+259B
  QUADRANT_UPPER_LEFT_UPPER_RIGHT_LOWER_RIGHT: '▜', // U+259C
  QUADRANT_UPPER_RIGHT: '▝', // U+259D
  QUADRANT_UPPER_RIGHT_LOWER_LEFT: '▞', // U+259E
  QUADRANT_UPPER_RIGHT_LOWER_LEFT_LOWER_RIGHT: '▟' // U+259F
}

export const ARROWS = {
  UP: '▲',
  DOWN: '▼',
  LEFT: '◀',
  RIGHT: '▶'
}
