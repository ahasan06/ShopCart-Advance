import { useContext, useEffect, useState } from "react";
import SingleReview from "./SingleReview";
import { ReviewContext } from "../context/ReviewContext";

const ReviewList = () => {

    const { review } = useContext(ReviewContext)
    let totalReview = review.reduce((acc, rev) => acc + Number(rev.rating), 0);
    let avgReview = totalReview / review.length;

    return (

        <div className='review_List'>
            <h2>Customer Reviews</h2>
            <h4>Average Rating : {avgReview} out of 5</h4>
            <br />
            <div className='reviewList_container'>
                {review.map((item) => (
                    <SingleReview key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ReviewList;
