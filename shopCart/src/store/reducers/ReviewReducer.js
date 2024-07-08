// Raw redux 
/*
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

*/
//Redux toolkit Create Reduer=================
/*
import {
    createReducer
} from '@reduxjs/toolkit'

import { addReview,setReview } from '../actions-creator/ReviewAction'

export const ReviewReducer=createReducer([],(builder)=>{
    builder
    .addCase(addReview,(state,action)=>{
        return [...state,action.payload];
    })  
    .addCase(setReview,(state,action)=>{
        return [...action.payload];
    })
})
    */



// redux toolkit createSlice================

import { createSlice } from "@reduxjs/toolkit";

const ReviewReducer = createSlice({
    name:"ReviewReducer",
    initialState:[],
    reducers:{
        addReview(state,action){
            return [...state,action.payload];
        },
        setReview(state,action){
            return [...action.payload];
        }
    }

})
export const {addReview,setReview} = ReviewReducer.actions
export default ReviewReducer.reducer
