import Sinon from 'sinon'
import test from 'ava'

import Element from '../src/components/Element.js'
import screen from '../src/common/screen.js'

test('should display the component', async t => {
  const left = 10
  const top = 10
  const renderedContent = ''

  const checkBox = new Element('input')

  const screenMock = Sinon.mock(screen)

  screenMock.expects('writeTo').once().withArgs(left, top, renderedContent)

  checkBox.display(left, top)

  t.is(checkBox.render(), renderedContent)
  t.is(checkBox.left, left)
  t.is(checkBox.top, top)

  screenMock.verify()
  screenMock.restore()
})
