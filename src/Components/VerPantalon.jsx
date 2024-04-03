import { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";
import "../css/VerProducto.css";
const VerPantalon = () => {

    const { id } = useParams();

    const [datos, setDatos] = useState([]);
    const [contador, setContador] = useState(1)
  
    const obtenerDatos = async () => {
      let response = await axios.get(`http://localhost:3001/pantalones/${id}`);
      setDatos(response.data);
    };
  
    const Sumar = () => {
      if(contador < 10) {
  
        setContador(contador + 1)
      }
    }
  
    const Restar = () => {
      if(contador != 1) {
  
        setContador(contador - 1)
      }
    }
  
    useEffect(() => {
      obtenerDatos();
    }, []);
  
    return (
      <div>
        <div className="container">
          <div>
            <img className="imagen" src={datos.imagen} alt="" />
          </div>
          <div className="info-camiseta">
            <h4>{datos.nombre}</h4>
            <div className="camiseta-precio">
              <hr />
              <p>{datos.precio}</p>
            </div>
            <div className="info-cuotas">
              <br />
              <p>
                Hasta 3 cuotas sin interés con <span>tarjeta de CRÉDITO</span>
              </p>
              <p className="detalles">Ver más detalles de pago</p>
            </div>
            <div className="info-talles">
              <div className="talle-title">
                <p>TALLES DISPONIBLES</p>
              </div>
              <div className="talles">
                <div className="checkbox-wrapper-16">
                  <label className="checkbox-wrapper">
                    <input className="checkbox-input" type="checkbox" />
                    <span className="checkbox-tile">
                      <span className="checkbox-icon">
                        <div>
                          <i className="fa-solid fa-s"></i>
                        </div>
                      </span>
                    </span>
                  </label>
                </div>
              </div>
              <br />
              <div className="agregar-producto">
              <div className="me-4 contador">
              <button onClick={Restar} className="mb-2 btnCount">-</button>
              <div className="cantidad">{contador}</div>
              <button onClick={Sumar} className="mb-2 btnCount btnSumar">+</button>
          </div>
              
              <Link to={'/errorCompra'} className="text-decoration-none button">
                <svg
                  viewBox="0 0 16 16"
                  className="me-1 mb-2 bi bi-cart-check"
                  height="25"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                >
                  <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                </svg>
                <p className="text">Agregar al carrito</p>
              </Link>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="info-extra">
          <div className="info-desc">
            <div className="desc">
              <br />
              <br />
              <h5>Descripcion</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, iure?
              </p>
            </div>
            <div className="info-medidas">
              <h5>Medidas Aproximadas</h5>
      <table>
        <tbody>
          <tr className="t-header">
            <td>Talles</td>
            <td>Cintura</td>
            <td>Cadera</td>
            <td>Largo</td>
          </tr>
          <tr>
            <td>S</td>
            <td>46cm</td>
            <td>48cm</td>
            <td>97cm</td>
          </tr>
          <tr>
            <td>M</td>
            <td>48cm</td>
            <td>50cm</td>
            <td>98cm</td>
          </tr>
          <tr>
            <td>L</td>
            <td>50cm</td>
            <td>52cm</td>
            <td>100cm</td>
          </tr>
        </tbody>
      </table>
          </div>
          </div>
          <div className="info-cuidados">
            <div className="cuidados">
              <h5>Cuidados</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, commodi?</p>
            </div>
          </div>
          </div>
      </div>
  )
}

export default VerPantalon
