import { useState } from "react"
import { useUser } from "../context/UserContext";



export const Login = () => {

    const {loginUser} = useUser();

    const [dataUser, setDataUser] = useState({correo:'', password:''});

    const login = (e) =>  {
        e.preventDefault()
        loginUser(dataUser)
    }

    const handleChange = (e) => {
        setDataUser({...dataUser, [e.target.name]: e.target.value})
    }
  return (
    <div className="container mt-4">
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div className="card">
                    <div className="container text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="72" height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6f32be" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                    </div>
                    <div className="card-body">
                        <form onSubmit={login}>
                            <div className="mb-3">
                                <label className="form-label">Correo</label>
                                <input className="form-control" 
                                name="correo" type="email" 
                                onChange={(e)=> handleChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Contraseña</label>
                                <input className="form-control" 
                                name="password" type="password" 
                                onChange={(e)=> handleChange(e)}
                                />
                            </div>
                            <button
                            type="submit" className="form-control btn btn-primary ">Login</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
