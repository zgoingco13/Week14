//form component that allows users to leave a review and rate # of stars

import { useState } from "react";
import Stars from "./Stars";

export default function ReviewForm(props) {
    //state of review
    let [userValue, setUserValue] = useState('');
    let [starsValue, setStarsValue] = useState(0);
    let [contentValue, setContentValue] = useState('');

    //create new Review object with data from the form
    let handleSubmit = (event) => {
        event.preventDefault();
        let today = new Date().toLocaleDateString(); //uses today's date
        props.addReview({
            movieId: props.movie.movieId,
            user: userValue,
            date: today,
            stars: Number(starsValue),
            content: contentValue,
        });
        setUserValue('');
        setStarsValue(0);
        setContentValue('');
    };

    //rendering a form that users can submit review with button
    return(
        <form>
            <h5> Review {props.movie.title}</h5>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={userValue}
                            onChange={(e) => setUserValue(e.target.value)}
                        />
                    </div>
                    <div className="col-sm-6 pt-4">
                        <Stars rating={starsValue} setRating={setStarsValue} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <label className="form-label">Comments</label>
                        <input
                            type="text"
                            className="form-control"
                            value={contentValue}
                            onChange={(e) => setContentValue(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <button
                className="btn btn-warning mt-3 mb-2 btn-sm"
                onClick={handleSubmit}>
                    Submit
                </button>
        </form>
    );
}