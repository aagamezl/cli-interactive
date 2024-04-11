import { MARKERS } from './common/constants.js'

/** @typedef {import('./list.js').ChoiceConfig} ChoiceConfig */

/**
 *
 * @param {ChoiceConfig} config
 * @returns {import('./component.js').Component<ChoiceConfig>}
 */
const radio = (config) => {
  return {
    type: 'radio',
    render: (update) => {
      const updatedConfig = { ...config, ...update }

      return `${(updatedConfig.checked ? MARKERS.radio.filled : MARKERS.radio.empty)} ${updatedConfig.label}`
    }
  }
}

export default radio
