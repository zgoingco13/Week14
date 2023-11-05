//displays list of moviews

import React from "react";
import Movie from "./Movie";

export default function MovieList(props) {
    return(
        <div className="container">
            <div className="my-3 mx-auto">
                <h2>Movie Reviews</h2>
            </div>
            {props.movieList.map((movie) => (
                <Movie
                    key={movie.movieId}
                    movie={movie}
                    reviewList={props.reviewList}
                    addReview={props.addReview}
                    removeReview={props.removeReview}
                />
                ))
            }  
        </div>
    );
}