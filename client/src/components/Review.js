import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Rating from 'react-rating';
import { addProudctReview } from '../actions/productActions';

const Review = ({ product }) => {
    const dispatch = useDispatch();
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');
    const sendreview = () => {
        if (localStorage.getItem('currentUser')) {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'))
            var alreadyreviewed;
            for (var i = 0; i < product.reviews.length; i++) {
                if (product.reviews[i].userid = currentUser._id) {
                    alreadyreviewed = true;
                }
            }

            if (alreadyreviewed) {
                alert('You Have Already Reviewed This Product !')
            }
            else {
                const review = {
                    rating: rating,
                    comment: comment
                }
                dispatch(addProudctReview(review, product._id))
            }
        }
        else {
            window.location.href = '/login'
        }

    }
    return (
        <div className="shadow p-3 mb-5 bg-white rounded ml-2 mr-3">
            <h2>Give Your Review</h2>
            <Rating
                style={{ color: "orange" }}
                initialRating={rating}
                emptySymbol="far fa-star fa-1x"
                fullSymbol="fa fa-star fa-1x"
                onChange={(e) => { setRating(e) }}
            />
            <input type="text" placeholder="Write comment" className="form-control mt-2" value={comment} onChange={(e) => { setComment(e.target.value) }} ></input>
            <button className="btn mt-3" onClick={sendreview}>Submit Review</button>
            <hr />
            <h2 className="mt-3">Latest Reviews</h2>

            {product.reviews && (product.reviews.map(review => {
                return <div>
                    <Rating
                        style={{ color: "orange" }}
                        initialRating={review.rating}
                        emptySymbol="far fa-star fa-1x"
                        fullSymbol="fa fa-star fa-1x"
                        readonly
                    />
                    <p>{review.comment}</p>
                    <p>By : {review.name}</p>
                    <hr />
                </div>
            }))}
        </div>
    )
}

export default Review
