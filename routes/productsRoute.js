const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

router.get('/getallproducts', (req, res) => {
    Product.find({}, (err, docs) => {
        if (!err) {
            return res.send(docs);
        }
        else {
            return res.status(400).json({ message: 'Something went wrong !' });
        }
    })
});

router.post('/getproductbyid', (req, res) => {
    Product.find({ _id: req.body.productid }, (err, docs) => {
        if (!err) {
            res.send(docs[0])
        }
        else {
            return res.status(400).json({
                message: 'Something went wrong !'
            })
        }
    })
})

router.post('/addreview', async (req, res) => {
    const { review, productid, currentUser } = req.body

    const product = await Product.findById({ _id: productid })

    const reviewmodel = {
        userid: currentUser._id,
        name: currentUser.name,
        rating: review.rating,
        comment: review.comment
    }

    product.reviews.push(reviewmodel);

    var rating = product.reviews.reduce((acc, x) => acc + x.rating, 0) / product.reviews.length

    product.rating = rating;

    product.save(err => {
        if (err) {
            return res.status(400).json({ message: 'Something Went Wrong !' })
        } else {
            res.send('Review Submited Successfully !')
        }
    })
})

router.post('/deleteproduct', (req, res) => {
    Product.findByIdAndRemove(req.body.productid, (err) => {
        if (err) {
            return res.status(400).json({ message: 'Something Went Wrong !' })
        }
        else {
            res.send('Product Deleted Successfully !')
        }
    })
})

router.post('/addproduct', (req, res) => {
    const { product } = req.body

    const productModel = new Product({
        name: product.name,
        price: product.price,
        countInStock: product.countInStock,
        image: product.image,
        category: product.category,
        description: product.description
    })
    productModel.save(err => {
        if (err) {
            return res.status(400).json({ message: 'Something Went Wrong !' })
        }
        else {
            res.send('Product Added Successfully !')
        }
    })
})

router.post('/updateproduct', (req, res) => {

    Product.findByIdAndUpdate(req.body.productid, {
        name: req.body.updatedproduct.name,
        price: req.body.updatedproduct.price,
        category: req.body.updatedproduct.category,
        description: req.body.updatedproduct.description,
        countInStock: req.body.updatedproduct.countInStock,
        image: req.body.updatedproduct.image,
    }, (err) => {
        if (err) {
            return res.status(400).json({ message: 'Something Went Wrong !' })
        }
        else {
            res.send('Product Updated Successfully !')
        }
    })

})

module.exports = router