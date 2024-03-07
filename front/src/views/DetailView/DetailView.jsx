import { useEffect, useState, useContext } from "react";
import { Link, redirect, useParams } from "react-router-dom";
import backArrow from "../../assets/back-arrow.svg";
import UserLogoandCalification from "../../components/UserLogoandCalification/UserLogoandCalification";
import Boton from "../../components/Boton/Boton";
import imgMap from "../../assets/map-example.png";
import imgProd1 from "../../assets/img-prod-1.jpeg";
import imgProd2 from "../../assets/img-prod-2.jpeg";
import imgProd3 from "../../assets/img-prod-3.jpeg";
import imgOrange from "../../assets/naranja.jpg";
import imgBanana from "../../assets/bananas.jpg";
import imgApple from "../../assets/apple.webp";
import { getProductById } from "../../services/getProductById";
import Loading from "../Loading/Loading";

import { ProductsContext } from "../../contexts/ProductsContext";

export default function DetailView() {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const { isLoged, setIsOpen } = useContext(ProductsContext);

  useEffect(() => {
    getProductById(+productId).then((res) => {
      setData(res);
      setIsLoading(!isLoading);
    });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="w-2/3 mx-auto my-0 mb-[40px]">
        <Link to={"/home"}>
          <div className="flex mb-[7px]">
            <div className="flex items-center mr-[7px]">
              <img src={backArrow} alt="backarrow icon" />
            </div>
            <label className="cursor-pointer text-[20px]">Atrás</label>
          </div>
        </Link>
        <div className="flex flex-col  p-5 border-slate-300 border-2 rounded">
          <div className="flex">
            <img
              className="w-[381px] mr-[9px] h-[256px] border-[0.25px] border-slate-300 rounded-[5px]"
              alt="imagen del producto"
              src={data?.type === "No comida" ? imgProd1 : imgApple}
            />
            <img
              className="w-[219px] mr-[9px] h-[256px] border-[0.25px] border-slate-300 rounded-[5px]"
              alt="imagen del producto"
              src={data?.type === "No comida" ? imgProd2 : imgBanana}
            />
            <img
              className="w-[227px] h-[256px] border-[0.25px] border-slate-300 rounded-[5px]"
              alt="imagen del producto"
              src={data?.type === "No comida" ? imgProd3 : imgOrange}
            />
          </div>
          <h3 className="font-bold mt-6 mb-2 text-[30px] leading-8">
            {data?.name}
          </h3>
          <p className="text-[16px] mb-[26px] text-codgray font-normal leading-4">
            {data?.type}
            {">"}
            {data?.category}
          </p>
          <UserLogoandCalification />
          <p className="text-[20px] mt-[30px] mb-[24px]">{data?.description}</p>
          <div className="flex">
            <label className="text-[22px] mb-[40px] font-bold">Cantidad:</label>
            <p className="text-[22px]">{data?.quantity}</p>
          </div>

          <div className="">
            <label className="text-[22px] font-bold">
              Horarios de recolección
            </label>
            <p className="text-[20px] mb-[40px]">
              Días de la semana despues de las {data?.timeLimit}hs. Fin de
              semana consultar.
            </p>
          </div>
          <label className="text-[20px] mb-[8px]">
            Ubicación aproximada en el mapa.
          </label>
          <img
            className="w-[860px] h-[184px] mb-[48px]"
            src={imgMap}
            alt="map example"
          />
          <div className="mb-[88px]">
            <label className="text-[20px] mr-5">
              Inicia la conversación con este usuario para acordar la entrega!
            </label>
            
            <Boton
              onClick={()=> isLoged? window.location.href='https://api.whatsapp.com/send?phone=543513513513' : setIsOpen(true)}
              styles={
                "bg-genoa bg text-white font-bold w-64 h-10 rounded-3xl my-4"
              }
            >
              Solicitar este producto
            </Boton>

          </div>
        </div>
      </div>
    </>
  );
}
