import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { rootRouter } from './router/Router';
import CartProvider from './context/CartContext';
import ReviewProvider from './context/ReviewContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <ReviewProvider>
      <RouterProvider router={rootRouter} />
    </ReviewProvider>
  </CartProvider>
)
