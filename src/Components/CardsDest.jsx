import {Col, Card, CardFooter} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../css/Destacados.css'

const CardsDest = ({id, nombre, precio, imagen,oldPrecio,cuotas}) => {


  return (
    <Col md={3}>
    <br />
    <Card className='destacados-card' style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imagen} />
    <Card.Body>
      <Card.Subtitle>{nombre}</Card.Subtitle>
      <Card.Title className='precio mt-2'>
        <del>{oldPrecio}</del> <strong className='text-danger'>{precio}</strong>
      </Card.Title>
      <Card.Text className='cuotas'>
      <p><i className="fa-solid fa-credit-card"> </i> 3 cuotas sin interés de {cuotas}</p>
      </Card.Text>
      <CardFooter className='bg-white'>
      <Link className='btn-ver btn btn-dark' to={`/verCamisetas/${id}`}><i className="fa-regular fa-eye"> </i> Ver Mas</Link>
      </CardFooter>
    </Card.Body>
  </Card>
    </Col>
  )
}

export default CardsDest
