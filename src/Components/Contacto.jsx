import '../css/Contacto.css'
const Contacto = () => {
  return (
    <div>
      <div className="zona-info">
        <br />
        <h4>Encuentranos en: Zona Ubicada</h4>
        <br />
      </div>
      <div className="info-tienda">
        <div className="direccion">
            <h4>📌 Dirección</h4>
            <p>Direccion especifica de la tienda</p>
        </div>
        <div className="horario">
            <h5>⌚ Horario</h5>
            <p>Horarios de atención</p>
        </div>
        <div className="telefono">
            <h5>📱 Whatsapp</h5>
            <p>Numero de Contacto</p>
        </div>
        <div className="correo">
            <h5>✉️ Email</h5>
            <p>Correo de Contacto</p>
        </div>
      </div>
    </div>
  )
}

export default Contacto
