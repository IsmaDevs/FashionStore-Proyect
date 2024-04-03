import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import '../css/CrearProducto.css'


const CrearPantalon = () => {
    
    const navigate = useNavigate()

    const initialState = {
        nombre:"",
        precio:"",
        imagen:""
    }

    const [datos,setDatos] = useState(initialState)


    const handleChange = (e) => {

        const {name,value} = e.target
        setDatos({...datos,[e.target.name]: e.target.value})

    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            
            let response = await axios.post(`http://localhost:3001/pantalones`, {
                nombre: datos.nombre,
                precio: datos.precio,
                imagen: datos.imagen
            })
            
            if(response) {
                alert("Producto Añadido con éxito!")
                navigate('/pantalones')
            }

        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
      <div className='info-container'>
        <div className='info'>
            <h4>COMPLETA LOS CAMPOS PARA CREAR EL PRODUCTO</h4>
        </div>
      </div>
      <div className='form-container'>
        <div className='formulario'>
        <form onSubmit={handleSubmit} className="form">
        <div className="datos-form">
            <a className="title-form">Datos del producto</a>
            <div className="inputBox1">
                <input type="text" name='nombre' required="required" onChange={handleChange} />
                <span className="nombre">Nombre del Producto</span>
            </div>

            <div className="inputBox">
                <input type="text" name='precio' required="required" onChange={handleChange} />
                <span>Precio del Producto</span>
            </div>

            <div className="inputBox">
                <input type="text" name='imagen' required="required" onChange={handleChange} />
                <span>Imagen URL</span>
            </div>

            <button className="enter">Enviar Producto</button>

        </div>
    </form>
        </div>
      </div>
      <br />
      <br />
      <div className="salir-container">
      <div className="salir">
        <Link to={'/staff'} className="mt-2 text-decoration-none text-black">Volver al Menu</Link>
      </div>
      </div>
      <br />
    </div>
  )
}

export default CrearPantalon
