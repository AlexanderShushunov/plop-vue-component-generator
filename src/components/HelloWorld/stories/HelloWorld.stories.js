import { storiesOf } from '@storybook/vue'
import HelloWorldStory from './HelloWorldStory'

storiesOf('components', module)
  .add('HelloWorld', () => ({
    components: { HelloWorldStory },
    template: '<HelloWorldStory />'
  }))
