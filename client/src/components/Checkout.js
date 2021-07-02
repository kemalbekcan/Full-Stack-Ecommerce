import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderActions';
import Loader from '../components/Loader';
import Success from '../components/Success';
import Error from '../components/Error';

const Checkout = ({ amount }) => {
    const dispatch = useDispatch();
    const orderstate = useSelector(state => state.placeOrderReducer)
    const { loading, success, error } = orderstate
    const tokenHandler = (token) => {
        dispatch(placeOrder(token, amount))
    }
    const validate = () => {
        if(!localStorage.getItem('currentUser')){
            window.location.href = '/login'
        }
    }
    return (
        <div>
            {loading && (<Loader />)}
            {success && (<Success success='Your Order Placed Succesfully !' />)}
            {error && (<Error error='Something Went Wrong !' />)}
            <StripeCheckout
                token={tokenHandler}
                amount={amount * 8}
                shippingAddress
                currency='TRY'
                stripeKey='pk_test_51J80bvLAnrLuHhqG42OrqAl35L3DK7qv1OaZIYweeh6ztEArjyyO8c7aLU8FNWl8sF7Vegu10mkT0rVpogK9rkU1000gk5aGXR'
            >
                <button className="btn my-3" onClick={validate}>PAY NOW</button>
            </StripeCheckout>
        </div>
    )
}

export default Checkout
