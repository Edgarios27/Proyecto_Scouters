
// import React, { useState } from 'react';
// import './register.css';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export const Registro = () => {
//  const [nombre, setNombre] = useState('');
// const [apellidos, setApellidos] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [club, setClub] = useState('');
// const [nif, setNif] = useState('');
// const [cargo, setCargo] = useState('');
// const [país, setPaís] = useState('');
// const [ciudad, setCiudad] = useState('');
// const [teléfono, setTeléfono] = useState('');;
// const [registrationSuccess, setRegistrationSuccess] = useState(false);
//   const navigate = useNavigate();

//   const handleRegister = async (event) => {
//     event.preventDefault();

//     // Enviar solicitud de registro al backend
//     try {
//       const response = await axios.post('http://localhost:8000/users/register', {
//         nombre,apellidos, password,nif,club,país,ciudad,teléfono,email,cargo
//       });

//       if (response.status === 201) {
//         // Registro exitoso, mostrar notificación y redireccionar a la página de login
//         setRegistrationSuccess(true);
//         Swal.fire({
//           position: 'top-end',
//           icon: 'success',
//           title: 'Registro realizado con éxito',
//           showConfirmButton: false,
//           timer: 3500,
//           toast: true,
//         });
//       } else {
//         setRegistrationSuccess(false);
//       }
//     } catch (error) {
//       // Manejo de errores de la solicitud
//       setRegistrationSuccess(false);
//       Swal.fire({
//         position: 'top-end',
//         icon: 'error',
//         iconColor: 'black',
//         confirmButtonColor: '#FF4000',
//         title: 'Oops...',
//         text: 'Error al registrar',
//         timer: 6000,
//         toast: true,
//         footer: '<span class="alert" href="">Debes rellenar los campos,recuerda la contraseña debe incluir al menos una letra mayúscula y un carácter especial</span>',
//       });
//       console.error('Error al registrar el usuario', error);
//     }
//   };

//   return (
//     <div className="login-container2">
//       <form className="loginForm">
//         <header className="Header">
//           <h1 className="headerTitle">REGISTRATE</h1>
//         </header>

//         <input
//           className="inputField"
//           type="text"
//           value={nombre}
//           onChange={(event) => setNombre(event.target.value)}
//           required
//           placeholder="Nombre"
//         />
//              <input
//           className="inputField"
//           type="text"
//           value={apellidos}
//           onChange={(event) => setApellidos(event.target.value)}
//           required
//           placeholder="Apellidos"
//         />
//         <input
//           className="inputField"
//           type="text"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//           required
//           placeholder="Email"
//         />
//         <input
//           className="inputField"
//           type="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//           required
//           placeholder="Contraseña"
//         />
//          <input
//           className="inputField"
//           type="text"
//           value={nif}
//           onChange={(event) =>setNif(event.target.value)}
//           required
//           placeholder="NIF"
//         />
//         <input
//           className="inputField"
//           type="text"
//           value={cargo}
//           onChange={(event) =>setCargo(event.target.value)}
//           required
//           placeholder="Cargo"
//         />
//         <input
//           className="inputField"
//           type="text"
//           value={país}
//           onChange={(event) =>setPaís(event.target.value)}
//           required
//           placeholder="País"
//         />
//         <input
//           className="inputField"
//           type="text"
//           value={ciudad}
//           onChange={(event) =>setCiudad(event.target.value)}
//           required
//           placeholder="Ciudad"
//         />
//         <input
//           className="inputField"
//           type="text"
//           value={club}
//           onChange={(event) =>setClub(event.target.value)}
//           required
//           placeholder="Club"
//         />
//         <input
//           className="inputField"
//           type="text"
//           value={teléfono}
//           onChange={(event) =>setTeléfono(event.target.value)}
//           required
//           placeholder="Teléfono"
//         />
//         <div className="Register">
//           <div className="registerContent">
//             <span className="register-text">¿Tienes una cuenta?</span>
//             <a href="/" className="loginLink">
//               Inicia Sesión
//             </a>
//           </div>
//           <button type="onClick" onClick={handleRegister} className="registerButton">
//             REGISTRO
//           </button>
//         </div>
//       </form>
//       {registrationSuccess && (
//         <div className="registrationSuccessMessage">
//           <p>Se ha enviado un correo electrónico de confirmación a {email}. Por favor, sigue las instrucciones en el correo electrónico para confirmar tu cuenta.</p>
//         </div>
//       )}
//     </div>
//   );
// };






