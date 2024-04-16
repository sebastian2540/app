import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [getUsuario, setUsuario] = useState("admin");
  const [getContrasena, setContrasena] = useState("");
  let redireccion = useNavigate();

  if (getUsuario === "sebastian") {
    if(getContrasena === "123456"){
      setTimeout(() => {
        redireccion("/home")
      },2000);
    }
  } else {
    
  }

  return (
    <form action="">
      <h5>Inicio Sesión</h5>
      <section >
        <input
          onChange={(e) => {
            setUsuario(e.target.value);
          }}
          placeholder="Usuario"
          type="text"
        />
        <input
          onChange={(e) => {
            setContrasena(e.target.value);
          }}
          placeholder="Contraseña"
          type="password"
        />
      </section>

      <section>
        <button type="button">Iniciar sesión</button>
        <button type="button">Crear cuentas</button>
      </section>
    </form>

    
  );
};

export default Login;
