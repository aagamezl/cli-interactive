import test from 'ava'

import { RadioButton } from '../src/index.js'

test('should define the correct type and element name', async t => {
  const radioButton = new RadioButton({
    label: 'Option 1',
    value: 'option1',
    checked: false
  })

  t.is(radioButton.type, 'radio')
  t.is(radioButton.elementName, 'input')
})

test('should render unchecked', async t => {
  const radioButton = new RadioButton({
    label: 'Option 1',
    value: 'option1',
    checked: false
  })

  t.is(radioButton.render(), '○ Option 1')
})

test('should render checked', async t => {
  const radioButton = new RadioButton({
    label: 'Option 1',
    value: 'option1',
    checked: true
  })

  t.is(radioButton.render(), '◉ Option 1')
})

test('should set all internal properties', async t => {
  const radioButton = new RadioButton({
    label: 'Option 1',
    value: 'option1',
    name: 'OptionOne',
    checked: true
  })

  t.is(radioButton.label, 'Option 1')
  t.is(radioButton.value, 'option1')
  t.is(radioButton.name, 'OptionOne')
  t.true(radioButton.checked)
})
