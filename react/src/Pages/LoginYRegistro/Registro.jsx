<<<<<<< HEAD
import React, { useState } from "react";
import axios from "axios";
import {
  Grid,
  TextField,
  Button,
  Checkbox,
  Typography,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Input,
} from "@mui/material";
import { useMediaQuery } from "@material-ui/core";
import Radio from "@mui/material/Radio";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './register.css'
=======
import { useState } from "react";
import "./register.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, TextField, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  FormGroup,
  Checkbox,
  Typography,
} from "@mui/material";
import { useMediaQuery } from "@material-ui/core";
import "animate.css/animate.min.css";
>>>>>>> 3de3b527cf41b12ca0381bc251df9af783333907

export const Registro = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [club, setClub] = useState("");
  const [nif, setNif] = useState("");
  const [post, setPost] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
<<<<<<< HEAD
  const [registrationError, setRegistrationError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:600px)");
  const isValidPassword = (password) => {
    const passwordPWD_REGEX =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,60}$/;
    return passwordPWD_REGEX.test(password);
  };

  const [imageUploaded, setImageUploaded] = useState(false);

  const inputStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.498)",
    height: "2.8rem",
    helperText: { fontSize: "30px" },
    input: {
      display: "none",
    },
  };

  const handleChange = (event) => {
    setPost(event.target.value);
  };

=======
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false); //

  const matches = useMediaQuery("(min-width:600px)");

  //funcion para cambiar de color el ckeckbox//
>>>>>>> 3de3b527cf41b12ca0381bc251df9af783333907
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

