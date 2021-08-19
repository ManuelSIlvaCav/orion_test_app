import {resolver} from '@orion-js/app'
import Users from 'app/collections/Users'
import User from 'app/models/User'

export default resolver({
  params: {},
  returns: User,
  resolve(order, params, viewer) {
    return Users.findOne(order.user_id)
  },
})
