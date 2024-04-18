import { box, list } from '../src/index.js'

// Create a new box
const myBox = box({ title: 'My Box', width: 40, height: 10 })

// Set the content of the box
// const content = `
// Lorem ipsum dolor sit amet,
// consectetur adipiscing elit.
// Sed do eiusmod tempor incididunt
// ut labore et dolore magna aliqua.
// Ut enim ad minim veniam,
// quis nostrud exercitation ullamco
// laboris nisi ut aliquip ex ea
// commodo consequat.
// Duis aute irure dolor in
// reprehenderit in voluptate velit
// esse cillum dolore eu fugiat nulla
// pariatur. Excepteur sint occaecat
// cupidatat non proident, sunt in
// culpa qui officia deserunt mollit
// anim id est laborum.
// `

const options = [
  'Amman', // Jordan
  'Ankara', // Turkey
  'Astana', // Kazakhstan
  'Athens', // Greece
  'Baghdad', // Iraq
  'Baku', // Azerbaijan
  'Bangkok', // Thailand
  'Beijing', // China
  'Berlin', // Germany
  'Bern', // Switzerland
  'Brasília', // Brazil
  'Bucharest', // Romania
  'Budapest', // Hungary
  'Cairo', // Egypt
  'Canberra', // Australia
  'Caracas', // Venezuela
  'Colombo', // Sri Lanka
  'Dakar', // Senegal
  'Damascus', // Syria
  'Delhi', // India
  'Dhaka', // Bangladesh
  'Dublin', // Ireland
  'Hanoi', // Vietnam
  'Helsinki', // Finland
  'Islamabad', // Pakistan
  'Jakarta', // Indonesia
  'Kabul', // Afghanistan
  'Kampala', // Uganda
  'Kathmandu', // Nepal
  'Kiev', // Ukraine
  'Kingston', // Jamaica
  'Lima', // Peru
  'Lisbon', // Portugal
  'London', // United Kingdom
  'Madrid', // Spain
  'Manila', // Philippines
  'Mexico City', // Mexico
  'Moscow', // Russia
  'Nairobi', // Kenya
  'New Delhi', // India
  'Oslo', // Norway
  'Ottawa', // Canada
  'Paris', // France
  'Riyadh', // Saudi Arabia
  'Rome', // Italy
  'Seoul', // South Korea
  'Stockholm', // Sweden
  'Tokyo', // Japan
  'Warsaw' // Poland
]

const cities = list({
  options,
  type: 'radio',
  layout: 'vertical',
  left: 1,
  top: 1,
  onSelect: (selectedOption) => {
    if (Array.isArray(selectedOption)) {
      const selectedOptionNames = selectedOption.length > 0
        ? selectedOption.map(index => options[index])
        : ['None']

      console.log(`\nSelected option(s): ${selectedOptionNames.join(', ')}`)

      return
    }

    console.log(`\nSelected option: ${options[selectedOption] ?? 'None'}`)
  }
})

// myBox.setContent([cities])
// myBox.setContent(content)
myBox.appendChild(cities)

// Display the box
myBox.display(10, 5)

// setInterval(() => {
//   // Scroll down
//   myBox.scrollDown()
// }, 200)
