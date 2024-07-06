
export const fetchPost = () => (dispatch) => {
   
    dispatch({
        type: "post/fetchOccurring"
    });
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: `post/fetchSucceeded`,
                payload: data
            });
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
            dispatch({
                type: "post/fetchFailed",
                payload: error.message
            });
        });
}

