import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";

const NavBar = () => {
  return (
    <div className="flex justify-center justify-around">
      <Link to={"/home"}>
        <button>Home</button>
      </Link>
      <Link to={"/micuenta"}>
        <button>Mi Cuenta</button>
      </Link>
      <Link to={"/mispublicaciones"}>
        <button>Mis Publicaciones</button>
      </Link>
      <Link to={"/mensajes"}>
        <button>Mensajes</button>
      </Link>
      <SearchBar />
    </div>
  );
};

export default NavBar;
