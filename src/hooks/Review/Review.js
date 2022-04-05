import React from 'react';
import Sreview from '../Sreview/Sreview';
import useReviews from '../useReviews/useReviews';

const Review = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div>
            <h1>this is from Review</h1>
            {
                reviews.map(review => <Sreview review={review}></Sreview>)
            }
        </div>
    );
};

export default Review;