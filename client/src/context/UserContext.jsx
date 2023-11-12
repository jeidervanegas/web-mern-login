import axios from "axios";
import Swal from "sweetalert2";
import react, { createContext, useState, useContext } from "react";

const UserContext = createContext();
const initialState = {login:false, token:'', name: ''};

export const UserProvider = (props) => {
    const [user, setUser] = useState(initialState);

    const loginUser = async(dataUser) => {
        try {
            const resp = await axios.post('localhost:4001/api/login', dataUser
            );
            console.log(resp);
        } catch (error) {
            
        }
    }

    const value = {
        loginUser,
    }
    return <UserContext.Provider value={value} {...props}/>
    // return (
    //     <UserContext.Provider 
    //         value={
    //             value
    //         } 
    //         >
    //         {props}
    //         </UserContext.Provider>
    //     )
    // }
    
}

export function useUser() {
    const context = useContext(UserContext);
    if(!context)  {
        throw new Error('useUser error')
    }
    return context

}


