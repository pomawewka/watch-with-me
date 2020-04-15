const {Schema, model} = require('mongoose')

const schema = new Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  googleId: { type: String },
  facebookId: { type: String },
  discordId: { type: String },
  picture: { type: String },
  date: { type: Date, default: Date.now }
})

module.exports = model('User', schema);