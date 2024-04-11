import { box } from '../src/index.js'

const area = box({
  left: 15,
  top: 0,
  height: 10,
  width: 20
})

console.log(area.render())
