import { OptionGroup, events } from '../src/index.js'

// Define your list options
const options = ['Munich', 'Barcelona', 'Paris', 'Roma']

const cities = new OptionGroup({
  options,
  type: 'radio',
  layout: 'vertical',
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

// console.log(cities.render())
cities.display(20, 1)

events.onData()
