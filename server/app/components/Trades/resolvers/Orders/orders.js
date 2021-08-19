import {paginatedResolver} from '@orion-js/app'
import Orders from 'app/components/Trades/collections/Orders'
import Order from 'app/components/Trades/models/Order'

export default paginatedResolver({
  params: {},
  returns: Order,
  async getCursor(params, viewer) {
    return Orders.find()
  },
})
