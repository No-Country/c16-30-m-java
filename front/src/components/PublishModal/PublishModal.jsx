import React from "react";
import { NavLink } from "react-router-dom";
import HashLink from "../HashLink";

import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

const PublishModal = () => {
  const { isLoged } = useContext(ProductsContext);
  return (
    <div className="bg-[#fff] w-[420px] rounded-2xl absolute bottom-8 right-10 font-main box-shadow-hero">
      <div className="mt-[30px] mb-[16px] mx-[18px] flex flex-col justify-between">
        <p className="font-normal leading-[35px] text-[18px] tracking-[1.2px] mb-[20px]">
          Ofrece todo lo que ya no usas, conectá con tus vecinos y ayuda al
          planeta!
        </p>
        <div className="flex items-center justify-between">
          <HashLink
            to="/legalities#features"
            className="text-[12px] font-bold underline"
          >
            ¿Como funciona GiveIt?
          </HashLink>
          <NavLink
            to={isLoged? "/publish" : "/"}
            className="bg-primary text-white py-[8px] rounded-[100px] px-[50px] font-bold hover:brightness-110 transition-[filter] ease-in duration-200"
          >
            Publicar
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PublishModal;
