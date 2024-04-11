/**
 * Represents a component object with a specific type and a render function.
 * @template T
 * @typedef {Object} Component
 * @property {string} type - The type of the component.
 * @property {(update?: T) => string} render - A render function that takes an update parameter of type T and returns the rendered content as a string.
 */

/**
 *
 * @param {Record<string, any>} config
 * @returns {Component<Record<string, any>>}
 */
const component = (config) => {
  return {
    type: 'component',
    render: (update) => {
      return ''
    }
  }
}

export default component
