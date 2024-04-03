import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'
import {Table} from 'react-bootstrap'
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import axios from 'axios'
import '../css/Tabla.css'

const TablaRemeras = () => {

    const {id} = useParams()

    const [datos,setDatos] = useState([])

    const obtenerRemeras = async () => {
        const response = await axios.get('http://localhost:3001/remeras')
        setDatos(response.data)
    }

    const handleClick = async (id) => {

      try {
        let response = axios.delete(`http://localhost:3001/remeras/${id}`)
        if(response) {
          alert("Producto eliminado con éxito!")
          obtenerRemeras()
        }
      } catch (error) {
        console.log(error)
      }

    }

useEffect(() => {
    obtenerRemeras()
}, [])

  return (
    <div>
      <br />
      <br />
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre del Producto</th>
          <th>Precio</th>
          <th>Imagenes</th>
          <th>Operaciones</th>
        </tr>
      </thead>
      <tbody>
        
        {datos.map(remera => <tr key={remera.id}>
            <th>
                {remera.id}
            </th>
            <th>
            {remera.nombre}
            </th>
            <th>
            {remera.precio}
            </th>
            <th>
                <img src={remera.imagen} alt="" width={150} height={100}/>
            </th>
            <th>
                <Link className='me-3 btn btn-warning' to={`/actualizarCamisetas/${remera.id}`}><GrUpdate/> Actualizar</Link>
                <button className="me-3 btn btn-danger" onClick={(() => handleClick(remera.id))} ><MdDelete /> Eliminar</button>
            </th>
            </tr>)}
      </tbody>
    </Table>
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

export default TablaRemeras
