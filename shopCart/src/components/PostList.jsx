import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useDispatch,useSelector } from 'react-redux';
import { fetchPost } from "../store/Api-services/PostApi";

const PostList = () => {
    // const [posts, setPosts] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const [errorMessage, setErrorMessage] = useState(""

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then(res => {
    //             if (!res.ok) {
    //                 throw new Error("Network response was not ok!")
    //             }
    //             return res.json()
    //         })
    //         .then(data => {
    //             setPosts(data);
    //             setIsLoading(false);
    //             setErrorMessage("") //clear previous error msg
    //         })
    //         .catch((error) => {
    //             console.log("There Was a problem with the fetch operation", error);
    //             setErrorMessage(error.message);
    //             setIsLoading(false)
    //         })
    // }, []);

    const dispatch = useDispatch()
    const {posts,isLoading,errorMessage} = useSelector(storeState=>storeState.post)
    useEffect(()=>{
        dispatch(fetchPost())
    },[dispatch])
    
    return (
        <div className="post-list">
            {isLoading && <p className="loader"><p className="loader2"></p></p>}
            {errorMessage && <div className="Error_message">Error:{errorMessage}</div>}
            {posts.map((item) => (
                <Link key={item.id} to={`/post/${item.id}`}>
                    <div className="post_card">
                        <h3>Title: {item.title}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default PostList;
