import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../actions/productActions';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Success';

const Addproduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState();
    const [countinstock, setCountinstock] = useState();
    const [imageurl, setImageurl] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const addproductstate = useSelector(state => state.addProductReducer);
    const { loading, success, error } = addproductstate;

    const addproduct = (e) => {
        e.preventDefault();
        const product = {
            name: name,
            price: price,
            countInStock: countinstock,
            image: imageurl,
            category: category,
            description: description

        }
        dispatch(addProduct(product))
    }

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-8 shadow p-3 mb-5 bg-white rounded">
                    {loading && (<Loader />)}
                    {error && (<Error error='Something Went Wrong !' />)}
                    {success && (<Success success='Product Added Successfully !' />)}
                    <h2>Add Product</h2>
                    <form onSubmit={addproduct}>
                        <input type="text"
                            className="form-control mb-2 mr-sm-2"
                            placeholder="name"
                            required
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <input type="text"
                            className="form-control mb-2 mr-sm-2"
                            placeholder="price"
                            required
                            value={price}
                            onChange={(e) => { setPrice(e.target.value) }}
                        />
                        <input type="text"
                            className="form-control mb-2 mr-sm-2"
                            placeholder="stock"
                            required
                            value={countinstock}
                            onChange={(e) => { setCountinstock(e.target.value) }}
                        />
                        <input type="text"
                            className="form-control mb-2 mr-sm-2"
                            placeholder="image"
                            required
                            value={imageurl}
                            onChange={(e) => { setImageurl(e.target.value) }}
                        />
                        <input type="text"
                            className="form-control mb-2 mr-sm-2"
                            placeholder="category"
                            required
                            value={category}
                            onChange={(e) => { setCategory(e.target.value) }}
                        />
                        <input type="text"
                            className="form-control mb-2 mr-sm-2"
                            placeholder="description"
                            required
                            value={description}
                            onChange={(e) => { setDescription(e.target.value) }}
                        />
                        <button
                            className="btn"
                            type="submit"
                            style={{ float: 'left' }}
                        >
                            ADD PRODUCT
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addproduct
