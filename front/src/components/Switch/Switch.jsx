// import React, { useState } from "react";

const Switch = ({ isPressed, handleSwitch }) => {
  // const [isPressed, setIsPressed] = useState(false);
  const Button = ({ text, buttonColor, value, setValue }) => {
    return (
      <button
        disabled={value}
        onClick={setValue}
        className={`w-1/2 rounded-[66px] px-4 py-2 transition-transform ease-linear ${buttonColor}`}
      >
        {text}
      </button>
    );
  };

  return (
    <div className="bg-[#EAEAEA] font-main rounded-[66px] max-w-[420px] w-full flex font-semibold p-1">
      <Button
        text={"No Comida"}
        value={isPressed}
        buttonColor={
          isPressed
            ? "bg-primary text-white cursor-default"
            : "bg-[#EAEAEA] text-black"
        }
        setValue={handleSwitch}
      />
      <Button
        text={"Comida"}
        value={!isPressed}
        buttonColor={
          isPressed
            ? "bg-[#EAEAEA] text-black"
            : "bg-primary text-white cursor-default"
        }
        setValue={handleSwitch}
      />
    </div>
  );
};

export default Switch;
