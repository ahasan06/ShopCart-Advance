import { Link } from "react-router-dom";

import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "../store/Api-services/UserApi";


const UserList = () => {

    const {isLoading,users,errorMessage} = useSelector(storeState=>storeState.users)
    const dispatch = useDispatch()
    console.log("users",users);
    
    useEffect(()=>{
        dispatch(fetchUser())
    },[dispatch])

    return (
        <div className="post-list user-list">
            {isLoading && <p className="loader"><p className="loader2"></p></p>}
            {errorMessage && <div className="Error_message">Error:{errorMessage}</div>}
            {users.map((user) => (
               
                <Link key={user.id}>
                    <div className="post_card">
                        <h3>User Name: {user.name}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default UserList;