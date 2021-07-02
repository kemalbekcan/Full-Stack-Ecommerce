import React, { useEffect } from 'react';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../actions/productActions'
import Loader from '../components/Loader';
import Error from '../components/Error';
import Filter from '../components/Filter';

const Homescreen = () => {

    const getAllProductsState = useSelector(state => state.getAllProductsReducer);

    const { loading, products, error } = getAllProductsState;

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getAllProducts())

    }, [])
    return (
        <div>
            <Filter />
            <div className="row justify-content-center mt-5 ml-2 mr-2">
                {loading ? (
                    <Loader />
                ) : error ? (<Error error='Something went wrong !' />) : products.map((product) => {
                    return <Product product={product} key={product._id} />
                })}
            </div>
        </div>
    )
}

export default Homescreen;