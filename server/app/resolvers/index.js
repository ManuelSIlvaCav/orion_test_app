import {resolversSchemas} from '@orion-js/graphql'
import Auth from './Auth'
import Users from './Users'
import Trades from '../components/Trades/resolvers'

export default {
  ...resolversSchemas,
  ...Auth,
  ...Users,
  ...Trades,
}
