import { CheckBox } from '../src/index.js'

const checkBox = new CheckBox({
  label: 'Option 1',
  value: 'option1',
  name: 'options',
  checked: Math.random() < 0.5
})

// console.log(checkBox.render())
checkBox.display(10, 5)
