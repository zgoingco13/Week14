import { useState } from "react";
import MovieList from "./MovieList";

let nextReviewId = 10;

export default function App() {
    //array of movies in our state
    let [movieList, setMovieList] = useState([
        {
            movieId: 1,
            title: "The Curious Case of Benjamin Buttons",
            year: '2008',
            img: "./images/ccobb.jpeg",
            restriction: './images/pg-13.png',
            synopsis: 'Born under unusual circumstances, Benjamin Button (Brad Pitt) springs into being as an elderly man in a New Orleans nursing home and ages in reverse. Twelve years after his birth, he meets Daisy, a child who flickers in and out of his life as she grows up to be a dancer (Cate Blanchett). Though he has all sorts of unusual adventures over the course of his life, it is his relationship with Daisy, and the hope that they will come together at the right time, that drives Benjamin forward.'
        },
        {
            movieId: 2,
            title: "Everything Everywhere All At Once",
            year: '2022',
            img: "./images/eeaao.jpg",
            restriction: './images/rated-r.jpeg',
            synopsis: 'When an interdimensional rupture unravels reality, an unlikely hero must channel her newfound powers to fight bizarre and bewildering dangers from the multiverse as the fate of the world hangs in the balance.'
        },
        {
            movieId: 3,
            title: "Luca",
            year: "2021",
            img: "./images/luca.jpg",
            restriction: './images/pg.png',
            synopsis: 'Set in a beautiful seaside town on the Italian Riviera, the original animated feature is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides. Luca shares these adventures with his newfound best friend, but all the fun is threatened by a deeply held secret: he is a sea monster from another world just below the water\'s surface.'
        }
    ]);

    //array of reviews in our state
    let [reviewList, setReviewList] = useState([
        {
            reviewId: 1,
            movieId: 1,
            user: "John",
            date: "4/23/2023",
            stars: 5,
            content: 'cool movie.'
        },
        {
            reviewId: 1,
            movieId: 2,
            user: "Sophia",
            date: "8/15/2023",
            stars: 3,
            content: 'cool movie.'
        },
        {
            reviewId: 1,
            movieId: 3,
            user: "Taylor",
            date: "2/10/2023",
            stars: 4,
            content: 'cool movie.'
        }
    ]);

    //function for adding new individual reviews to specific movies
    let addReview = (newReviewData) => {
        let newReview = {
            reviewId: nextReviewId++,
            ...newReviewData,
        };
        setReviewList(reviewList.concat(newReview));
    };

    //function for removing new individual reviews to specific movies
    let removeReview = (reviewId) => {
        setReviewList(reviewList.filter(review => review.reviewId !== reviewId));
    };

    //MovieList component
    return(
        <MovieList
            movieList={movieList}
            reviewList={reviewList}
            addReview={addReview}
            removeReview={removeReview}
        />
    );
}