import React from 'react';
import './Review.css';

const Review = ({ reviewItem }) => {

    const { img, name, review, ratings } = reviewItem;

    return (
        <div className='review-item'>
            <img src={img} alt="review-person" />
            <h2> Name : {name} </h2>
            <p> Review : {review} </p>
            <h3> Ratings : {ratings} start </h3>
        </div>
    );
};

export default Review;