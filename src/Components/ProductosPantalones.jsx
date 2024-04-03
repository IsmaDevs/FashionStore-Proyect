import { useState, useEffect } from 'react'
import axios from 'axios'
import CardsPantalones from './CardsPantalones'
import { Row } from 'react-bootstrap'
import '../css/Pantalones.css'

const ProductosPantalones = () => {

    const [datos,setDatos] = useState([])

    const obtenerPantalones = async () => {
        await axios.get('http://localhost:3001/pantalones').then(resp => {
            setDatos(resp.data)
        })
    }

    useEffect(() => {
        obtenerPantalones()
    },[])

  return (
    <div>
      <div className="title-container">
        <div className="title">
            <h4>PANTALONES FASHION</h4>
        </div>
      </div>
      <div className='remeras-container'>
      <br />
      <Row>
      {datos.map(pantalon => <CardsPantalones key={pantalon.id} {...pantalon}/>)}
      </Row>
      <br />
      </div>
    </div>
  )
}

export default ProductosPantalones
