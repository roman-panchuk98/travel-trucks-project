import clsx from "clsx";
import { VehicleTypeFiltersProps } from "../VehicleTypeFilters/VehicleTypeFilters";
import css from "./TransmissionTypeFilters.module.css";
import { Transmission } from "@/types/camper";

const TransmissionType = ({ filters, setFilters }: VehicleTypeFiltersProps) => {
  const options = [
    { value: "automatic", label: "Automatic", icon: "icon-automatic" },
    { value: "manual", label: "Manual", icon: "icon-manual-transmission" },
  ];

  return (
    <div className={css.transmissionTypeBox}>
      <h3 className={css.transmissionTypeTitle}>Transmisson</h3>
      <div className={css.vehicleTypeLine}></div>
      <ul className={css.transmissionTypeList}>
        {options.map(({ value, label, icon }) => (
          <li
            key={value}
            className={clsx(
              css.transmissionTypeItem,
              filters.transmission === value && css.transmissionTypeItemActive
            )}
            onClick={() =>
              setFilters({ ...filters, transmission: value as Transmission })
            }
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

export default TransmissionType;
