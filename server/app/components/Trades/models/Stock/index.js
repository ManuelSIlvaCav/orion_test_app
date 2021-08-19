import {Model} from '@orion-js/app'

export default new Model({
  name: 'Stock',
  schema: () => require('./schema'),
  resolvers: () => require('./resolvers')
})
