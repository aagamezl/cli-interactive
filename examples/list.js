import { list } from '../src/index.js'

// Define your list options
const options = ['Munich', 'Barcelona', 'Paris', 'Roma']

const cities = list({
  options,
  type: 'radio',
  layout: 'horizontal',
  left: 20,
  top: 1,
  onSelect: (selectedOption) => {
    if (Array.isArray(selectedOption)) {
      const selectedOptionNames = selectedOption.length > 0
        ? selectedOption.map(index => options[index])
        : ['None']

      console.log(`Selected option(s): ${selectedOptionNames.join(', ')}`)

      return
    }

    console.log(`Selected option: ${options[selectedOption] ?? 'None'}`)
  }
})

cities.render()
