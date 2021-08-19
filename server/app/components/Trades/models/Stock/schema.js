export default {
  _id: {
    type: 'ID',
  },
  name: {
    type: String,
  },
  abreviationCode: {
    type: String,
  },
  group: {
    type: String,
    allowedValues: ['NASDAQ', 'IPSA'],
  },
  quantity: {
    type: Number,
  },
  value: {
    type: Number,
  },
}
