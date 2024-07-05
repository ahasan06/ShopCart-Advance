// raw react redux 
/*
export const incrementCounter =(payload)=>{
    return{
        type:'counter/increment',
        payload:payload
    }
}
export const DecrementCounter =(payload)=>{
    return{
        type:'counter/decrement',
        payload:payload
    }
}
*/

// raw  redux-toolkit createAction
import { createAction } from '@reduxjs/toolkit'
export const incrementCounter = createAction("counter/increment");
export const DecrementCounter = createAction("counter/decrement");