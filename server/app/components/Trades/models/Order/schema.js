export default {
  _id: {
    type: 'ID',
  },
  user_id: {
    type: 'ID',
  },
  stock_id: {
    type: 'ID',
  },
  type: {
    type: String,
    allowedValues: ['BUY', 'SELL'],
  },
  amount: {
    type: Number,
  },
  status: {
    type: String,
    allowedValues: ['OPEN', 'PROCESSING', 'CLOSED', 'ERROR', 'ABORTED'],
  },
  createdAt: {
    type: Date,
  },
  closedAt: {
    type: Date,
    optional: true,
  },
}
