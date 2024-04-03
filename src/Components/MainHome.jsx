import { useEffect, useState } from 'react'
import axios from 'axios'
import {Row} from 'react-bootstrap'
import CardsDest from './CardsDest'
import sale2x1 from '../assets/bannerMF.jpg'
import '../css/Home.css'

const MainHome = () => {

    const [datos, setDatos] = useState([])

  const Destacados = async () => {
    const response = await axios.get('http://localhost:3001/destacados').then(resp => {
      setDatos(resp.data)
    })
  }

  useEffect(() => {
    Destacados()
  }, [])

  return (
    <div>
      <div className="img-container">
        <img className='img2x1' height="600" src={sale2x1} alt="" />
      </div>
      <div className='info-container'>
        <div className='info-page'>
          <br />
          <div className='envio'>
            <h5><i className="fa-solid fa-truck"> </i> Envíos gratis!</h5>
            <p>En compras superiores a $30.000</p>
          </div>
          <div className='pago'>
            <h5><i className="fa-regular fa-credit-card"> </i> Pagá ahora hasta 6 cuotas sin interés</h5>
            <p>Con tarjetas de crédito bancarias</p>
          </div>
          <div className='compra'>
            <h5><i className="fa-regular fa-circle-check"> </i> Comprá de manera segura</h5>
            <p>Protegemos tus datos</p>
          </div>
          <br />
        </div>
      </div>
      <div className='destacado-container'>
        <div className='destacado'>
          <h4>Destacados</h4>
          <br />
      <Row>
      {datos.map(desc => <CardsDest key={desc.id} {...desc}/>)}
      </Row>
      <br />
        </div>
      </div>
    </div>
  )
}

export default MainHome
