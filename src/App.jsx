import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Remeras from './Pages/Remeras'
import Pantalones from './Pages/Pantalones'
import Login from './Pages/Login'
import Staff from './Pages/Staff'
import CrearRemeras from './Pages/CrearRemeras'
import ActualizarRemeras from './Pages/ActualizarRemeras'
import AccionesRemeras from './Pages/AccionesRemeras'
import CrearPantalones from './Pages/CrearPantalones'
import AccionesPantalones from './Pages/AccionesPantalones'
import ActualizarPantalones from './Pages/ActualizarPantalones'
import VerRemeras from './Pages/VerRemeras'
import VerPantalones from './Pages/VerPantalones'
import Contactanos from './Pages/Contactanos'
import ErrorPago from './Pages/ErrorPago'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/camisetas' element={<Remeras />} />
        <Route path='/pantalones' element={<Pantalones />} />
        <Route path='/loginStaff' element={<Login />} />
        <Route path='/staff' element={<Staff />} />
        <Route path='/crearCamisetas' element={<CrearRemeras />} />
        <Route path='/accionesCamisetas' element={<AccionesRemeras />} />
        <Route path='/actualizarCamisetas/:id' element={<ActualizarRemeras />} />
        <Route path='/verCamisetas/:id' element={<VerRemeras />} />
        <Route path='/verPantalones/:id' element={<VerPantalones />} />
        <Route path='/crearPantalones' element={<CrearPantalones />} />
        <Route path='/accionesPantalones' element={<AccionesPantalones />} />
        <Route path='/actualizarPantalones/:id' element={<ActualizarPantalones />} />
        <Route path='/contactanos' element={<Contactanos/>} />
        <Route path='/errorCompra' element={<ErrorPago/>} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
