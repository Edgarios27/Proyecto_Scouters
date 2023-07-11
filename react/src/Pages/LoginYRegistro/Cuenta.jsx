import React from 'react'
import { useNavigate } from "react-router-dom";



export function Cuenta() {
    
    
    const navigate = useNavigate();


    const onLogout = () => {
       
        navigate('/', { replace: true });
      };
  return (
    <div>
       <button className="logoutLogin" onClick={onLogout}> Cerrar sesíon </button>
    </div>
  )
}
