const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var dbconnection = require('./db')
var productsRoute = require('./routes/productsRoute')
var userRoute = require('./routes/userRoute')
var orderRoute = require('./routes/orderRoute')

app.use(bodyParser.json());

app.use('/api/products', productsRoute)

app.use('/api/users', userRoute)

app.use('/api/orders', orderRoute)

app.get("/", (req, res) => {
    res.json({
        name: 'kemal',
        surname: 'bekcan',
        stat: "This is from backend"
    })
});

const port = 5000;

app.listen(port, () => console.log("Server is running on 5000"));