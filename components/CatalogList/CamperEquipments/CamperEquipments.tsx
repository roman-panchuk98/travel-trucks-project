import { Camper } from "@/types/camper";
import css from "./CamperEquipments.module.css";

export interface CamperItemsProps {
  camper: Camper;
}

const CamperEquipments = ({ camper }: CamperItemsProps) => {
  const equipmentOptions: {
    key: keyof Camper;
    label: string;
    icon: string;
  }[] = [
    { key: "AC", label: "AC", icon: "icon-AC" },
    { key: "bathroom", label: "Bathroom", icon: "icon-bathroom" },
    { key: "kitchen", label: "Kitchen", icon: "icon-kitchen" },
    { key: "TV", label: "TV", icon: "icon-tv" },
    { key: "radio", label: "Radio", icon: "icon-radio" },
    { key: "refrigerator", label: "Refrigerator", icon: "icon-refrigerator" },
    { key: "microwave", label: "Microwave", icon: "icon-microwave" },
  ];

  return (
    <ul className={css.camperItemsList}>
      {equipmentOptions
        .filter((item) => camper[item.key])
        .map((item) => (
          <li key={item.key} className={css.camperItemsItem}>
            <svg width={20} height={20}>
              <use href={`/sprite/sprite.svg#${item.icon}`} />
            </svg>
            <span className={css.camperItemsLabel}>{item.label}</span>
          </li>
        ))}
    </ul>
  );
};

export default CamperEquipments;
