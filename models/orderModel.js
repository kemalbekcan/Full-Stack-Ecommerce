const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    userid: {
        type: String,
        require
    },
    name: {
        type: String,
        require
    },
    email: {
        type: String,
        require
    },
    orderItems: [{
        name: { type: String, require },
        quantity: { type: Number, require },
        _id: { type: String, require },
        price: { type: Number, require }
    }],
    shippingAdres: {
        adress: { type: String, require },
        city: { type: String, require },
        postalCode: { type: Number, require },
        country: { type: String, require }
    },
    orderAmount: {
        type: Number,
        require
    },
    transactionId: {
        type: String,
        require
    },
    isDelivered: {
        type: Boolean,
        require
    }
}, {
    timestamps: true
})

const Ordermodel = mongoose.model('orders', orderSchema)

module.exports = Ordermodel