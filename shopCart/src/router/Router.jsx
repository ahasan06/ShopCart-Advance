import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../rootlayout/RootLayout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Review from "../pages/Review";
import ProdDetails from "../pages/ProdDetails";
import Post from "../pages/Post";
import PostDetails from "../components/PostDetails";

export const rootRouter = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { path: "/", element: <Home />, index: true },
            { path: "cart", element: <Cart /> },
            { path: "review", element: <Review /> },
            { path: "product/:prodId", element: <ProdDetails /> },
            { path: "post", element: <Post /> },
            { path: "post/:postId", element: <PostDetails /> }
        ]
    }
]);
