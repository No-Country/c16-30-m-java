import iconUser from "../../assets/iconUser.svg";
import svgMisPublicaciones from "../../assets/svgMisPublicaciones.svg";
import svgMensajes from "../../assets/svgMensajes.svg";
import svgFavoritos from "../../assets/svgFavoritos.svg";
import svgObjetosSolicitados from "../../assets/svgObjetosSolicitados.svg";
import svgMiCuenta from "../../assets/svgMiCuenta.svg";
import svgConfiguracion from "../../assets/svgConfiguracion.svg";
import svgAyuda from "../../assets/svgAyuda.svg";
import { Link } from "react-router-dom";

import BtnSideBar from "../BtnSideBar/BtnSideBar";

import { ProductsContext } from "../../contexts/ProductsContext";
import { useContext } from "react";

export default function SideBar({isMenuOpen, setIsMenuOpen}) {
  const userName = "Juan";

  const { isLoged, setIsLoged } = useContext(ProductsContext);

  return (
    <div className="">
      {/*<div className="min-h-screen w-full fixed top-0 left-0 right-0"></div>*/}

      <div onClick={()=> setIsMenuOpen(!isMenuOpen)} className="bg-white shadow-txl w-[310px] h-[595px] relative top-0 right-36 z-50">
        <div className="flex items-center ml-4 mb-[46px] pt-12">
          <img className="w-[58px] h-[58px] rounded-full mr-4" src={iconUser} />
          <h2 className="text-[22px] font-bold">Hola {userName}!</h2>
        </div>

        <Link to={"/underconstruction"}>
        <BtnSideBar svg={svgMisPublicaciones}>Mis Publicaciones</BtnSideBar>
        </Link>
        <Link to={"/underconstruction"}>
        <BtnSideBar svg={svgMensajes}>Mensajes</BtnSideBar>
        </Link>
        <Link to={"/underconstruction"}>
        <BtnSideBar svg={svgFavoritos}>Favoritos</BtnSideBar>
        </Link>
        <Link to={"/underconstruction"}>
        <BtnSideBar svg={svgObjetosSolicitados}>Objetos Solicitados</BtnSideBar>
        </Link>
        <div className="border-b-2 w-4/5 my-0 mx-auto mb-[21px]"></div>
        <Link to={"/underconstruction"}>
        <BtnSideBar svg={svgMiCuenta}>Mi Cuenta</BtnSideBar>
        </Link>
        <Link to={"/underconstruction"}>
        <BtnSideBar svg={svgConfiguracion}>Configuración</BtnSideBar>
        </Link>
        <Link to={"/underconstruction"}>
        <BtnSideBar svg={svgAyuda}>Ayuda</BtnSideBar>
        </Link >
        <div className="w-full text-center">
        <button onClick={()=> setIsLoged(!isLoged)} className="text-red-orange text-[20px] font-bold border-b-[1px] border-red-orange">Log out</button>
        </div>
        
          </div>
        </div>

  );
}
