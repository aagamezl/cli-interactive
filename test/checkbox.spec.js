import test from 'ava'

import { CheckBox } from '../src/index.js'

test('should define the correct type and element name', async t => {
  const checkBox = new CheckBox({
    label: 'Option 1',
    value: 'option1',
    checked: false
  })

  t.is(checkBox.type, 'checkbox')
  t.is(checkBox.elementName, 'input')
})

test('should render unchecked checkbox', async t => {
  const checkBox = new CheckBox({
    label: 'Option 1',
    value: 'option1',
    checked: false
  })

  t.is(checkBox.render(), '☐ Option 1')
})

test('should render checked checkbox', async t => {
  const checkBox = new CheckBox({
    label: 'Option 1',
    value: 'option1',
    checked: true
  })

  t.is(checkBox.render(), '☒ Option 1')
})

test('should set all internal properties', async t => {
  const checkBox = new CheckBox({
    label: 'Option 1',
    value: 'option1',
    name: 'OptionOne',
    checked: true
  })

  t.is(checkBox.label, 'Option 1')
  t.is(checkBox.value, 'option1')
  t.is(checkBox.name, 'OptionOne')
  t.true(checkBox.checked)
})
