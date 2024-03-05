import iconUser from "../../assets/iconUser.svg";
import svgMisPublicaciones from "../../assets/svgMisPublicaciones.svg";
import svgMensajes from "../../assets/svgMensajes.svg";
import svgFavoritos from "../../assets/svgFavoritos.svg";
import svgObjetosSolicitados from "../../assets/svgObjetosSolicitados.svg";
import svgMiCuenta from "../../assets/svgMiCuenta.svg";
import svgConfiguracion from "../../assets/svgConfiguracion.svg";

import BtnSideBar from "../BtnSideBar/BtnSideBar";

export default function SideBar() {
  const userName = "Juan";

  return (
    <div className="">
      {/*<div className="min-h-screen w-full fixed top-0 left-0 right-0"></div>*/}

      <div className="bg-white shadow-txl w-[310px] h-[595px] relative top-0 right-36 z-50">
        <div className="flex items-center ml-4 mb-[46px] pt-12">
          <img className="w-[58px] h-[58px] rounded-full mr-4" src={iconUser} />
          <h2 className="text-[22px] font-bold">Hola {userName}!</h2>
        </div>

        <div className="border-b-[2px]">
          
        <BtnSideBar svg={svgMisPublicaciones}>Mis Publicaciones</BtnSideBar>
        <BtnSideBar svg={svgMensajes}>Mensajes</BtnSideBar>

          <div>
            <div className="flex ml-[28px] mb-[23px]">
              <img className="w-[24px] h-[24px]" src={svgFavoritos} />
              <label className="ml-[33px] text-[18px] font-bold">
                Favoritos
              </label>
            </div>
          </div>

          <div>
            <div className="flex ml-[28px] mb-[23px]">
              <img className="w-[24px] h-[24px]" src={svgObjetosSolicitados} />
              <label className="ml-[33px] text-[18px] font-bold">
                Objetos Solicitados
              </label>
            </div>
          </div>
        </div>
        <div>
        <div className="mt-[23px]">

            <div className="flex ml-[28px] mb-[23px]">
              <img className="w-[24px] h-[24px]" src={svgMiCuenta} />
              <label className="ml-[33px] text-[18px] font-bold">
                Mi Cuenta
              </label>
            </div>

            <div className="flex ml-[28px] mb-[23px]">
              <img className="w-[24px] h-[24px]" src={svgConfiguracion} />
              <label className="ml-[33px] text-[18px] font-bold">
                Configuración
              </label>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
}
