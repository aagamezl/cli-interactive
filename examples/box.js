import { Box } from '../src/index.js'

const box = new Box({ title: 'My Box', width: 40, height: 10 })

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

box.appendChild(options.join('\n'))

// console.log(checkBox.render())
box.display(10, 5)
