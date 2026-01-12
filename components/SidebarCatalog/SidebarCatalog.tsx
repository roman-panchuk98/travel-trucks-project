"use client";

import EquipmentFilters from "./EquipmentFilters/EquipmentFilters";
import LocationInput from "./LocationInput/LocationInput";
import VehicleTypeFilters from "./VehicleTypeFilters/VehicleTypeFilters";
import css from "./SidebarCatalog.module.css";
import { useCamperStore } from "@/lib/store/camperStore";
import { CampersQueryParams } from "@/types/camper";
import { useEffect, useState } from "react";
import TransmissionType from "./TransmissionTypeFilters/TransmissionTypeFilters";
import EngineType from "./EngineFilters/EngineFilters";

interface SidebarCatalogProps {
  onReset: () => void;
}

const SidebarCatalog = ({ onReset }: SidebarCatalogProps) => {
  const { setFilters, filters } = useCamperStore();

  const [localFilters, setLocalFilters] = useState<CampersQueryParams>({});

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const hasFilters = Object.keys(localFilters).length === 0;
    if (hasFilters) {
      return;
    }
    setFilters(localFilters);
  };

  return (
    <form onSubmit={handleSubmit}>
      <LocationInput filters={localFilters} setFilters={setLocalFilters} />
      <div className={css.formFilters}>
        <p className={css.formText}>Filters</p>
        <TransmissionType filters={localFilters} setFilters={setLocalFilters} />
        <EngineType filters={localFilters} setFilters={setLocalFilters} />
        <EquipmentFilters filters={localFilters} setFilters={setLocalFilters} />
        <VehicleTypeFilters
          filters={localFilters}
          setFilters={setLocalFilters}
        />
      </div>
      <div className={css.formBtnBox}>
        <button type="submit" className={css.formBtnSubmit}>
          Search
        </button>
        <button type="button" onClick={onReset} className={css.resetBtn}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default SidebarCatalog;
