//raw redux
/*

import {
    combineReducers,
    createStore,
    applyMiddleware
} from 'redux'
import CounterReducer from './reducers/CounterReducer'
import CartReducer  from './reducers/CartReducer'
import  ReviewReducer  from './reducers/ReviewReducer'
import { composeWithDevTools } from '@redux-devtools/extension';

// import { ourMiddleWare } from './middlewares';
import { thunk } from "redux-thunk";
import postRed from './reducers/PostReducer';
import UsersReducer from './reducers/UserReducer';

const rootReducer = combineReducers({
    counter: CounterReducer,
    cart:CartReducer,
    review:ReviewReducer,
    post:postRed,
    users:UsersReducer
})

export const ourStore = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

*/


/*
//redux toolkit middleware 
import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './reducers/CounterReducer'
import CartReducer  from './reducers/CartReducer'
import ReviewReducer  from './reducers/ReviewReducer'
import postRed from './reducers/PostReducer';
import UsersReducer from './reducers/UserReducer';
import ProductReducer from './reducers/ProductReducer';


const rootReducer= {
    counter: CounterReducer,
    cart:CartReducer,
    review:ReviewReducer,
    post:postRed,
    users:UsersReducer,
    products:ProductReducer,

}

export const ourStore = configureStore({
    reducer:rootReducer,
});
*/


// RTK QUARY ========================
import {
    configureStore
} from '@reduxjs/toolkit'
import CounterReducer from './reducers/CounterReducer'
import CartReducer from './reducers/CartReducer'
import ReviewReducer from './reducers/ReviewReducer'
import postRed from './reducers/PostReducer';
import UsersReducer from './reducers/UserReducer';
// import ProductReducer from './reducers/ProductReducer';

import {
    rootApi
} from './features/apiSlice';

const rootReducer = {
    counter: CounterReducer,
    cart: CartReducer,
    review: ReviewReducer,
    post: postRed,
    users: UsersReducer,
    // products: ProductReducer,

    [rootApi.reducerPath]: rootApi.reducer
}

export const ourStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(rootApi.middleware)
});