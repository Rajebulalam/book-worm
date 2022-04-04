import React from 'react';
import UseReviews from '../../Hook/UseReviews';
import './Home.css';
import book from '../../images/books.png';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';

const Home = () => {

    const [reviews, setReviews] = UseReviews();

    return (
        <div className='home-container'>
            <section className='banner-part'>
                <div className='child'>
                    <h2>The more you read</h2>
                    <h2 className='highlight-color'>The more you learn</h2>
                    <p>If you don't like to read, you haven't found the right book. Books are good company, in sad times and happy times, for books are people - people who have managed to stay alive by hiding between the covers of a book. A room without books is like a body without a soul.</p>
                    <button className='live-btn'>Live Preview</button>
                </div>
                <div className='child'>
                    <img src={book} alt="book-img" />
                </div>
            </section>

            <section className='review-container'>
                <h2>Customer Reviews : {reviews.slice(0, 3).length} </h2>
                <div className='reviews-item'>
                    {
                        reviews.slice(0, 3).map(reviewItem => <Review
                            reviewItem={reviewItem}
                            key={reviewItem.id}
                        ></Review>)
                    }
                </div>
                <div className='see-all-review'>
                    <Link to='/reviews'>See All Reviews</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;