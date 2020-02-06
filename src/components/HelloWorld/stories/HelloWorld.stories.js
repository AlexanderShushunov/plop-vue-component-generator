import { storiesOf } from '@storybook/vue'
import HelloWorldStory from './HelloWorldStory'
import { createStubStore } from '../createStubStore'

const store = createStubStore({ devtools: false })

storiesOf('components', module)
  .add('HelloWorld', () => ({
    store,
    components: { HelloWorldStory },
    template: '<HelloWorldStory />'
  }))
