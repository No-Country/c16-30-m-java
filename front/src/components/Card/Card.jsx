import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import favorite from "../../assets/favorite.svg";
import pinLocation from "../../assets/pin-location.svg";
import views from "../../assets/views.svg";
import imgTable from "../../assets/table-chairs.png";
import imgApple from "../../assets/apple.webp";
import UserLogoandCalification from "../UserLogoandCalification/UserLogoandCalification";

const Card = (props) => {
  const imgProd = props.type === "NOT_FOOD" ? imgTable : imgApple;

  return (
    <Link to={`/detailview/${props.id}`}>
      <div className="flex relative bg-concrete rounded-lg p-4 shadow-md mb-4 max-w-[824px] h-[200px]">
        <img
          className="w-[219px] h-[169px] border-[0.25px] rounded-[5px]"
          src={imgProd}
          alt="imagen de la card"
        />
        <div className="text-[14px]">
          <div className="absolute right-6">
            <img src={favorite} alt="favorite icon" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 text-[28px] px-4">
              {props.name}
            </h3>
            <UserLogoandCalification />
            <p className="mb-2 mt-4 px-4">Descripción: {props.description}</p>
            <div className="flex mt-8">
              <div className="flex px-4">
                <img src={pinLocation} alt="pinLocation icon" />
                <label className="font-[400]">0,5 Km</label>
              </div>
              <div className="flex">
                <img src={views} alt="views icon" />
                <label className="font-[400] ml-1">2</label>
              </div>
              <label className="absolute right-6 text-red-orange font-bold text-[22px]">
                Nuevo!
              </label>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
