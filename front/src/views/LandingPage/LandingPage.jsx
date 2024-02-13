import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <div>
        <Link to="/home">Ingresar</Link>
      </div>
    </div>
  );
};

export default LandingPage;
