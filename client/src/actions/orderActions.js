import axios from 'axios'
export const placeOrder = (token, subtotal) => (dispatch, getState) => {

    const currentUser = getState().loginReducer.currentUser
    const demoItems = getState().cartReducer.cartItems

    const cartItems = new Array();

    for (var i = 0; i < demoItems.length; i++) {
        var item = {
            name: demoItems[0].name,
            quantity: demoItems[0].quantity,
            price: demoItems[0].price,
            _id: demoItems[0]._id
        }

        cartItems.push(item)
    }

    dispatch({ type: "PLACE_ORDER_REQUEST" })

    axios.post('/api/orders/placeorder', { token, subtotal, currentUser, cartItems })
        .then(res => {
            dispatch({ type: "PLACE_ORDER_SUCCESS" })
            console.log(res)
        })
        .catch(err => {
            dispatch({ type: "PLACE_ORDER_FAILED" })
        })

}

export const getOrdersUserById = () => (dispatch, getState) => {

    const userid = getState().loginReducer.currentUser._id

    dispatch({ type: "GET_ORDERSBYID_REQUEST" })

    axios.post('/api/orders/getordersbyuserid', { userid: userid })
        .then(res => {
            dispatch({ type: "GET_ORDERSBYUSERID_SUCCESS", payload: res.data })
            console.log(res.data)
        })
        .catch(err => {
            dispatch({ type: "GET_ORDERSBYUSERID_FAILED", payload: err })
        })

}

export const getOrdersById = (orderid) => (dispatch, getState) => {

    dispatch({ type: "GET_ORDERBYID_REQUEST" })

    axios.post('/api/orders/getorderbyid', { orderid: orderid })
        .then(res => {
            dispatch({ type: "GET_ORDERBYID_SUCCESS", payload: res.data })
            console.log(res.data)
        })
        .catch(err => {
            dispatch({ type: "GET_ORDERBYID_FAILED", payload: err })
        })

}

export const getAllOrders = () => (dispatch, getState) => {

    dispatch({ type: "GET_ALLORDERS_REQUEST" })

    axios.get('/api/orders/getallorders')
        .then(res => {
            dispatch({ type: "GET_ALLORDERS_SUCCESS", payload: res.data })
            console.log(res.data)
        })
        .catch(err => {
            dispatch({ type: "GET_ALLORDERS_FAILED", payload: err })
        })

}

