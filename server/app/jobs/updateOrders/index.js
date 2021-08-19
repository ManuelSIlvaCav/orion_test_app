import {job} from '@orion-js/jobs'
import Orders from 'app/components/Trades/collections/Orders'

export default job({
  type: 'recurrent',
  runEvery: 1000,
  async run(params) {
    await Orders.updateMany(
      {status: 'OPEN'},
      {
        $set: {
          status: 'PROCESSING',
        },
      }
    )
  },
})
