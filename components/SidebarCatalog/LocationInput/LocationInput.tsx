"use client";

import css from "./LocationInput.module.css";
import { CampersQueryParams } from "@/types/camper";

interface LocationInputProps {
  filters: CampersQueryParams;
  setFilters: (filters: CampersQueryParams) => void;
}

const LocationInput = ({ filters, setFilters }: LocationInputProps) => {
  return (
    <div className={css.locationInputContainer}>
      <label htmlFor="location" className={css.labelLocationInput}>
        Location
      </label>
      <div className={css.inputIconBox}>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="City"
          className={css.locationInput}
          value={filters.location || ""}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        />
        <svg width={20} height={20} className={css.iconLocationInput}>
          <use href="/sprite/sprite.svg#icon-map" />
        </svg>
      </div>
    </div>
  );
};

export default LocationInput;
