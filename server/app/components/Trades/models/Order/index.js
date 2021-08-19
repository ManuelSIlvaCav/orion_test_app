import {Model} from '@orion-js/app'

export default new Model({
  name: 'Order',
  schema: () => require('./schema'),
  resolvers: () => require('./resolvers')
})
