"use client";

import { CamperForm, CampersQueryParams } from "@/types/camper";
import css from "./VehicleTypeFilters.module.css";
import clsx from "clsx";

interface VehicleTypeFiltersProps {
  filters: CampersQueryParams;
  setFilters: (filters: CampersQueryParams) => void;
}

const VehicleTypeFilters = ({
  filters,
  setFilters,
}: VehicleTypeFiltersProps) => {
  const options = [
    { value: "panelTruck", label: "Van", icon: "icon-type-van" },
    {
      value: "fullyIntegrated",
      label: "Fully Integrated",
      icon: "icon-type-fully-integrated",
    },
    { value: "alcove", label: "Alcove", icon: "icon-type-alcove" },
  ];

  return (
    <div className={css.vehicleTypeBox}>
      <h3 className={css.vehicleTypeTitle}>Vehicle type</h3>
      <div className={css.vehicleTypeLine}></div>
      <ul className={css.vehicleTypeList}>
        {options.map(({ value, label, icon }) => (
          <li
            key={value}
            className={clsx(
              css.vehicleTypeItem,
              filters.form === value && css.vehicleTypeItemActive
            )}
            onClick={() =>
              setFilters({ ...filters, form: value as CamperForm })
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

export default VehicleTypeFilters;
