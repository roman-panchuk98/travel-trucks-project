"use client";

import css from "./CamperByIdInformation.module.css";
import Image from "next/image";
import { CamperItemsProps } from "@/components/CatalogList/CamperEquipments/CamperEquipments";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

const CamperByIdInformation = ({ camper }: CamperItemsProps) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className={css.informartionBlock}>
      <div>
        <h3 className={css.camperTitle}>{camper.name}</h3>
        <div className={css.ratingLocationBox}>
          <div className={css.ratingItemBox}>
            <svg width={16} height={16}>
              <use href="/sprite/sprite.svg#icon-Rating"></use>
            </svg>
            <p>
              {camper.rating}({camper.reviews.length} Reviews)
            </p>
          </div>
          <div className={css.locationItemBox}>
            <svg width={16} height={16}>
              <use href="/sprite/sprite.svg#icon-map"></use>
            </svg>
            <p>{camper.location}</p>
          </div>
        </div>
        <p className={css.camperPrice}>€{camper.price.toFixed(2)}</p>
      </div>
      <ul className={css.galleryCamperList}>
        {camper.gallery.map((img, index) => (
          <li key={index} className={css.galleryCamperItem}>
            <Image
              src={img.thumb}
              alt={camper.name}
              width={292}
              height={312}
              className={css.galleryCamperItemImage}
              onClick={() => {
                setIndex(index);
                setOpen(true);
              }}
            />
          </li>
        ))}
      </ul>
      <p className={css.camperDescription}>{camper.description}</p>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={camper.gallery.map((img) => ({
          src: img.original,
        }))}
      />
    </div>
  );
};

export default CamperByIdInformation;
