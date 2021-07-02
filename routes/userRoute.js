const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcrypt');


router.post('/register', (req, res) => {

    User.find({ email: req.body.email }, (err, docs) => {
        if (docs.length > 0) {
            return res.status(400).json({
                message: 'Something went wrong !'
            })
        }
        else {

            const newuser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            newuser.save(err => {
                if (!err) {
                    res.send('User Registration Success')
                }
                else {
                    res.send('Something went wrong !')
                }
            });
        }

        if (err) {
            return res.status(400).json({
                message: 'Something went wrong !'
            })
        }
    })



})

router.post('/login', (req, res) => {

    User.find({ email: req.body.email, password: req.body.password }, (err, docs) => {
        if (docs.length > 0) {
            const user = {
                name: docs[0].name,
                _id: docs[0]._id,
                email: docs[0].email
            }
            res.send(user)
        }
        else {
            return res.status(400).json({ message: 'Invalid Credentials !', desc: hash })
        }
    })
})

router.post('/update', (req, res) => {
    const { updateduser, userid } = req.body;

    User.findByIdAndUpdate({ _id: userid }, {
        name: updateduser.name,
        email: updateduser.email,
        password: updateduser.password
    }, (err) => {
        if (err) {
            return res.status(400).json({ message: 'Something Went Wrong !' })
        }
        else {
            res.send('User Details Updated Succesfully')
        }
    })
})

router.post('/getallusers', (req, res) => {

    User.find({}, (err, docs) => {
        if (err) {
            return res.status(400).json({ message: 'Something Wen Wrong !' })
        }
        else {
            res.send(docs)
        }
    })

})

router.post('/deleteuser', (req, res) => {
    User.findByIdAndRemove(req.body.userid, (err) => {
        if (err) {
            return res.status(400).json({ message: 'Something Went Wrong !' })
        }
        else {
            res.send('User Deleted Successfully !')
        }
    })
})

module.exports = router