import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../rootlayout/RootLayout";
import Home from "../pages/Home";
import Cart from './../pages/Cart';
import Review from "../pages/Review";
import ProdDetails from "../pages/ProdDetails";



export const rootRouter = createBrowserRouter([
    {
        path:"/",
        element:<RootLayout/>,
        children : [
            {path:"/",index:true,element:<Home/>},
            {path:"/cart",index:true,element:<Cart/>},
            {path:"/review",index:true,element:<Review/>},
            {path:"/product/:prodId",index:true,element:<ProdDetails/>}
        ]
    }
])