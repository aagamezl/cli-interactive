import { MARKERS } from './common/constants.js'

/** @typedef {import('./list.js').ChoiceConfig} ChoiceConfig */

/**
 *
 * @param {ChoiceConfig} config
 * @returns {import('./component.js').Component<ChoiceConfig>}
 */
const checkbox = (config) => {
  return {
    type: 'checkbox',
    render: (update) => {
      const updatedConfig = { ...config, ...update }

      return `${(updatedConfig.checked ? MARKERS.checkbox.filled : MARKERS.checkbox.empty)} ${updatedConfig.label}`
    }
  }
}

export default checkbox
