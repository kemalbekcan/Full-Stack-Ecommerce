import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const Product = ({ product }) => {
    return (
        <div className="col-md-3 m-3 p-3 card text-start shadow p-3 mb-5 bg-white rounded">
            <div>
                <Link to={`product/${product._id}`}>
                    <div className="text-center">
                        <img src={product.image} className="img-fluid" alt="products" />
                    </div>
                    <h1>{product.name}</h1>
                    <Rating
                        style={{ color: "orange" }}
                        initialRating={product.rating}
                        emptySymbol="far fa-star fa-1x"
                        fullSymbol="fa fa-star fa-1x"
                        readonly="true"
                    />
                    <h1>Price : {product.price}</h1>
                </Link>
            </div>
        </div>
    )
}

export default Product
