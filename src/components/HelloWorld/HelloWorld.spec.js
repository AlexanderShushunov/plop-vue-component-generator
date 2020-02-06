import Vuex from 'vuex'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import HelloWorld from './HelloWorld'
import { createStubStore } from './createStubStore'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = createStubStore()

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      localVue,
      store,
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
