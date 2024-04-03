import { useState } from 'react'
import {Link} from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
import '../css/Staff.css'

const MainStaff = () => {

  const [showCrear, setShowCrear] = useState(false);
  const [showOperaciones, setShowOperaciones] = useState(false)

  const handleCloseCrear = () => setShowCrear(false);
  const handleCloseOperaciones = () => setShowOperaciones(false)

  const handleShowCrear = () => setShowCrear(true);
  const handleShowOperaciones = () => setShowOperaciones(true);

  return (
    <div>
    <div className="mt-5 title-container">
        <div className="title">
            <h4>Selecciona la Accion que desea operar</h4>
        </div>
    <div className="mb-5 operaciones-container">
        <div className="mt-5 operaciones">
            <Button className='me-5' variant="success" onClick={handleShowCrear}>Crear Producto</Button>
            <Button className='me-5' variant="success" onClick={handleShowOperaciones}>Otras Operaciones</Button>
        </div>
    </div>
    </div>

      <Modal show={showCrear} onHide={handleCloseCrear}>
        <Modal.Header closeButton>
          <Modal.Title>Selecciona la Categoria</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex justify-content-center'>
          <Link to={'/crearCamisetas'} className='mt-3 mb-4 me-4 btn btn-primary'>
            Camisetas
          </Link>
          <Link to={'/crearPantalones'} className='mt-3 mb-4 me-4 btn btn-primary'>
            Pantalones
          </Link>
          </Modal.Body>
      </Modal>

      <Modal show={showOperaciones} onHide={handleCloseOperaciones}>
        <Modal.Header closeButton>
          <Modal.Title>Selecciona la Categoria</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex justify-content-center'>
          <Link to={'/accionesCamisetas'} className='mt-3 mb-4 me-4 btn btn-primary'>
            Camisetas
          </Link>
          <Link to={'/accionesPantalones'} className='mt-3 mb-4 me-4 btn btn-primary'>
            Pantalones
          </Link>
          </Modal.Body>
      </Modal>
      
    </div>
  )
}

export default MainStaff
