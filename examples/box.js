import { box } from '../src/index.js'

const area = box({
  height: 10,
  width: 20,
  // title: 'Licenses'
  children: [
    { render: () => 'some label' },
    { render: () => 'some other label' }
  ]
})

console.log(area.render())
