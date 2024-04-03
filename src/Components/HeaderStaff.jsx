import {Navbar, Nav, NavDropdown, Container, Form, Button} from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'
import logoMF from '../assets/logoMF.png'
import { useState } from 'react'

const HeaderStaff = () => {

    const Navigate = useNavigate()
  
    const [filtro, setFiltro] = useState('')
  
    const handleSubmit = () => {
     
      if (filtro === 'camiseta' || filtro === 'remera') {
          Navigate('/camisetas')
      } else if (filtro === 'pantalon' || filtro === 'pantalones') 
        Navigate('/pantalones') 
        else 
        alert("Contenido no disponible")
    }

  return (
    <div>
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='nav-header' fluid>
      <Navbar.Brand href="/">
            <img
              src={logoMF}
              width="80"
              height="50"
              className="me-3 d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='me-3'>
              <Link className='text-decoration-none text-black' to={'/'}>Inicio</Link>
            </Nav.Link>
            <NavDropdown className='me-3' title="Tienda" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <Link className='text-decoration-none text-black' to={"/camisetas"}>Remeras</Link>
              </NavDropdown.Item>
              
              <NavDropdown.Item>
                <Link className='text-decoration-none text-black' to={'/pantalones'}>Pantalones</Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className='me-3'>

              <Link className='text-decoration-none text-black' to={'/contactanos'}>Contactanos</Link>
              
            </Nav.Link>
          </Nav>
          <Form onSubmit={handleSubmit} className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-3"
              onChange={(e) => {setFiltro(e.target.value.toLocaleLowerCase())}}
              aria-label="Search"
            />
            <Button type='submit' variant="outline-success"><i className="fa-solid fa-magnifying-glass"></i></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default HeaderStaff
