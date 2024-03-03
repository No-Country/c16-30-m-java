import { useState } from "react";
import { categories, distance, sortBy } from "../../data/filters";
import FilterTab from "../FilterTab/FilterTab";

const Filters = () => {
  const [filterId, setFilterId] = useState("");

  const handleState = (currentState) => {
    const newState = filterId === currentState ? "" : currentState;
    setFilterId(newState);
  };

  return (
    <header className="relative h-auto w-full">
      <h2 className="font-bold text-xl">Aplicar Filtros</h2>
      <section className="space-y-4">
        <FilterTab
          title={"Ordenar"}
          isOpen={filterId === "sortBy"}
          setIsOpen={() => handleState("sortBy")}
          type="checkbox"
          options={sortBy}
        />
        <FilterTab
          title={"Categorías"}
          isOpen={filterId === "categories"}
          setIsOpen={() => handleState("categories")}
          type="button"
          options={categories}
        />
        <FilterTab
          title={"Distancia"}
          isOpen={filterId === "distance"}
          setIsOpen={() => handleState("distance")}
          type="checkbox"
          options={distance}
        />
      </section>
    </header>
  );
};

export default Filters;
