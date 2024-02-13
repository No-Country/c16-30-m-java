import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
