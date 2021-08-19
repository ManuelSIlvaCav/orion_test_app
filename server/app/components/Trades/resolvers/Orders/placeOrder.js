import {resolver} from '@orion-js/app'
import Orders from 'app/components/Trades/collections/Orders'
import Order from 'app/components/Trades/models/Order'

export default resolver({
  params: Order.clone({
    pickFields: ['user_id', 'stock_id', 'type', 'amount'],
  }),
  returns: Boolean,
  mutation: true,
  async resolve(params, viewer) {
    const {user_id, stock_id, type, amount} = params
    const placedOrder = {
      user_id,
      stock_id,
      type,
      amount,
      status: 'OPEN',
      createdAt: Date.now(),
    }
    const result = await Orders.insertOne(placedOrder)
    if (!result) return false
    return true
  },
})
