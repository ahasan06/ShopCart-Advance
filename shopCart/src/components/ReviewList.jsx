// import { useContext} from "react";
// import { ReviewContext } from "../context/ReviewContext";
import { useSelector,useDispatch} from "react-redux";
import SingleReview from "./SingleReview";
import { useEffect } from "react";
import { setReview } from "../store/actions-creator/ReviewAction";

const ReviewList = () => {

    // const { review } = useContext(ReviewContext)
    const review = useSelector(storeState=>storeState.review)
    const dispatch = useDispatch()
    let totalReview = review.reduce((acc, rev) => acc + Number(rev.rating), 0);
    let avgReview = totalReview / review.length;

    useEffect(() => {
        fetch("http://localhost:3000/reviews")
        .then(res => res.json())
        .then(data => {
            dispatch(setReview(data));
        })
        .catch(error => console.error('Error fetching reviews:', error));
    }, []);

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