<<<<<<< HEAD
  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
    setImageUploaded(true);
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!selectedImage) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        iconColor: "black",
        background: "rgba(255,255,255,0.5)",
        showConfirmButton: false,
        title: "Debes adjuntar el N.I.F",
        timer: 4500,
        toast: true,
        color: "black",
      });
      return;
    }

    if (!isValidPassword(password)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        iconColor: "black",
        background: "rgba(255,255,255,0.5)",
        showConfirmButton: false,
        title: "La contraseña no es válida",
        timer: 4500,
        toast: true,
        color: "black",
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", selectedImage);

      await axios.post("http://localhost:8000/uploads/nif", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
=======
  //funcion para cambiar el color de los selectores//
  const handleChange = (event) => {
    setPost(event.target.value);
  };

  //función para enviar el formulario al hacer click al boton registrar//
  const handleRegister = async (event) => {
    event.preventDefault();

    // Enviar solicitud de registro al backend
    try {
>>>>>>> 3de3b527cf41b12ca0381bc251df9af783333907
      const response = await axios.post(
        "http://localhost:8000/users/register",
        {
          name,
          surname,
          password,
          nif,
          club,
          country,
          city,
          phone,
          email,
          post,
        }
      );
<<<<<<< HEAD
      if (response.status === 201) {
        Swal.fire({
          position: "top-end",
=======

      if (response.status === 201) {
        // Registro exitoso, mostrar notificación y redireccionar a la página de login
        setRegistrationSuccess("true");
        Swal.fire({
          position: "top-end",

>>>>>>> 3de3b527cf41b12ca0381bc251df9af783333907
          icon: "success",
          title: "Registro realizado con éxito",
          footer: "Revisa tu email para validar tu cuenta",
          color: "black",
          showConfirmButton: false,
<<<<<<< HEAD
          timer: 4500,
          toast: true,
=======
          timer: 3500,
          toast: "true",
>>>>>>> 3de3b527cf41b12ca0381bc251df9af783333907
        });
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      } else {
<<<<<<< HEAD
        console.error("Error al registrar el usuario", response.data.message);
        Swal.fire({
          icon: "error",
          title: "Error al registrar",
          showConfirmButton: false,
          toast: true,
          position: "top-end",
          iconColor: "black",
          color: "black",
          background: "rgba(255,255,255,0.5)",

        });
      }
    } catch (error) {
      console.error("Email ya esta en uso", error);
      Swal.fire({
        icon: "error",
        title: `${error.response.data.message}`,
        showConfirmButton: false,
        toast: true,
        position: "top-end",
        iconColor: "black",
        color: "black",
        background: "rgba(255,255,255,0.5)",

      });
=======
        setRegistrationSuccess(false);
      }
    } catch (error) {
      // Manejo de errores de la solicitud
      setRegistrationSuccess(false);
      Swal.fire({
        position: "top-end",
        icon: "error",
        iconColor: "black",
        background: "rgba(255,255,255,0.5)",
        showConfirmButton: false,
        title: `<h2 style="font-size:1rem; font-family: 'Oswald', sans-serif">${error.response.data.message}</h2>`,
        timer: 6500,
        toast: "true",
        color: "white",
      });
      console.error("Error al registrar el usuario", error);
>>>>>>> 3de3b527cf41b12ca0381bc251df9af783333907
    }
  };

  const showAlert = () => {
    Swal.fire({
<<<<<<< HEAD
      title: "Política de privacidad",
      confirmButtonColor: "#ace32d",
=======
      title: "Politica de privacidad",
>>>>>>> 3de3b527cf41b12ca0381bc251df9af783333907
      html:
        "<p>En Scouters, nos tomamos muy en serio la privacidad de nuestros usuarios y clientes. Por esta razón, hemos elaborado esta política de privacidad para informarle sobre cómo recopilamos, utilizamos, compartimos y protegemos su información personal.</p>" +
        "<p>1. Información que recopilamos</p>" +
        "<p>Recopilamos información personal que usted nos proporciona directamente, como su nombre, dirección de correo electrónico, número de teléfono y otra información que pueda ser necesaria para proporcionarle nuestros servicios. También podemos recopilar información automáticamente a través de cookies y otras tecnologías de seguimiento.</p>" +
        "<p>2. Uso de la información</p>" +
        "<p>Utilizamos la información que recopilamos para proporcionarle nuestros servicios, mejorar nuestros productos y servicios, personalizar su experiencia y comunicarnos con usted. También podemos utilizar su información para fines de marketing y publicidad, siempre y cuando tengamos su consentimiento.</p>" +
        "<p>3. Compartir información</p>" +
<<<<<<< HEAD
        "<p>No compartimos su información personal con terceros, excepto en los casos en que sea necesario para proporcionarle nuestros servicios o cuando tengamos su consentimiento. También podemos compartir su información en caso de que sea requerido por la ley o por una orden judicial.</p>",
      showClass: {
        popup: "animate_animated animate_fadeInDown",
      },
      hideClass: {
        popup: "animate_animated animate_fadeOutUp",
      },
    });
  };

  return (
    <div className="register-container2">
      <form
        className="formRegister2"
        autoComplete="off"
        method="post"
        action="/save-image"
        encType="multipart/form-data"
        onSubmit={handleRegister}
      >
        <header className="HeaderRegister2">
          <h1 className="headerTitle2">REGISTRATE</h1>
        </header>
        <Grid
          container
          spacing={2}
          className="gridRegister2"
          style={{ width: "45%", margin: "auto" }}
          direction="row"
        >
          <Grid item xs={6} sm={6}>
=======
        "<p>No compartimos su información personal con terceros, excepto en los casos en que sea necesario para proporcionarle nuestros servicios o cuando tengamos su consentimiento. También podemos compartir su información en caso de que sea requerido por la ley o por una orden judicial.</p>" +
        "<p>4. Protección de la información</p>" +
        "<p>Tomamos medidas de seguridad razonables para proteger su información personal contra el acceso no autorizado, la divulgación, la alteración o la destrucción. Sin embargo, no podemos garantizar la seguridad absoluta de su información.</p>" +
        "<p>5. Cambios en la política de privacidad</p>" +
        "<p>Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Cualquier cambio será efectivo inmediatamente después de su publicación en nuestro sitio web.</p>" +
        "<p>Si tiene alguna pregunta o inquietud sobre nuestra política de privacidad, no dude en ponerse en contacto con nosotros.</p>",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  const inputStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.498)",
    height: "2.8rem",
    helperText: { fontSize: "30px" },
    input: {
      display: "none",
    },
  };

  return (
    <div className="register-container"  autocomplete="off">
      <form className="formRegister" autocomplete="off" onSubmit={handleRegister}>
        <header className="HeaderRegister">
          <h1 className="headerTitle">REGISTRATE</h1>
        </header>

        <Grid
          container
          spacing={2}
          className="gridRegister"
          style={{ width: "45%", margin: "auto", height: "10%" }}
          direction="row"
          autocomplete="off"
        >
          <Grid className="gridRegister"   item xs={6} sm={6}>
>>>>>>> 3de3b527cf41b12ca0381bc251df9af783333907
            <TextField
              id="nombre"
              label="Nombre"
              variant="outlined"
              fullWidth
              required
              style={{ outlineOffset: "red " }}
              value={name}
<<<<<<< HEAD
              className="dark-input"
              onChange={(event) => {
                const alphabeticValue = event.target.value
                  .replace(/[^a-zA-Z\sÑñ]/g, "")
                  .toUpperCase();
                setName(alphabeticValue);
              }}
=======
              autocomplete="off"
              className="dark-input"
              onChange={(event) => setName(event.target.value)}
>>>>>>> 3de3b527cf41b12ca0381bc251df9af783333907
              InputProps={{ style: inputStyle }}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              id="apellido"
              label="Apellidos"
              variant="outlined"
              fullWidth
              required
              value={surname}
<<<<<<< HEAD
              onChange={(event) => {
                const alphabeticValue = event.target.value
                  .replace(/[^a-zA-Z\sÑñ]/g, "")
                  .toUpperCase();
                setSurname(alphabeticValue);
              }}
=======
              onChange={(event) => setSurname(event.target.value)}
>>>>>>> 3de3b527cf41b12ca0381bc251df9af783333907
              InputProps={{ style: inputStyle }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              InputProps={{ style: inputStyle }}
            />
          </Grid>
<<<<<<< HEAD

=======
>>>>>>> 3de3b527cf41b12ca0381bc251df9af783333907
          <Grid item xs={12} sm={12}>
            <TextField
              id="contraseña"
              label="Contraseña"
              variant="outlined"
              type="password"
              fullWidth
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              InputProps={{ style: inputStyle }}
<<<<<<< HEAD
              helperText="Debe tener al menos 8 caracteres y contener al menos un número y un carácter especial"
=======
              helperText="Debe tener min 8 caracteres y contener al menos un número y un caracter especial"
>>>>>>> 3de3b527cf41b12ca0381bc251df9af783333907
              FormHelperTextProps={{
                style: { color: "white", fontSize: "12px", fontWeight: "200 " },
              }}
            />
          </Grid>
<<<<<<< HEAD
          <Grid item xs={6} sm={6}>
=======
          <Grid item xs={12} sm={6}>
>>>>>>> 3de3b527cf41b12ca0381bc251df9af783333907
            <TextField
              id="nif"
              label="NIF"
              variant="outlined"
              fullWidth
              required
              value={nif}
              onChange={(event) => setNif(event.target.value)}
              InputProps={{ style: inputStyle }}
            />
<<<<<<< HEAD
            <Grid item xs={12} sm={12}>
              <label htmlFor="upload-button">
                <Input
                  id="upload-button"
                  type="file"
                  onChange={handleImageChange}
                  inputProps={{ style: { display: "none" } }}
                />
                <Button
                  variant="contained"
                  component="span"
                  sx={{
                    marginTop: "10px",
                    bgcolor: imageUploaded ? "#4CAF50" : "#CCCCCC",
                    height: "18px",
                    color: "black",
                    "&:hover": {
                      bgcolor: "#6e6e6e",
                      color: "white",
                    },
                  }}
                >
                  {imageUploaded ? "NIF Adjuntado" : "Adjuntar NIF"}
                </Button>
              </label>
            </Grid>
=======
            <input
              className="inputNif"
              accept="image/*"
              id="dni-file"
              type="file"
            />
            <label htmlFor="dni-file">
              <Button style={{ color: "#C7F55C" }} component="span">
                Adjuntar NIF
              </Button>
            </label>
>>>>>>> 3de3b527cf41b12ca0381bc251df9af783333907
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              id="club"
              label="Club"
              variant="outlined"
              fullWidth
              required
              value={club}
<<<<<<< HEAD
              onChange={(event) => {
                const alphabeticValue = event.target.value
                  .replace(/[^a-zA-Z\sÑñ]/g, "")
                  .toUpperCase();
                setClub(alphabeticValue);
              }}
              InputProps={{ style: inputStyle }}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
=======
              onChange={(event) => setClub(event.target.value)}
              InputProps={{ style: inputStyle }}
            />
          </Grid>
          <Grid item xs={6} sm={5}>
>>>>>>> 3de3b527cf41b12ca0381bc251df9af783333907
            <TextField
              id="pais"
              label="País"
              variant="outlined"
              fullWidth
              required
              value={country}
<<<<<<< HEAD
              onChange={(event) => {
                const alphabeticValue = event.target.value
                  .replace(/[^a-zA-Z\sÑñ]/g, "")
                  .toUpperCase();
                setCountry(alphabeticValue);
              }}
              InputProps={{ style: inputStyle, width: "30rem" }}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
=======
              onChange={(event) => setCountry(event.target.value)}
              InputProps={{ style: inputStyle, width: "30rem" }}
            />
          </Grid>
          <Grid item xs={6} sm={7}>
>>>>>>> 3de3b527cf41b12ca0381bc251df9af783333907
            <TextField
              id="ciudad"
              label="Ciudad"
              variant="outlined"
              fullWidth
              required
              value={city}
<<<<<<< HEAD
              onChange={(event) => {
                const alphabeticValue = event.target.value
                  .replace(/[^a-zA-Z\sÑñ]/g, "")
                  .toUpperCase();
                setCity(alphabeticValue);
              }}
              InputProps={{ style: inputStyle }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
=======
              onChange={(event) => setCity(event.target.value)}
              InputProps={{ style: inputStyle }}
            />
          </Grid>
          <Grid item xs={6} sm={12} noValidate>
>>>>>>> 3de3b527cf41b12ca0381bc251df9af783333907
            <TextField
              id="telefono"
              label="Teléfono"
              variant="outlined"
              fullWidth
              required
              value={phone}
<<<<<<< HEAD
              onChange={(event) => {
                const numericValue = event.target.value.replace(/\D/g, ""); // Filtra solo los caracteres numéricos
                setPhone(numericValue);
              }}
              inputProps={{
                inputMode: "numeric", // Restringe la entrada a caracteres numéricos
              }}
              InputProps={{ style: inputStyle }}
            />
          </Grid>
          <Typography
            sx={{
              marginLeft: matches ? "6.5em" : "2.5em",
              marginTop: "5px",
              color: "white",
            }}
          >
            ELIGE TU PERFIL
          </Typography>
          <FormLabel sx={{ display: "flex" }}></FormLabel>
          <RadioGroup
            required
            onChange={handleChange}
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            sx={{
              display: "flex",
              flexDirection: matches ? "row" : "column",
              marginLeft: matches ? "6em" : "4.5rem",
            }}
          >
            <FormControlLabel
              required
              value="Otro"
              control={
                <Radio
                  color="default"
                  sx={{
                    "&.Mui-checked": { color: "rgba(179, 221, 82, 1)" },
                    color: post === "jugador" ? "#C7F55C " : "",
                  }}
                />
              }
              label="Otro"
              sx={{ color: "black" }}
            />
            <FormControlLabel
              required
              value="Ojeador"
              control={
                <Radio
                  color="default"
                  sx={{
                    "&.Mui-checked": { color: "rgba(179, 221, 82, 1)" },
                    color: post === "jugador" ? "#C7F55C " : "",
                  }}
                />
              }
              label="Ojeador"
              sx={{ color: "black" }}
            />
          </RadioGroup>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              margin: "auto",
            }}
          >
            <Typography
              onClick={showAlert}
              variant="span"
              sx={{
                color: "white",
                marginTop: matches ? "10px" : "10px",
                cursor: "pointer",
              }}
            >
              Aceptar términos y condiciones
            </Typography>
            <Checkbox
              required
              className="check"
              checked={isChecked}
              onChange={handleCheckboxChange}
              style={{
                color: isChecked ? "#C7F55C" : "white",
                marginBottom: matches ? "10px" : "30px",
              }}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          style={{
            background: "#C7F55C",
            width: "14em",
            justifyContent: "center",
            alignItems: "center",
            height: matches ? "2.5rem" : "1.8rem",
            color: "black",
            className: "button_r",
            marginLeft: matches ? "2em" : "2px",
            marginTop: "20px",
          }}
        >
          Enviar
        </Button>
        <div className="Account_R">
          <span className="span">¿Tienes cuenta?</span>
          <Link to="/login" className="linkToLogin">
=======
              onChange={(event) => setPhone(event.target.value)}
              InputProps={{ style: inputStyle }}
            />
          </Grid>
          <RadioGroup style={{margin:"auto",display:"flex",justifyContent:"space-evenly",paddingTop:"10px",marginLeft:"3em",gap:"3rem"}}
          row
          aria-label="rol"
          name="rol"
          value={post}
          onChange={handleChange}
        >
          
          <FormControlLabel
            value="ojeador"
            control={
              <Radio
                style={{
                  color: post === 'ojeador' ? "#C7F55C" : '',
                }}
              />
            }
            label={
              <Typography variant="span" style={{color: "rgba(255, 255, 255, 0.79)" }}>
              Jugador
              </Typography>
            }
          />
          
          <FormControlLabel
            value="jugador"
            control={
              <Radio
                style={{
                  color: post === 'jugador' ? "#C7F55C ": '',
                }}
              />
              
            }
            label={
              <Typography variant="span" style={{color: "rgba(255, 255, 255, 0.79)" }}>
              Ojeador
              </Typography>
            }
          />
        </RadioGroup>
          <FormControl
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <FormLabel component="legend"></FormLabel>

            <FormHelperText></FormHelperText>
          </FormControl>
          <FormGroup
            style={{
              display: "flex",
              marginTop: "5px",
              marginLeft: "auto",
              with: "14rem",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  required
                  className="check"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  style={{
                    color: isChecked ? "#C7F55C" : "",
                    marginBottom: matches ? "10px" : "30px",
                  }}
                />
              }
              label={
                <Typography
                  onClick={showAlert}
                  variant="body1"
                  style={{
                    fontSize: matches ? "16px" : "12px",
                    color: "white",
                    marginBottom: matches ? "10px" : "35px",
                    height: "15px",
                    textDecoration: "underline",
                  }}
                >
                  Aceptar términos y condiciones
                </Typography>
              }
            />
          </FormGroup>
          <Grid item xs={12} sm={12} style={{ paddingTop: "1px" }}>
            <Button
              type="submit"
              variant="contained"
              style={{
                background: "#C7F55C",
                width: "14em",
                justifyContent: "center",
                alignItems: "center",
                height: matches ? "2.5rem" : "1.8rem",
              }}
              className="MuiButton"
            >
              Enviar
            </Button>
          </Grid>
        </Grid>
        <div className="Account">
          <span className="link">¿Tienes cuenta?</span>
          <Link to="/login" className="link">
>>>>>>> 3de3b527cf41b12ca0381bc251df9af783333907
            Iniciar sesión
          </Link>
        </div>
      </form>
    </div>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> 3de3b527cf41b12ca0381bc251df9af783333907
