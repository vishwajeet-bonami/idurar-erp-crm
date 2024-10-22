const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },

  Number: {
    type: String,
    unique: true,
  },

  Name: {
    type: String,
    required: true,
  },

  addressLine: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  pincode: {
    type: Number,
    required: true,
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    required: true,
  }
});

schema.plugin(require('mongoose-autopopulate'));

schema.pre('save', async function(next) {
  if (this.isNew) {
    const lastVendor = await mongoose.model('Vendor').findOne().sort({ Number: -1 }); // Sort by Number in descending order
    this.Number = lastVendor ? parseInt(lastVendor.Number) + 1 : 1; // Increment last Number, or start from 1
  }
  next();
});

module.exports = mongoose.model('Vendor', schema);

