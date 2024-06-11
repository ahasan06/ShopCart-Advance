
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";


const Review = () => {
 

    return (
        <div className="Product_Review">
            <div className="Review_container">
                <ReviewForm/>
                <ReviewList/>
            </div>
            
        </div>
    );
};

export default Review;