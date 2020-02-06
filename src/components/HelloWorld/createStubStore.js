import Vuex from 'vuex'
import merge from 'lodash.merge'

export function createStubStore (storyOptions = {}) {
  const store = {
    modules: {
      user: {
        namespaced: true,
        state: {
          name: 'Ivan'
        }
      }
    }
  }

  const options = merge(store, storyOptions)

  return new Vuex.Store(options)
}
