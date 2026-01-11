import CamperEquipments, {
  CamperItemsProps,
} from "@/components/CatalogList/CamperEquipments/CamperEquipments";
import css from "./CamperByIdFeatures.module.css";

const CamperByIdFeatures = ({ camper }: CamperItemsProps) => {
  return (
    <div className={css.camperByIdFeaturesBox}>
      <div className={css.camperByIdFeaturesEquipmentsBox}>
        <CamperEquipments camper={camper} />
      </div>
      <div className={css.camperByIdFeaturesDetailsBox}>
        <h3 className={css.camperByIdFeaturesDetailsTitle}>Vehicle details</h3>
        <div className={css.camperByIdFeaturesDetailsLine}></div>
        <ul className={css.camperByIdFeaturesDetailsList}>
          <li className={css.camperByIdFeaturesDetailsItem}>
            <p>Form</p>
            <p>{camper.form}</p>
          </li>
          <li className={css.camperByIdFeaturesDetailsItem}>
            <p>Length</p>
            <p>{camper.length}</p>
          </li>
          <li className={css.camperByIdFeaturesDetailsItem}>
            <p>Width</p>
            <p>{camper.width}</p>
          </li>
          <li className={css.camperByIdFeaturesDetailsItem}>
            <p>Height</p>
            <p>{camper.height}</p>
          </li>
          <li className={css.camperByIdFeaturesDetailsItem}>
            <p>Tank</p>
            <p>{camper.tank}</p>
          </li>
          <li className={css.camperByIdFeaturesDetailsItem}>
            <p>Consumption</p>
            <p>{camper.consumption}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CamperByIdFeatures;
