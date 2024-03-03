import React from "react";
import { Link } from "react-router-dom";

const PublishSign = () => {
  return (
    <div className="flex justify-center">
      <Link
        to="/publish"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
      >
        Publicar
      </Link>
    </div>
  );
};

export default PublishSign;
