"use client";

import clsx from "clsx";
import { CampersQueryParams } from "@/types/camper";
import css from "./EquipmentFilters.module.css";

interface EquipmentFiltersProps {
  filters: CampersQueryParams;
  setFilters: (filters: CampersQueryParams) => void;
}

const EquipmentFilters = ({ filters, setFilters }: EquipmentFiltersProps) => {
  const equipmentOptions: {
    key: keyof CampersQueryParams;
    label: string;
    icon: string;
  }[] = [
    { key: "AC", label: "AC", icon: "icon-AC" },
    { key: "radio", label: "Radio", icon: "icon-radio" },
    { key: "kitchen", label: "Kitchen", icon: "icon-kitchen" },
    { key: "TV", label: "TV", icon: "icon-tv" },
    { key: "refrigerator", label: "Refrigerator", icon: "icon-refrigerator" },
    { key: "microwave", label: "Microwave", icon: "icon-microwave" },
    { key: "bathroom", label: "Bathroom", icon: "icon-bathroom" },
  ];

  const toggleFilter = (key: keyof CampersQueryParams) => {
    setFilters({
      ...filters,
      [key]: !filters[key],
    });
  };

  return (
    <div className={css.equipmentFiltersBox}>
      <h4 className={css.equipmentFiltersTitle}>Vehicle equipment</h4>
      <div className={css.equipmentFiltersLine}></div>
      <ul className={css.equipmentFiltersList}>
        {equipmentOptions.map(({ key, label, icon }) => {
          const active = filters[key];

          return (
            <li
              key={key}
              className={clsx(
                css.equipmentFiltersItem,
                active && css.equipmentFiltersItemActive
              )}
              onClick={() => toggleFilter(key)}
            >
              <svg width={32} height={32}>
                <use href={`/sprite/sprite.svg#${icon}`} />
              </svg>
              <span>{label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EquipmentFilters;
