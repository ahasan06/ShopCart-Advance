export const fetchUser = () => (dispatch) => {
    dispatch({
        type: "user/fetchOccurring"
    });

    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: 'user/fetchSucceeded',
                payload: data
            });
        })
        .catch(error => {
            console.error('Error fetching users:', error);
            dispatch({
                type: "user/fetchFailed",
                payload: error.message
            });
        });
}
