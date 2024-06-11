/* eslint-disable react/prop-types */

const SingleReview = ({item}) => {
    const renderStar = (rating)=>{
        return <span className="star-rating">{'★'.repeat(rating)}</span>;
    }
    return (
        <div>
            <div className='reviewList_container'>
                    <div key={item.id} className='review_card'>
                        <h3>Product Name : {item.productName}</h3>
                        <p><strong>Reviewed by:</strong> {item.customerName}</p>
                        <p><i>{item.description}</i></p>
                        <p className="rating"><strong>Rating:</strong> {renderStar(Number(item.rating))}</p>
                    </div>
            </div>
        </div>
    );
};

export default SingleReview;