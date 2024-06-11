import { useContext, useEffect, useState } from "react";
import SingleReview from "./SingleReview";
import { ReviewContext } from "../context/ReviewContext";

const ReviewList = () => {

    const {review} = useContext(ReviewContext)

    return (
        <div className='review_List'>
            <h2>Customer Reviews</h2>
            <div className='reviewList_container'>
                {review.map((item) => (
                    <SingleReview key={item.id} item={item}/>
                ))}
            </div>
        </div>
    );
};

export default ReviewList;
