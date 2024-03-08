import { useState } from "react";
import arrowRight from "../../assets/angle-right.svg";

const FilterTab = ({ title, isOpen, setIsOpen, type, options }) => {
  const [categoriesId, setCategoriesId] = useState([]);

  const handleCategoriesId = (id) => {
    if (categoriesId.includes(id)) {
      const newCategories = categoriesId.filter((category) => category !== id);
      setCategoriesId(newCategories);
    } else {
      setCategoriesId([...categoriesId, id]);
    }
  };

  return (
    <div>
      <button
        onClick={setIsOpen}
        className="w-full px-[10px] py-[8px] bg-white hover:opacity-70 ease-in-out transition-opacity duration-200 cursor-pointer flex justify-between items-center"
      >
        <p>{title}</p>
        <span>
          <img
            src={arrowRight}
            className={`transition-transform duration-150 ease-linear ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
            alt="arrow right logo"
          />
        </span>
      </button>
      {type === "checkbox" && (
        <ul
          className={`px-[100px] w-full py-[40px] ease-linear duration-300 transition-all origin-top block ${
            isOpen ? "scale-y-100" : "hidden scale-y-0"
          }`}
        >
          {options.map((option, index) => (
            <li key={index} className="flex justify-between">
              <label htmlFor="newest">{option.text}</label>
              <input
                id="newest"
                value={option.value}
                className="accent-primary"
                type="checkbox"
              />
            </li>
          ))}
        </ul>
      )}
      {type === "button" && (
        <div
          className={`w-full px-[10px] py-[10px] ease-linear duration-300  transition-all origin-top grid grid-cols-2 grid-flow-row gap-x-6 gap-y-2 ${
            isOpen ? "scale-y-100" : "hidden scale-y-0"
          }`}
        >
          {options.map((option, index) => (
            <button
              onClick={() => handleCategoriesId(option.value)}
              key={index}
              className={` flex justify-center items-center rounded-[100px] py-1 ${
                categoriesId.includes(option.value)
                  ? "bg-primary text-white"
                  : "bg-footer text-black"
              }`}
            >
              <p className="text-center font-semibold overflow-hidden text-ellipsis px-4">
                {option.text}
              </p>
            </button>
          ))}
        </div>
      )}
      <hr className="border-t border-black border-opacity-30" />
    </div>
  );
};

export default FilterTab;
