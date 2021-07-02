import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, deleteProduct } from '../actions/productActions';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { Link } from 'react-router-dom';

const Productslist = () => {
    const dispatch = useDispatch();
    const getallproductsstate = useSelector(state => state.getAllProductsReducer);
    const { loading, products, error } = getallproductsstate;
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    return (
        <div>
            <h2>Products List</h2>
            <table className="table table-bordered table-responsive-sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Id</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {loading && (<Loader />)}
                    {error && (<Error error='Something Went Wrong !' />)}
                    {products && (products.map(product => {
                        return <tr>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.countInStock}</td>
                            <td>{product._id}</td>
                            <td>
                                <i className="far fa-trash-alt" style={{ marginRight: '10px', cursor: 'pointer' }} onClick={() => { dispatch(deleteProduct(product._id)) }}></i>
                                <Link to={`/admin/editproduct/${product._id}`} ><i className="fas fa-edit"></i></Link>
                            </td>
                        </tr>
                    }))}
                </tbody>
            </table>


        </div>
    )
}

export default Productslist
