import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

import { useState } from "react";
import Modal from "../../components/Modal/Modal";

import Logo from "../../components/Logo/Logo";
import MenuNavBar from "../../components/MenuNavBar/MenuNavBar";
import Boton from "../../components/Boton/Boton";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoged, setIsLoged] = useState(false);

  return (
    <>
      <div className="flex justify-evenly items-center h-28">
        <Logo />
        <SearchBar />

        {isLoged ? (
          <div className="flex justify-around">
            <MenuNavBar />
            <Boton
              styles={
                "bg-genoa text-white font-bold h-10 w-[183px] rounded-3xl"
              }
            >
              Publicar
            </Boton>
          </div>
        ) : (
          <div>
            <Boton
              styles={
                "bg-genoa bg text-white font-bold w-64 h-10 rounded-3xl my-4"
              }
              onClick={() => setIsOpen(!isOpen)}
            >
              Ingresar | Registrarse
            </Boton>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
