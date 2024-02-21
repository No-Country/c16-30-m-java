import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";

import { useState } from "react";
import Modal from "../../components/Modal/Modal";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div>
      <Link to={"/home"}>
        <button>Home</button>
        <Link to={"/micuenta"}>
          <button>Mi Cuenta</button>
        </Link>
      </Link>
      <Link to={"/mispublicaciones"}>
        <button>Mis Publicaciones</button>
      </Link>
      <Link to={"/mensajes"}>
        <button>Mensajes</button>
      </Link>
      <SearchBar />
    </div>
    <div>
    <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-genoa bg text-white font-bold w-64 h-10 rounded-3xl my-4"
      >
        Ingresar | Registrarse
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
    </>
  );
};

export default NavBar;
