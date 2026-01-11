import { CamperItemsProps } from "@/components/CatalogList/CamperEquipments/CamperEquipments";
import { Rating } from "react-simple-star-rating";
import css from "./CamperbyIdReviews.module.css";
const CamperbyIdReviews = ({ camper }: CamperItemsProps) => {
  return (
    <ul className={css.camperbyIdReviewsList}>
      {camper.reviews.map((el, index) => (
        <li key={index} className={css.camperbyIdReviewsItem}>
          <div className={css.camperbyIdReviewsItemBox}>
            <div className={css.camperbyIdReviewsItemAvatar}>
              {el.reviewer_name.charAt(0).toUpperCase()}
            </div>
            <div className={css.camperbyIdReviewsItemNameRatingBox}>
              <h3 className={css.camperbyIdReviewsItemName}>
                {el.reviewer_name}
              </h3>
              <Rating
                initialValue={el.reviewer_rating}
                readonly
                size={16}
                allowFraction
              />
            </div>
          </div>
          <p className={css.camperbyIdReviewsItemComment}>{el.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default CamperbyIdReviews;
