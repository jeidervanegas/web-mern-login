import { NavLink } from "react-router-dom"



export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <NavLink to='/' className='navbar-brand'>
                Inicio
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle='collapse' aria-controls='navbarNav' data-target='#navbarNav' aria-expanded='false' aria-label="toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/employees'>
                            <i className="fas fa-user">Bienvenido</i>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/'>
                            <i className="fas fa-user-times">Salir</i>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/register'>
                            <i className="fas fa-user-plus">Registrarme</i>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
