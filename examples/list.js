import { list } from '../src/index.js'

// Define your list options
const options = ['Barcelona', 'Munich', 'Paris']

const selectedOption = await list({
  options,
  message: 'Select option(s) (press spacebar to toggle selection, enter to confirm selection):',
  type: 'radio'
})

console.log(`Selected option: ${options[selectedOption] ?? 'None'}`)

const selectedOptions = await list({
  options,
  message: 'Select option(s) (press spacebar to toggle selection, enter to confirm selection):',
  type: 'checkbox'
})

const selectedOptionNames = selectedOptions.length > 0
  ? selectedOptions.map(index => options[index])
  : ['None']

console.log(`Selected option(s): ${selectedOptionNames.join(', ')}`)
