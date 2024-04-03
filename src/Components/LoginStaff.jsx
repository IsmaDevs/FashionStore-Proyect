import { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'
const LoginStaff = () => {

  const Navigate = useNavigate()
  const [datos,setDatos] = useState([])
  const [credencial,setCredencial] = useState('')
  const [password,setPassword] = useState('')

  const obtenerDatos = async () => {

    let response = await axios.get('http://localhost:3001/personal')
    setDatos(response.data)
    
  } 
  
  const handleSubmit = () => {
    if(datos.credencial === credencial && datos.password === password){
      Navigate('/staff')
    } else {
      alert("Datos incorrectos!")
    }
  }

  useEffect(() => {
    obtenerDatos()
  }, [])

  return (
    <div className='wrapper'>
      <div className="flip-card__front">
        <div className="title">Log in</div>
        <form action="" onSubmit={handleSubmit} className="flip-card__form">
          <input
            type="text"
            placeholder="Credencial"
            name="credencial"
            className="flip-card__input"
            onChange={(e) => {setCredencial(e.target.value)}}
          />
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            className="flip-card__input"
            onChange={(e) => {setPassword(e.target.value)}}
          />
          <button type='submit' className="flip-card__btn">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginStaff;
