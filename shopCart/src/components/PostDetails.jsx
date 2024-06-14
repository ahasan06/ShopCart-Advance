import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState('');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Network response was not ok!");
                }
                return res.json();
            })
            .then(data => {
                setPost(data);
                setIsLoading(false);
                setIsError('');
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
                setIsError(error.message);
                setIsLoading(false);
            });
    }, [postId]); // Ensure useEffect is called only when postId changes

    if (isLoading) return  <p className="loader"><div className="loader2"></div></p>;
    if (isError) return <p>Error: {isError}</p>;

    return (
        <div className="posts-container">
            {post && (
                <div className="post_card">
                    <h3>{post.title}</h3>
                    <p><strong>User ID:</strong> {post.userId}</p>
                    <p>{post.body}</p>
                </div>
            )}
        </div>
    );
};

export default PostDetails;
