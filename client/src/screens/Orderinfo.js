import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersById } from '../actions/orderActions';
import Error from '../components/Error';
import Loader from '../components/Loader';

const Orderinfo = ({ match }) => {
    const dispatch = useDispatch();
    const orderstate = useSelector(state => state.getOrderByIdReducer);
    const { order, loading, error } = orderstate;
    useEffect(() => {
        dispatch(getOrdersById(match.params.orderid))
    }, [dispatch])
    return (
        <div>
            {error && (<Error error='Something Went Wrong !' />)}
            {loading && (<Loader />)}
            {order && (<div>
                <div className="row justify-content-center">
                    <div className="col-md-5 card">
                        <h2>Items In Your Order</h2>
                        <hr />
                        {order.orderItems.map(item => {
                            return <div className="text-start">
                                <h3>{item.name}</h3>
                                <h3>Quantity : {item.quantity}</h3>
                                <h3>Price : {item.quantity} * {item.price} = {item.quantity * item.price}</h3>
                                <hr />
                            </div>
                        })}
                    </div>
                    <div className="col-md-5 card text-end">
                        <h2 className="text-center">Order Details</h2>
                        <hr />
                        <h3>Order ID : {order._id}</h3>
                        <h3>Total Amount : {order.orderAmount}</h3>
                        <h3>Date Of Order : {order.createdAt.substring(0,10)}</h3>
                        <h3>Transaction ID : {order.transactionId}</h3>
                        {order.isDelivered ? (<h3>Order Delivered</h3>) : (<h3>Order Placed</h3>)}
                        <hr />
                        <div className="text-end">
                            <h2>Shipping Details</h2>
                            <hr />
                            <h3>Adress : <b>{order.shippingAdres.adress}</b></h3>
                            <h3>City : <b>{order.shippingAdres.city}</b></h3>
                            <h3>Country : <b>{order.shippingAdres.country}</b></h3>
                            <h3>Postal Code : <b>{order.shippingAdres.postalCode}</b></h3>
                        </div>
                    </div>
                </div>
            </div>)}
            <hr />
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h2 className="text-start">Replacement Conditions</h2>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Orderinfo
