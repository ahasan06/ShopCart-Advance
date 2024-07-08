
//Raw Redux 
/*
export const addReview=(payload)=>{
return{
    type:'ADD_REVIEW',
    payload:payload
}
}

export const setReview=(payload)=>{
    return{
        type:'SET_REVIEWS',
        payload:payload
    }
}

*/
// raw  redux-toolkit createAction
/*
import { createAction } from '@reduxjs/toolkit'
export const addReview = createAction("ADD_REVIEW");
export const setReview = createAction("SET_REVIEWS");
*/


//redux-toolkit createSlice ======================
import { addReview,setReview } from "../reducers/ReviewReducer";
export {addReview,setReview}
