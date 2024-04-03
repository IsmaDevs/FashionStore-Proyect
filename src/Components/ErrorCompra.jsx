import {Link} from 'react-router-dom'
import '../css/ErrorCompra.css'

const ErrorCompra = () => {

  return (
<div className="aviso-card">
  <div className="header">
    <span className="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
          clipRule="evenodd"
        ></path>
      </svg>
    </span>
    <p className="alert">IMPORTANTE!</p>
    <button className="closeButton"><Link to={'/'} className='text-decoration-none text-black'>x</Link></button>
  </div>

  <p className="message">
    No es posible procesar la compra, lamentamos informar
    que nos encontramos en mantenimiento, intentelo de nuevo mas tarde.
    
  </p>

  <div className="actions">
    <Link to={"/"} className="read"> Volver a la página principal </Link>
  </div>
</div>

  )
}

export default ErrorCompra
