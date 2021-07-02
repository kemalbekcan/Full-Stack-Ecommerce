const { v4: uuidv4 } = require('uuid');
const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51J80bvLAnrLuHhqGSkdIxsJRoibDsobrYbJmN0HAvCTe7E4VMtKPOubYkpcvrofLLQjjZ6dUhMU1faO8A1wLeZgk00x4MCgDuc');
const Order = require('../models/orderModel');

router.post('/placeorder', async (req, res) => {

    const { token, cartItems, currentUser, subtotal } = req.body;

    const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
    })

    const payment = await stripe.charges.create({
        amount: subtotal * 8,
        currency: 'try',
        customer: customer.id,
        receipt_email: token.email
    }, {
        idempotencyKey: uuidv4()
    })

    if (payment) {
        const order = new Order({
            userid: currentUser._id,
            name: currentUser.name,
            email: currentUser.email,
            orderItems: cartItems,
            shippingAdres: {
                adress: token.card.address_line1,
                city: token.card.address_city,
                country: token.card.address_country,
                postalCode: token.card.address_zip
            },
            orderAmount: subtotal,
            transactionId: payment.source.id,
            isDelivered: false

        })
        order.save(err => {
            if (err) {
                return res.status(400).json({ message: 'Something went wrong !' })
            }
            else {
                res.send('Order Placed is Succesfully !')
            }
        })
    }
    else {
        res.status(400).json({ message: 'Payment failed !' })
    }

})

router.post('/getordersbyuserid', (req, res) => {

    const userid = req.body.userid;

    Order.find({ userid: userid }, (err, docs) => {
        if (err) {
            return res.status(400).json({ message: 'Something Went Wrong !' })
        }
        else {
            res.send(docs)
        }
    })

})

router.post('/getorderbyid', (req, res) => {

    const orderid = req.body.orderid;

    Order.find({ _id: orderid }, (err, docs) => {
        if (err) {
            return res.status(400).json({ message: 'Something Went Wrong !' })
        }
        else {
            res.send(docs[0])
        }
    })

})

router.get('/getallorders', (req, res) => {
    Order.find({}, (err, docs)=>{
        if(err){
            return res.status(400).json('Something Went Wrong !');
        }
        else{
            res.send(docs)
        }
    })
})

module.exports = router