import { useState } from "react";

export default function Login({ useLogin, setUseLogin }) {
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
    {/*
    try {
      async () => {
        const response = await fetch("url", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });
      };
    } catch (error) {
      console.log(error);
    }
  */}
    alert("Iniciando sesión");
  };

  return (
    <>
      {useLogin && (
        <div className="bg-white w-96 p-3">
          <form onSubmit={handleSubmit} className="m-auto">
            <h1 className="text-3xl p-2 m-2 text-center font-bold">
              Bienvenid@!
            </h1>
            {/* correo */}
            <div className="relative my-7">
              <label htmlFor="email" className="absolute bg-white top-[-15px] left-[12px] px-2 py-0">Correo electronico</label>
              <input
                className="w-[349px] h-10 p-5 gap-[10px] border-solid border-2 border-codgray rounded outline-none text-sm tracking-wider"
                id="email"
                type="text"
                value={username}
                onChange={handleUsernameChange}
                placeholder="ejemplo@email.com"
              />
            </div>
            <div className="relative">
              <label htmlFor="pass" className="absolute bg-white top-[-15px] left-[12px] px-2 py-0">Contraseña</label>
              <input
                className="w-[349px] h-10 p-5 gap-[10px] border-solid border-2 border-codgray rounded outline-none text-sm tracking-wider"
                id="pass"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="********"
              />
            </div>
            <button className="bg-genoa text-white font-bold w-[349px] h-10 rounded-3xl my-4">
              Iniciar sesión
            </button>
          </form>
          <label className="text-base w-[349px] h-[24px] font-bold font-medium">
            ¿Todavía No tienes cuenta?{" "}
            <button
              className="text-red-orange"
              onClick={() => setUseLogin(!useLogin)}
            >
              Registrate aqui
            </button>
          </label>
        </div>
      )}
    </>
  );
}