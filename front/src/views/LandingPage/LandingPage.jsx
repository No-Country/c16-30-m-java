import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(username);
    console.log(password);

    alert("Iniciando sesión");
  };
  return (
    <div className="bg-white w-96 p-3 shadow-2xl">
      <form onSubmit={handleSubmit} className="w-3/4 m-auto">
        <h1 className="text-3xl p-2 m-2 text-center">Bienvenid@</h1>
        {/* correo */}
        <label htmlFor="email">Correo electronico</label>
        <input
          id="email"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Ej: tunombre@mail.com"
        />
        <label htmlFor="pass">Contraseña</label>
        <input
          id="pass"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="********"
        />
        <Link to="/home">
          <button className="bg-slate-300 w-full h-9 rounded-sm my-4">
            Iniciar sesión
          </button>
        </Link>
      </form>
      <label className="text-center">
        ¿Todavía No tienes cuenta?{" "}
        <Link className="font-bold" to="/registrationForm">
          Regístrate aquí
        </Link>
      </label>
    </div>
  );

  //este es un comentario de prueba
};

export default LandingPage;
