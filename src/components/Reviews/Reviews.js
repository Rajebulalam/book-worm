import React from 'react';
import UseReviews from '../../Hook/UseReviews';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {

    const [reviews, setReviews] = UseReviews();

    return (
        <div>
            <h2 className='review-title'>What our customers say!!</h2>
            <div className='reviews-item page-review'>
                {
                    reviews.map(reviewItem => <Review
                        reviewItem={reviewItem}
                        key={reviewItem.id}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;