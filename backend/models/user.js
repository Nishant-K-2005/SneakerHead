const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // bcrypt hashed
  role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
  isVerified: { type: Boolean, default: false },
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String
  },
  cart: [{
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, default: 1 }
  }],
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
