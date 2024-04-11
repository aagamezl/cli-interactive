import { question } from '../src/index.js'

const answer = await question('What is your name? ')

console.log(`Hi ${answer}`)
