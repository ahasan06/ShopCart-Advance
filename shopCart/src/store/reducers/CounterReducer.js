
//raw redux 
/*
const counterReducer = (state=0,action)=>{
    console.log(state);
    switch (action.type) {
        case "counter/increment":{
            return state+action.payload
        }
        case "counter/decrement":{
            return state-action.payload
        }
        default:{
            return state
        }
    }

}
export default counterReducer
*/

//Redux toolkit Create Reduer=================
import {
    createReducer
} from '@reduxjs/toolkit'
import { incrementCounter,DecrementCounter } from '../actions-creator/CounterAction'

export const CounterReducer = createReducer(0,(builder)=>{
    builder
    .addCase(incrementCounter,(state,action)=>{
        return state+action.payload
    })
    .addCase(DecrementCounter,(state,action)=>{
        return state-action.payload
    })
})