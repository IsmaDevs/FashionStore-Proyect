import {Col, Card, CardFooter} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const CardsPantalones = ({id, nombre, precio,imagen}) => {
  return (
    <Col md={3}>
    <br />
    <Card className='destacados-card' style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imagen} />
    <Card.Body>
      <Card.Subtitle>#{id} {nombre}</Card.Subtitle>
      <Card.Title className='precio mt-2'>
        <strong className='text-danger'>{precio}</strong>
      </Card.Title>
      <CardFooter className='bg-white'>
      <Link className='btn btn-dark' to={`/verPantalones/${id}`}><i className="fa-regular fa-eye"> </i> Ver Mas</Link>
      </CardFooter>
    </Card.Body>
  </Card>
    </Col>
  )
}

export default CardsPantalones
