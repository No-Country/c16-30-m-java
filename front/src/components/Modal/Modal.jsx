import { useState } from "react";
import React from "react";

import Login from "../Login/Login";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

export default function Modal({ isOpen, setIsOpen }) {
  const [useLogin, setUseLogin] = useState(true);

  return (
    <>
      {isOpen && (
        <div className="fixed z-10 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="bi bi-x-lg bg-white relative w-[738px] h-full p-5 rounded flex flex-col justify-center items-center gap-5">
            <svg
              onClick={() => {
                setIsOpen(false);
                setUseLogin(true);
              }}
              className="cursor-pointer absolute top-10 right-10 font-extrabold text-black w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
            <Login useLogin={useLogin} setUseLogin={setUseLogin} />
            <RegistrationForm useLogin={useLogin} setUseLogin={setUseLogin} />
          </div>
        </div>
      )}
    </>
  );
}
