import {Collection} from '@orion-js/app'
import Order from 'app/components/Trades/models/Order'

export default new Collection({
  name: 'orders',
  model: Order,
  indexes: [],
})
