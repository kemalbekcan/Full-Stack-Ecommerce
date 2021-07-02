import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Success';
import { getProductById, updateProduct } from '../actions/productActions';

const Editproduct = ({ match }) => {
    const dispatch = useDispatch();
    const productstate = useSelector(state => state.getProductByIdReducer)
    const { loading, product, error } = productstate;

    const updateproducts = useSelector(state => state.updateProductReducer)

    const { updateloading, updatesuccess, updateerror } = updateproducts;

    const [name, setName] = useState('');
    const [price, setPrice] = useState();
    const [countinstock, setCountinstock] = useState();
    const [imageurl, setImageurl] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (product) {
            if (product._id == match.params.productid) {
                setName(product.name);
                setPrice(product.price);
                setCountinstock(product.countInStock);
                setImageurl(product.image);
                setCategory(product.category);
                setDescription(product.description);
            } else {
                dispatch(getProductById(match.params.productid))
            }

        }
        else {
            dispatch(getProductById(match.params.productid))
        }

    }, [dispatch, product])

    const editproduct = (e) => {
        e.preventDefault();
        const updatedproduct = {
            name: name,
            price: price,
            description: description,
            countInStock: countinstock,
            category: category,
            image: imageurl

        }

        dispatch(updateProduct(match.params.productid, updatedproduct))

    }

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    {loading && (<Loader />)}
                    {error && (<Error error='Something Went Wrong !' />)}
                    {updateloading && (<Loader />)}
                    {updateerror && (<Error error='Something Went Wrong !' />)}
                    {updatesuccess && (<Success success='Product Updated Successfully !' />)}
                    <h2>Edit Products</h2>
                    {match.params.productid}
                    {product && (<div>
                        <form onSubmit={editproduct}>
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
                                UPDATE PRODUCT
                            </button>
                        </form>
                    </div>)}
                </div>
            </div>


        </div>
    )
}

export default Editproduct
