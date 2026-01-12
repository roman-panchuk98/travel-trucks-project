import clsx from "clsx";
import { VehicleTypeFiltersProps } from "../VehicleTypeFilters/VehicleTypeFilters";
import css from "./EngineFilters.module.css";
import { Engine } from "@/types/camper";

const EngineType = ({ filters, setFilters }: VehicleTypeFiltersProps) => {
  const options = [
    { value: "diesel", label: "Diesel", icon: "icon-diesel" },
    { value: "petrol", label: "Petrol", icon: "icon-petrol" },
    { value: "hybrid", label: "Hybrid", icon: "icon-hybrid" },
  ];

  return (
    <div className={css.engineTypeBox}>
      <h3 className={css.engineTypeTitle}>Engine</h3>
      <div className={css.engineTypeLine}></div>
      <ul className={css.engineTypeList}>
        {options.map(({ value, label, icon }) => (
          <li
            key={value}
            className={clsx(
              css.engineTypeItem,
              filters.engine === value && css.engineTypeItemActive
            )}
            onClick={() => setFilters({ ...filters, engine: value as Engine })}
          >
            <svg width={32} height={32}>
              <use href={`/sprite/sprite.svg#${icon}`} />
            </svg>
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EngineType;
