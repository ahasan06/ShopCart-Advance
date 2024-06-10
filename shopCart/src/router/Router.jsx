import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../rootlayout/RootLayout";
import Home from "../pages/Home";
import Cart from './../pages/Cart';


export const rootRouter = createBrowserRouter([
    {
        path:"/",
        element:<RootLayout/>,
        children : [
            {path:"/",index:true,element:<Home/>},
            {path:"/cart",index:true,element:<Cart/>}
        ]
    }
])