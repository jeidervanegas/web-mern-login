import axios from "axios";
import Swal from "sweetalert2";
import react, { createContext, useState, useContext } from "react";

const UserContext = createContext();
const initialState = {login:false, token:'', name: ''};

export const UserProvider = (props) => {
    const [user, setUser] = useState(initialState);

    const loginUser = async(dataUser, navigate) => {
        try {
            const {data} = await axios.post('http://localhost:4001/api/login', dataUser
            );
           if(data.ok) {
            const userLogin = {
                login: true,
                token: data.data.token,
                name: data.data.nombre
            };
           
           localStorage.setItem('user', JSON.stringify(userLogin));
            setUser(userLogin);
            Swal.fire({
                icon: 'success',
                 title: data.message,
                 showConfirmButton: false,
                 timer: 1500,
                });
            }
        } catch (error) {
            if(!error.response.data.ok) {
               return Swal.fire({
                    icon: 'error',
                     title: error.response.data.message,
                     showConfirmButton: false,
                     timer: 1500,
                    });
            }
            console.log('error en la funcion login', error.message);
        }
        
    }

    const value = {
        loginUser,
        user
    }
    return <UserContext.Provider value={value} {...props}/>
    
}

export function useUser() {
    const context = useContext(UserContext);
    if(!context)  {
        throw new Error('useUser error')
    }
    return context

}





// import axios from "axios";
// import Swal from "sweetalert2";
// import react, { createContext, useState, useContext } from "react";

// const UserContext = createContext();
// const initialState = {login:false, token:'', name: ''};

// export const UserProvider = ({children}) => {
//     const [user, setUser] = useState(initialState);

//     const loginUser = async(dataUser) => {
//         try {
//             const resp = await axios.post('http://localhost:4001/api/login', dataUser
//             );
//             console.log(resp);
//         } catch (error) {
//             console.log("error en la peticion al backend");
//         }
//     }

//     const value = {
//         loginUser,
//     }

//     return (
//       <UserContext.Provider value={value}>
//         {children}
//       </UserContext.Provider>
//     )
// }

// export function useUser() {
//     const context = useContext(UserContext);
//     if(!context)  {
//         throw new Error('useUser error')
//     }
//     return context

// }

