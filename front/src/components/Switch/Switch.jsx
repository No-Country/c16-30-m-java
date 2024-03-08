import { useFilters } from "../../hooks/useFilters";

const types = {
  noFood: "NOT_FOOD",
  food: "FOOD",
};

const Switch = () => {
  const { filters, setFilters } = useFilters();

  const handleSwitch = (type) => {
    setFilters({ ...filters, type: type });
  };

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
        text={"NOT_FOOD"}
        value={filters.type === types.noFood}
        buttonColor={
          filters.type === types.noFood
            ? "bg-primary text-white cursor-default"
            : "bg-[#EAEAEA] text-black"
        }
        setValue={() => handleSwitch(types.noFood)}
      />
      <Button
        text={"FOOD"}
        value={filters.type === types.food}
        buttonColor={
          filters.type === types.food
            ? "bg-primary text-white cursor-default"
            : "bg-[#EAEAEA] text-black"
        }
        setValue={() => handleSwitch(types.food)}
      />
    </div>
  );
};

export default Switch;
