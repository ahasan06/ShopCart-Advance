//raw redux
/*
import {
    combineReducers,
    createStore
} from 'redux'
import CounterReducer from './reducers/CounterReducer'
import CartReducer  from './reducers/CartReducer'
import  ReviewReducer  from './reducers/ReviewReducer'
import { composeWithDevTools } from '@redux-devtools/extension';
const rootReducer = combineReducers({
    counter: CounterReducer,
    cart:CartReducer,
    review:ReviewReducer,
})

export const ourStore = createStore(rootReducer,composeWithDevTools())
*/


//redux toolkit
import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './reducers/CounterReducer'
import CartReducer  from './reducers/CartReducer'
import ReviewReducer  from './reducers/ReviewReducer'


const rootReducer= {
    counter: CounterReducer,
    cart:CartReducer,
    review:ReviewReducer,
}

export const ourStore = configureStore({
    reducer:rootReducer,
});
