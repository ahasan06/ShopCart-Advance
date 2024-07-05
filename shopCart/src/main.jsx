// import ReactDOM from 'react-dom/client'
// import './index.css'
// import { RouterProvider } from "react-router-dom";
// import { rootRouter } from './router/Router';
// import CartProvider from './context/CartContext';
// import ReviewProvider from './context/ReviewContext';
// import AllProductProvider from './context/AllProduct';

// //raw redux
// import { Provider } from "react-redux";
// import { ourStore } from './store/index';

// ReactDOM.createRoot(document.getElementById('root')).render(


//   <Provider store={ourStore}>
//     <AllProductProvider>
//       <CartProvider>
//         <ReviewProvider>
//           <RouterProvider router={rootRouter} />
//         </ReviewProvider>
//       </CartProvider>
//     </AllProductProvider>
//   </Provider>
// )


// Remove cartProvider , ReviewProvider

import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { rootRouter } from './router/Router';

//raw redux
import { Provider } from "react-redux";
import { ourStore } from './store/index';

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={ourStore}>

          <RouterProvider router={rootRouter} />

  </Provider>
)
