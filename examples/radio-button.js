import { RadioButton } from '../src/index.js'

// Define your list options
const options = ['Option 1', 'Option 2', 'Option 3']

for (const option of options) {
  const radioButton = new RadioButton({
    label: option,
    value: 'option1',
    name: 'options',
    checked: Math.random() < 0.5
  })

  console.log(radioButton.render())
}
