import { checkbox } from '../src/index.js'

// Define your list options
const options = ['Barcelona', 'Munich', 'Paris']

const selectedOptions = await checkbox({
  options,
  message: 'Select option(s) (press spacebar to toggle selection, enter to confirm selection):'
})

const selectedOptionNames = selectedOptions.length > 0
  ? selectedOptions.map(index => options[index])
  : ['None']

console.log(`Selected option(s): ${selectedOptionNames.join(', ')}`)
