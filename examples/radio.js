import { radio } from '../src/index.js'

// Define your list options
const options = ['Option 1', 'Option 2', 'Option 3']

const selectedOption = await radio({
  options,
  message: 'Select option (press spacebar to toggle selection, enter to confirm selection):'
})

console.log(`Selected option: ${options[selectedOption] ?? 'None'}`)
