

const initialState = {
    users:[],
    isLoading:true,
    errorMessage:false
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "user/fetchOccuring":
            return {
                ...state,
                isLoading: true
            };
        case "user/fetchSucceeded":
            return {
                ...state,
                isLoading: false,  // Make sure to set isLoading to false when the fetch succeeds
                users: action.payload,
                errorMessage: ''
            };
        case "user/fetchFailed":
            return {
                ...state,
                isLoading: false,
                users: [],
                errorMessage: action.payload
            };
        default:
            return state;  // Return current state if action is not handled
    }
};
export default UsersReducer