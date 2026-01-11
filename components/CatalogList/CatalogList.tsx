import { Camper } from "@/types/camper";
import Image from "next/image";
import css from "./CatalogList.module.css";
import Link from "next/link";
import CamperEquipments from "./CamperEquipments/CamperEquipments";

interface CamperListProps {
  campers: Camper[];
  addToFavorites: (camper: Camper) => void;
  removeFromFavorites: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const CatalogList = ({
  campers,
  addToFavorites,
  removeFromFavorites,
  isFavorite,
}: CamperListProps) => {
  if (!campers || campers.length === 0) {
    return <p className={css.noCampersTitle}>No campers found</p>;
  }

  const handleFavoriteClick = (camper: Camper) => {
    if (isFavorite(camper.id)) {
      removeFromFavorites(camper.id);
    } else {
      addToFavorites(camper);
    }
  };

  return (
    <ul className={css.catalogList}>
      {campers.map((el) => (
        <li key={el.id} className={css.catalogItem}>
          <Image
            className={css.catalogImg}
            src={el.gallery[0]?.thumb}
            alt="Camper truck"
            width={292}
            height={320}
          />
          <div className={css.catalogItemInfoBox}>
            <div className={css.infoTitleBox}>
              <div className={css.namePriceBox}>
                <h3>{el.name}</h3>
                <div className={css.favoriteBox}>
                  <span>€{el.price.toFixed(2)}</span>
                  <button
                    type="button"
                    className={`${css.addToFavorite} ${
                      isFavorite(el.id) ? css.favoriteActive : ""
                    }`}
                    onClick={() => handleFavoriteClick(el)}
                  >
                    <svg width={26} height={24}>
                      <use href="/sprite/sprite.svg#icon-heart"></use>
                    </svg>
                  </button>
                </div>
              </div>
              <div className={css.ratingLocationBox}>
                <div className={css.ratingItemBox}>
                  <svg width={16} height={16}>
                    <use href="/sprite/sprite.svg#icon-Rating"></use>
                  </svg>
                  <p>
                    {el.rating}({el.reviews.length} Reviews)
                  </p>
                </div>
                <div className={css.locationItemBox}>
                  <svg width={16} height={16}>
                    <use href="/sprite/sprite.svg#icon-map"></use>
                  </svg>
                  <p>{el.location}</p>
                </div>
              </div>
            </div>
            <p className={css.catalogItemDescription}>{el.description}</p>
            <CamperEquipments camper={el} />
            <Link href={`/catalog/${el.id}`} className={css.showMoreBtn}>
              Show more
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CatalogList;
