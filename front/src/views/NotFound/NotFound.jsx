import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
      <p className="text-primary text-xl font-bold">404</p>
      <h2 className="text-4xl font-bold">Lo sentimos, la pagina no existe</h2>
      <p className="text-lg font-medium">
        No hemos podido encontrar la pagina a la cual desea acceder
      </p>
      <br />
      <Link
        to={"/home"}
        className="bg-primary text-white rounded-[8px] px-3 py-2 text-lg"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
