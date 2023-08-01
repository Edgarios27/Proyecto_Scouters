import React from 'react';
import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import {Landing} from './Pages/Landing/Landing'
import { AvisoLegal } from './Pages/AvisoLegal/AvisoLegal';
import { InterfazJugadores } from './Pages/InterfazJugadores/InterfazJugadores';
import { Login } from './Pages/LoginYRegistro/Login';
import { Registro } from './Pages/LoginYRegistro/Registro';
import { InterfazInformes } from './Pages/InterfazInformes/InterfazInformes';
import { FichaJugador } from './Pages/FichaJugador/FichaJugador';
import {TokenExpirado} from './Pages/LoginYRegistro/TokenExpirado';
import { InformeJugador } from './Pages/InformeJugador/Informe';
import { PasswordReset } from './Pages/LoginYRegistro/PasswordReset';
import { CompararJugadores } from './Components/Metricas/CompararJugadores';


export function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}  />
        <Route path="/AvisoLegal" element={<AvisoLegal/>}  />
        <Route path="/InterfazJugadores" element={<InterfazJugadores/>}  />
        <Route path='/login' element={<Login/>} />
        <Route path='/TokenExpirado' element={<TokenExpirado />} />
        <Route path='/registro' element={<Registro/>} />
        <Route path='/InterfazInformes' element={<InterfazInformes/>} /> 
        <Route path='/FichaJugador/:id' element={<FichaJugador/>} />
        <Route path='/Informe/:id' element={<InformeJugador/>} />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route path="/comparar" element={<CompararJugadores />} />
      </Routes>
    </BrowserRouter>
=======
import { Registro } from './Pages/LoginYRegistro/Registro';
import { Login } from './Pages/LoginYRegistro/Login';
import { AuthContext } from './AuthContext/AuthContext';
import { useContext } from 'react';
import { BrowserRouter,Routes,Route,Navigate, } from 'react-router-dom';
import { Error } from './Pages/LoginYRegistro/Error';
import { Cuenta } from './Pages/LoginYRegistro/Cuenta';
import { Prueba } from './Pages/LoginYRegistro/Prueba';





export function App() {
  const {isLoggedIn } = useContext(AuthContext);
  return ( 
   
  
      <BrowserRouter> 
          <Routes>
            {/* <Route path="/" element={<Navbar/>} /> */}
            <Route path='/login' element={<Login/>} />
            <Route path='/error' element={<Error/>} />
            <Route path='/registro' element={<Registro/>} />
            <Route path='/cuenta' element={<Cuenta/>} />
            <Route path='/prueba' element={<Prueba/>} />

             {/* <Route path='/confirm/:token'element={isLoggedIn ? <Login /> : <Navigate to='/login'/>} /> */}
             <Route path='/cuenta'element={isLoggedIn ? <Cuenta /> : <Navigate to='/login'/>} />
          </Routes>
    </BrowserRouter>

>>>>>>> 3de3b527cf41b12ca0381bc251df9af783333907
  );
}



