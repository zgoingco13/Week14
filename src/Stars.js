//component for displaying star ratings where users can select # of stars for each individual review

import React from "react";

export default function Stars(props) {
    let handleClick = (rating) => {
        if (props.rating !== rating) props.setRating(rating);
        else if (props.rating === rating) props.setRating(0);
    };
    //if rating is changed, then displayed changes otherwise if user selects the same # of stars (before submission) then deselects it

    return (
        <div>
            <span className="star" onClick={() => handleClick(1)}>
                {props.rating >= 1 ? "\u2605" : "\u2606"}
            </span>
            <span className="star" onClick={() => handleClick(2)}>
                {props.rating >= 2 ? "\u2605" : "\u2606"}
            </span>
            <span className="star" onClick={() => handleClick(3)}>
                {props.rating >= 3 ? "\u2605" : "\u2606"}
            </span>
            <span className="star" onClick={() => handleClick(4)}>
                {props.rating >= 4 ? "\u2605" : "\u2606"}
            </span>
            <span className="star" onClick={() => handleClick(5)}>
                {props.rating >= 5 ? "\u2605" : "\u2606"}
            </span>
        </div>
    );
}