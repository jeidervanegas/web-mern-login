
import { useEffect } from 'react';
import './App.css'

import { useUser } from './context/UserContext'

function App() {

  const {loginUser} = useUser();

  useEffect(() => {
    loginUser({correo:'marcos@gmail.com', password:'12345678'})
  }, [])

  return (
    <div>

    </div>
  )
}

export default App
