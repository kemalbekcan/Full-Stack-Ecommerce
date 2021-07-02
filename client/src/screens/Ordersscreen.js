import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersUserById } from '../actions/orderActions';
import Loader from '../components/Loader';
import Error from '../components/Error';

const Ordersscreen = () => {

    const orderstate = useSelector(state => state.getOrdersByUserIdReducer);
    const { loading, error, orders } = orderstate;

    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
            dispatch(getOrdersUserById())
        }
        else {
            window.location.href = '/login'
        }
    }, [dispatch])
    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-9">
                    <h2>MY ORDERS</h2>
                    <table className="table table-striped table-responsive-sm">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Transaction ID</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading && (<Loader />)}
                            {orders && (orders.map(order => {
                                return <tr onClick={() => { window.location = `/orderinfo/${order._id}` }}>
                                    <td>{order._id}</td>
                                    <td>{order.orderAmount}</td>
                                    <td>{order.createdAt.substring(0, 10)}</td>
                                    <td>{order.transactionId}</td>
                                    <td>{order.isDelivered ? (<li>Delivered</li>) : (<li>Order Placed</li>)}</td>
                                </tr>
                            }))}
                            {error && (<Error error='Something Went Wrong !' />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Ordersscreen
