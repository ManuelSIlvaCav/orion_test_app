import {resolver} from '@orion-js/app'
import Stocks from 'app/components/Trades/collections/Stocks'

export default resolver({
  params: {
    name: {
      type: String,
    },
    abreviationCode: {
      type: String,
    },
    group: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    value: {
      type: Number,
    },
  },
  returns: Boolean,
  mutation: true,
  async resolve({name, group, abreviationCode, quantity, value}, viewer) {
    const stock = {name, group, abreviationCode, quantity, value}
    const result = await Stocks.insertOne(stock)
    if (!result) return false
    return true
  },
})
