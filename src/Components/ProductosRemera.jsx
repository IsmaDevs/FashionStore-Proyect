import { useState, useEffect } from 'react'
import axios from 'axios'
import CardsRemeras from './CardsRemeras'
import { Row } from 'react-bootstrap'
import '../css/Remeras.css'

const ProductosRemera = () => {


  const [datos,setDatos] = useState([])
  
  const obtenerRemeras = async () => {
    await axios.get('http://localhost:3001/remeras').then(resp => {
      setDatos(resp.data)
    })
    
  }


useEffect(() => {

obtenerRemeras()

}, [])

  return (
    <div>
      <div className="title-container">
        <div className="title">
            <h4>REMERAS FASHION</h4>
        </div>
      </div>
      <div className='remeras-container'>
      <br />
      <Row>
      {datos.map(remera => <CardsRemeras key={remera.id} {...remera}/>)}
      </Row>
      <br />
      </div>
    </div>
  )
}

export default ProductosRemera
