//individual movie display component
//includes ReviewList & ReviewForm component

import React from "react";
import "./Movie.css";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";

export default function Movie(props) {
    //extracts the reviews for individual movie from entire list of all reviews
    let movieReviews = props.reviewList.filter(
        (review) => props.movie.movieId === review.movieId
    );

    //calculates the average num of stars
    let total = 0;
    movieReviews.forEach((review) => (total += review.stars));
    let average = total === 0 ? 0: Math.round(total / movieReviews.length);

    //passed to show average rating for individual movie and each individual review star rating
    function starDisplay(numberOfStars) {
        let stars = '';
        for (let i = 0; i < numberOfStars; i++) stars += "\u2605";
        for (let i = numberOfStars; i < 5; i++) stars += "\u2606";
        return stars;
    }

    //rendering ReviewList to see all reviews and ReviewForm to leave additional reviews
    return(
        <div className="card border-dark my-4 mx-auto">
            <div className="card-header movie-color">
                <div className="container">
                    <div className="row movie-header py-1">
                        <div className="col-2 h-100 pt-1">
                            <img src={props.movie.img} alt="movie poster" className="movie-img" />
                        </div>
                        <div className="col-10 movie-middle">
                            <h3>
                                {props.movie.title} {starDisplay(average)} 
                            </h3>
                            ({props.movie.year})
                            <br></br>
                            <img
                                src={props.movie.restriction}
                                alt="restriction"
                                className="movie-restriction"
                            />
                            <br/><br/>
                            {props.movie.synopsis}
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body text-dark">
                <ReviewList
                    movieId={props.movie.movieId}
                    reviewList={props.reviewList}
                    starDisplay={starDisplay}
                    removeReview={props.removeReview}
                />
            </div>
            <div className="card-footer movie-color-light">
                <ReviewForm movie={props.movie} addReview={props.addReview} />
            </div>
        </div>
    );
}
