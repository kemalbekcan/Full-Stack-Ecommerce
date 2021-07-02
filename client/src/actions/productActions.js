import axios from 'axios';

export const getAllProducts = () => dispatch => {

    dispatch({ type: "GET_PRODUCTS_REQUEST" })

    axios.get('/api/products/getallproducts')
        .then(res => {
            console.log(res);
            dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: res.data })
        }).catch(err => {
            console.log(err);
            dispatch({ type: "GET_PRODUCTS_FAILED", payload: err })
        })
}

export const getProductById = (productid) => dispatch => {

    dispatch({ type: "GET_PRODUCTBYID_REQUEST" })

    axios.post('/api/products/getproductbyid', { productid })
        .then(res => {
            console.log(res);
            dispatch({ type: "GET_PRODUCTBYID_SUCCESS", payload: res.data })
        }).catch(err => {
            console.log(err);
            dispatch({ type: "GET_PRODUCTBYID_FAILED", payload: err })
        })
}

export const filterProducts = (searchkey, sort, category) => dispatch => {
    dispatch({ type: "GET_PRODUCTS_REQUEST" });
    var filteredproducts;
    axios.get('/api/products/getallproducts')
        .then(res => {

            filteredproducts = res.data

            if (searchkey) {
                filteredproducts = res.data.filter(product => { return product.name.toLowerCase().includes(searchkey) })
            }
            if (sort !== 'popular') {
                if (sort == 'htl') {
                    filteredproducts = res.data.sort((a, b) => {
                        return -a.price + b.price
                    })
                }
                else {
                    filteredproducts = res.data.sort((a, b) => {
                        return a.price - b.price
                    })
                }
            }
            if (category !== 'all') {
                filteredproducts = res.data.filter(product => { return product.category.toLowerCase().includes(category) })
            }

            dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: filteredproducts })
        })
        .catch(err => {
            dispatch({ type: "GET_PRODUCTS_FAILED" })
        })
}

export const addProudctReview = (review, productid) => (dispatch, getState) => {

    dispatch({ type: "ADD_PRODUCT_REVIEW_REQUEST" })

    const currentUser = getState().loginReducer.currentUser

    axios.post('/api/products/addreview', { review, productid, currentUser })
        .then(res => {
            console.log(res)
            dispatch({ type: "ADD_PRODUCT_REVIEW_SUCCESS" })
            alert('Your Review Submited Successfully !')
            window.location.reload();
        })
        .catch(err => {
            dispatch({ type: "ADD_PRODUCT_REVIEW_FAILED" })
        })

}

export const deleteProduct = (productid) => dispatch => {

    dispatch({ type: "DELETE_PRODUCT_REQUEST" })

    axios.post('/api/products/deleteproduct', { productid })
        .then(res => {
            dispatch({ type: "DELETE_PRODUCT_SUCCESS", payload: res.data })
            alert('Product Deleted Successfully !')
            window.location.reload()
        })
        .catch(err => {
            dispatch({ type: "DELETE_PRODUCT_FAILED", payload: err })
        })
}

export const addProduct = (product) => dispatch => {

    dispatch({ type: "ADD_PRODUCT_REQUEST" })

    axios.post('/api/products/addproduct', { product })
        .then(res => {
            dispatch({ type: "ADD_PRODUCT_SUCCESS", payload: res.data })
            console.log(res)
            window.location.reload()
        })
        .catch(err => {
            dispatch({ type: "ADD_PRODUCT_FAILED", payload: err })
        })
}

export const updateProduct = (productid, updatedproduct) => dispatch => {

    dispatch({ type: "UPDATE_PRODUCT_REQUEST" })

    axios.post('/api/products/updateproduct', { productid, updatedproduct })
        .then(res => {
            dispatch({ type: "UPDATE_PRODUCT_SUCCESS", payload: res.data })
            console.log(res)
            window.location.href= '/admin/productslist'
        })
        .catch(err => {
            dispatch({ type: "UPDATE_PRODUCT_FAILED", payload: err })
        })
}