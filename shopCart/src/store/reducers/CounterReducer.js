const counterReducer = (state=0,action)=>{
    console.log(state);
    switch (action.type) {
        case "counter/increment":{
            return state+action.payload
        }
        case "counter/decrement":{
            return state-action.payload
        }
        default:{
            return state
        }
    }

}
export default counterReducer