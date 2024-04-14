import { addEventListener, addOnceEventListener, dispatchEvent } from '../src/tools/common/events.js'

addEventListener('DOWNLOAD:UPDATE', (data) => {
  console.log(data)
})

dispatchEvent('DOWNLOAD:UPDATE', { foo: 'bar' })

addOnceEventListener('DOWNLOAD:END', (data) => {
  console.log(data)
})

dispatchEvent('DOWNLOAD:END', { event: 'DOWNLOAD:END' })
dispatchEvent('DOWNLOAD:END', { event: 'DOWNLOAD:END' })