import React, { useState } from 'react';
import './register.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Button,TextField,Grid} from "@material-ui/core";


export const Registro = () => {
 const [nombre, setNombre] = useState('');
const [apellidos, setApellidos] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [club, setClub] = useState('');
const [nif, setNif] = useState('');
const [cargo, setCargo] = useState('');
const [país, setPaís] = useState('');
const [ciudad, setCiudad] = useState('');
const [teléfono, setTeléfono] = useState('');;
const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    // Enviar solicitud de registro al backend
    try {
      const response = await axios.post('http://localhost:8000/users/register', {
        nombre,apellidos, password,nif,club,país,ciudad,teléfono,email,cargo
      });

      if (response.status === 201) {
        // Registro exitoso, mostrar notificación y redireccionar a la página de login
        setRegistrationSuccess(true);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Registro realizado con éxito',
          showConfirmButton: false,
          timer: 3500,
          toast: true,
        });
      } else {
        setRegistrationSuccess(false);
      }
    } catch (error) {
      // Manejo de errores de la solicitud
      setRegistrationSuccess(false);
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        iconColor: 'black',
        confirmButtonColor: '#FF4000',
        title: 'Oops...',
        text: 'Error al registrar',
        timer: 6000,
        toast: true,
        footer: error.response.data.message,
      });
      console.error('Error al registrar el usuario', error);
    }
  };
  const inputStyle = {
    backgroundColor: 'rgba(45, 43, 43, 0.498)',
    height: '2.8rem',
  };
 
  
  return (
    <div className='login-container2'>
  <form className='formRegister' onSubmit={handleRegister}  >
    <header className="Header">
      <h1 className="headerTitle">REGISTRATE</h1>
    </header>
    
  
    <Grid  container spacing={2}className='grid' style={{width:"55%",margin:"auto"}}  >
 
        <Grid item xs={12} sm={12}>
          <TextField 
            label="Nombre"
            variant="outlined"
            fullWidth
            style={{outlineOffset:"red "}}
            value= {nombre} 
            className="dark-input"
            onChange={(event) => setNombre(event.target.value)}
            InputProps={{
              style: inputStyle,
              classes: { focused: 'input-focused' },
              onBlur: (event) =>
                (event.target.style.border = inputStyle.outline),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            label="Apellidos"
            variant="outlined"
            fullWidth
            value={apellidos}
            onChange={(event) => setApellidos(event.target.value)}
            InputProps={{
              style: inputStyle,
              classes: { focused: 'input-focused' },
              onBlur: (event) =>
                (event.target.style.border = inputStyle.outline),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            InputProps={{ style: inputStyle }}
            
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            label="Contraseña"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            InputProps={{ style: inputStyle }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            label="NIF"
            variant="outlined"
            fullWidth
            value={nif}
            onChange={(event) => setNif(event.target.value)}
            InputProps={{ style: inputStyle }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            label="Club"
            variant="outlined"
            fullWidth
            value={club}
            onChange={(event) => setClub(event.target.value)}
            InputProps={{ style: inputStyle }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            label="País"
            variant="outlined"
            fullWidth
            value={país}
            onChange={(event) => setPaís(event.target.value)}
            InputProps={{ style: inputStyle }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            label="Ciudad"
            variant="outlined"
            fullWidth
            value={ciudad}
            onChange={(event) => setCiudad(event.target.value)}
            InputProps={{ style: inputStyle }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            label="Teléfono"
            variant="outlined"
            fullWidth
            value={teléfono}
            onChange={(event) => setTeléfono(event.target.value)}
            InputProps={{ style: inputStyle }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            label="Cargo"
            variant="outlined"
            fullWidth
            value={cargo}
            onChange={(event) => setCargo(event.target.value)}
            InputProps={{ style: inputStyle }}
          />
        </Grid>
        <Grid item xs={12} >
          <Button type="submit" variant="contained" style={{background: '#C7F55C',marginTop:"0rem",width:"15rem",}} className=".MuiButton-root">   
            Enviar
          </Button>
        </Grid>
      </Grid>
      <div className="registerContent">
         <span className="register-text">¿Tienes una cuenta?</span>
           <a href="/confirm/:token" className="loginLink">
           Inicia Sesión
           </a>
      </div>
    </form>
    </div>
  );
};

