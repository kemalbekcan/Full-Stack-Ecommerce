import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../actions/orderActions';
import Loader from '../components/Loader';
import Error from '../components/Error';

const Orderslist = () => {
    const dispatch = useDispatch();
    const getordersstate = useSelector(state => state.getAllOrdersReducer);
    const { loading, orders, error } = getordersstate;
    useEffect(() => {
        dispatch(getAllOrders())
    }, [])
    return (
        <div>
            {loading && (<Loader />)}
            {error && (<Error error='Someting Went Wrong !' />)}
            <h2>Orders List</h2>
            <table className="table table-bordered table-responsive-sm">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Email</th>
                        <th>User ID</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Transaction ID</th>
                    </tr>
                </thead>
                <tbody>
                    {orders && (orders.map(order => {
                        return <tr className="orders" onClick={() => { window.location.href = `/orderinfo/${order._id}` }}>
                            <td>{order._id}</td>
                            <td>{order.email}</td>
                            <td>{order.userid}</td>
                            <td>{order.orderAmount}</td>
                            <td>{order.createdAt.substring(0, 10)}</td>
                            <td>{order.transactionId}</td>
                        </tr>
                    }))}
                </tbody>
            </table>
        </div>
    )
}

export default Orderslist
