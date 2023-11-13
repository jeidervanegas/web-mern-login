import { useState } from "react"
import { useUser } from "../context/UserContext";



export const Register = () => {

    const {loginUser} = useUser();

    const [dataUser, setDataUser] = useState({correo:'', password:'', nombre:''});

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
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-registered" width="72" height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6f32be" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M10 15v-6h2a2 2 0 1 1 0 4h-2" />
                    <path d="M14 15l-2 -2" />
</svg>
                    </div>
                    <div className="card-header text-center mt-3">
                        <h4>Registro de jefe</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={login}>
                            <div className="mb-3">
                                <label className="form-label">Correo</label>
                                <input className="form-control" 
                                name="correo" type="email" 
                                onChange={handleChange}
                                required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Contraseña</label>
                                <input className="form-control" 
                                name="password" type="password" 
                                onChange={ handleChange}
                                required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input className="form-control" 
                                name="nombre" 
                                type="text" 
                                onChange={ handleChange}
                                required
                                />
                            </div>
                            <button
                                type="submit" 
                                className="form-control btn btn-primary 
                            ">Login</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
