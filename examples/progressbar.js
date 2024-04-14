// import EventEmitter from 'node:events'

import { progressBar } from '../src/index.js'
import { dispatchEvent } from '../src/tools/common/events.js'

// class ProgressBar extends EventEmitter {
//   constructor (total) {
//     super()
//     this.total = total
//     this.current = 0
//     this.width = 50
//     this.fillChar = '█'
//     this.emptyChar = '░'
//   }

//   update (progress) {
//     this.current = progress
//     this.render()
//   }

//   render () {
//     const percentage = Math.floor((this.current / this.total) * 100)
//     const completed = Math.floor((this.current / this.total) * this.width)
//     const remaining = this.width - completed
//     const progressBar = this.fillChar.repeat(completed) + this.emptyChar.repeat(remaining)
//     process.stdout.write(`Progress: [${progressBar}] ${percentage}%\r`)

//     if (this.current === this.total) {
//       clearInterval(interval)

//       process.stdout.write('\n')
//       this.emit('complete')
//     }
//   }
// }

// // Example usage:
// const progressBar = new ProgressBar(100)

const download = progressBar({
  total: 100,
  onUpdate: 'DOWNLOAD:UPDATE',
  onComplete: () => {
    console.log('\nProgress complete!')
  }
})

let current = 0
download.display(10, 5)

// Simulate progress updates
const interval = setInterval(() => {
  // download.update(current += 2)

  dispatchEvent('DOWNLOAD:UPDATE', current += 1)

  if (current === 100) {
    clearInterval(interval)
  }
}, 100)
