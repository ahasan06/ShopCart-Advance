
const ReviewReducer = (state=[],action) => {
  console.log("Reducer State",state);
    switch (action.type) {
        case "SET_REVIEWS":{
            return [...action.payload];
        }
        case "ADD_REVIEW":{
            return [...state,action.payload];
        }
        default:
            return state
    }
};
export default ReviewReducer