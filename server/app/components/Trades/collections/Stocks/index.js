import {Collection} from '@orion-js/app'
import Stock from 'app/components/Trades/models/Stock'

export default new Collection({
  name: 'stocks',
  model: Stock,
  indexes: [{keys: {abreviationCode: 1}, options: {unique: true}}],
})
