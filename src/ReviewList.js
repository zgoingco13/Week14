//component that displays all individual movie reviews 

import React from "react";
import Review from "./Review";

export default function ReviewList(props) {

    //matches the movie using movieId
    let reviewList = props.reviewList.filter(
        (review) => review.movieId === props.movieId
    );

    return(
        <div>
            <h5>Audience Reviews</h5>
            {(reviewList.length === 0) ?
                <span> Be the first to submit a review!</span> :
                reviewList.map((review) => (
                    <Review
                        key={review.reviewId}
                        review={review}
                        strOfStars={props.starDisplay(review.stars)}
                        removeReview={props.removeReview}
                        //removes a review from the list
                    />
                ))
            }
        </div>
    );
}