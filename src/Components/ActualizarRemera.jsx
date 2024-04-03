import { useEffect, useState } from "react"
import { useParams,useNavigate } from "react-router-dom"
import '../css/ActualizarProducto.css'
import axios from 'axios'

const ActualizarRemera = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const initialState = {
      nombre:"",
      precio:"",
      imagen:""
    }

    const [datos,setDatos] = useState(initialState)

    const obtenerDatos = async () => {
      let response = await axios.get(`http://localhost:3001/remeras/${id}`)
      setDatos(response.data)
    }

    const handleChange = (e) => {
      setDatos({...datos,[e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
      e.preventDefault()

      try {

        let response = await axios.put(`http://localhost:3001/remeras/${id}`,{
          nombre: datos.nombre,
          precio: datos.precio,
          imagen: datos.imagen
        })

        if(response) {
          alert("Producto actualizado con éxito!")
          navigate('/camisetas')
        }

      } catch (error) {
        console.log(error)
      }
    }

useEffect(() => {
  obtenerDatos()
}, [])

  return (
    <div>
      <div className='info-container'>
        <div className='info'>
            <h4>COMPLETA LOS CAMPOS PARA ACTUALIZAR EL PRODUCTO</h4>
        </div>
      </div>
      <div className='form-container'>
        <form onSubmit={handleSubmit} className="form">
        <div className="datos-form">
            <a className="title-form">Datos del producto</a>
            <div className="inputBox1">
              <label htmlFor="">Nombre del Producto:</label>
                <input className="mt-3" name="nombre" type="text" onChange={handleChange} />
                <span className="mt-3 nombre">{datos.nombre}</span>
            </div>

            <div className="inputBox">
              <label htmlFor="">Precio del Producto</label>
                <input className="mt-3" name="precio" type="text" onChange={handleChange} />
                <span className="mt-3">{datos.precio}</span>
            </div>

            <div className="inputBox">
              <label htmlFor="">Imagen URL</label>
                <input className="mt-3" name="imagen" type="text" onChange={handleChange} />
                <span className="mt-3">{datos.imagen}</span>
            </div>

            <button type="submit" className="enter">Actualizar Producto</button>

        </div>
    </form>
        </div>
      </div>
  )
}

export default ActualizarRemera;
