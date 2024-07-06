const initialState = {
    isLoading: true,
    posts: [],
    errorMessage: ""
};

const postRed = (state = initialState, action) => {
    switch (action.type) {
        case "post/fetchOccuring":
            return {
                ...state,
                isLoading: true
            };
        case "post/fetchSucceeded":
            return {
                ...state,
                isLoading: false,  // Make sure to set isLoading to false when the fetch succeeds
                posts: action.payload,
                errorMessage: ''
            };
        case "post/fetchFailed":
            return {
                ...state,
                isLoading: false,
                posts: [],
                errorMessage: action.payload
            };
        default:
            return state;  // Return current state if action is not handled
    }
};

export default postRed;
