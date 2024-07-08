// eslint-disable-next-line no-unused-vars
/*
// One Way to handle middleware

export const ourMiddleWare = (store) => (next) => (action) => {
    if (action === "Fake-post-action") {
        console.log(store.getState(), "store");
        console.log(action, "action");
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => {
                store.dispatch({
                    type: `post/fetchSucceeded`,
                    payload: data
                })
            })
        return
        //asycronous task skip kore next e chole jete chabe 
        //next faka sejonno return dia ager jaygay nia jay data available hole
        //then next e jabe
    }

    if (action === 'Fake-users-dispatch') {
        console.log(store.getState(), "store");
        console.log(action, "action");
        store.dispatch({
            type: "user/fetchOccuring"
        })

        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => {
                store.dispatch({
                    type: 'user/fetchSucceeded',
                    payload: data
                })
            })
            .catch(error => {
                console.error('Error fetching users:', error);
                store.dispatch({
                    type: "user/fetchFailed",
                    payload: error.message
                })
            })
        return
    }

    next(action)
}
*/
//Second way to handle this using function
/*
export const ourMiddleWare = (store) => (next) => (action) => {
    // Call next for all actions by default
    if (typeof action === 'function') {
        // If action is a function, it's likely a thunk, invoke it
         action(store.dispatch);
         return
    }
    next(action);
}
*/