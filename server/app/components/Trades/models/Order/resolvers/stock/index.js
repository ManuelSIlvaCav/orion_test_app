import {resolver} from '@orion-js/app'
import Stocks from 'app/components/Trades/collections/Stocks'
import Stock from 'app/components/Trades/models/Stock'

export default resolver({
  params: {},
  returns: Stock,
  resolve(order, params, viewer) {
    return Stocks.findOne(order.stock_id)
  },
})
