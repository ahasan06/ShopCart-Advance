// /* eslint-disable react/prop-types */

// import { createContext,useEffect,useReducer } from "react";
// import { ReviewReducer } from "../reducer/ReviewReducer";

// export const ReviewContext = createContext()
// const ReviewProvider = ({ children }) => {
//     const [review, dispatch] = useReducer(ReviewReducer, []);

//     useEffect(() => {
//         fetch("http://localhost:3000/reviews")
//         .then(res => res.json())
//         .then(data => {
//             dispatch({ type: 'SET_REVIEWS', payload: data });
//         })
//         .catch(error => console.error('Error fetching reviews:', error));
//     }, []);

//     return (
//         <ReviewContext.Provider value={{ review, dispatch }}>
//             {children}
//         </ReviewContext.Provider>
//     );
// };

// export default ReviewProvider;