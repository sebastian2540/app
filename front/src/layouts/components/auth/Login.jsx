import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

let apiUsuarios = "http://localhost:5174/usuarios";

const Login = () => {
  const [getUsuario, setUsuario] = useState("admin");
  const [getContrasena, setContrasena] = useState("");
  const [getUsuariosBD, setUsuariosBD] = useState([]);

  let redireccion = useNavigate();

  async function traerUsuarios() {
    let resultado = await axios.get(apiUsuarios);
    setUsuariosBD(resultado.data)
  }

  function buscarUsuario() {
    let estado = getUsuariosBD.some((usuario) => getUsuario === usuario.usuario && usuario.contrasena)
    return estado
  }

  function iniciarSesion() {
    if (buscarUsuario()) {
      if (buscarUsuario()) {
        redireccion("/home");
      }
    } else {
      console.log("Error de credenciales");
      traerUsuarios()
    }
  }

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input
            onChange={(e) => {
              setUsuario(e.target.value);
            }}
            placeholder="Usuario"
            type="text"
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            onChange={(e) => {
              setContrasena(e.target.value);
            }}
            placeholder="Contraseña"
            type="text"
          />
        </div>
        <button onClick={iniciarSesion} type="button">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
