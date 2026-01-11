"use client";

import EquipmentFilters from "./EquipmentFilters/EquipmentFilters";
import LocationInput from "./LocationInput/LocationInput";
import VehicleTypeFilters from "./VehicleTypeFilters/VehicleTypeFilters";
import css from "./SidebarCatalog.module.css";
import { useCamperStore } from "@/lib/store/camperStore";
import { CampersQueryParams } from "@/types/camper";
import { useState } from "react";

const SidebarCatalog = () => {
  const { setFilters } = useCamperStore();

  const [localFilters, setLocalFilters] = useState<CampersQueryParams>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const hasFilters = Object.keys(localFilters).length === 0;

    if (hasFilters) {
      return;
    }
    setFilters(localFilters);
    setLocalFilters({});
  };
  return (
    <form onSubmit={handleSubmit}>
      <LocationInput filters={localFilters} setFilters={setLocalFilters} />
      <div className={css.formFilters}>
        <p className={css.formText}>Filters</p>
        <EquipmentFilters filters={localFilters} setFilters={setLocalFilters} />
        <VehicleTypeFilters
          filters={localFilters}
          setFilters={setLocalFilters}
        />
      </div>
      <button type="submit" className={css.formBtnSubmit}>
        Search
      </button>
    </form>
  );
};

export default SidebarCatalog;
