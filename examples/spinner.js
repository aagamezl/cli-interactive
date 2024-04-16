import { spinner } from '../src/index.js'

const loadSpinner = spinner({
  // left: 5,
  // top: 2,
  // type: 'braile-circle-worm',
  // type: 'arc',
  // type: 'braile-circle-hole',
  type: 'braille-bouncing-ball',
  // type: 'braille-coveyer-belt',
  // type: 'braille-up-down',
  // type: 'braile-bounce-worm',
  // type: 'braile-stacking',
  speed: 120
})

loadSpinner.start()

loadSpinner.display(2, 2)
