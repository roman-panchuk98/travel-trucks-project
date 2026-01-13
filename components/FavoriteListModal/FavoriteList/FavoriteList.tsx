import { useCamperStore } from "@/lib/store/camperStore";
import { useRouter } from "next/navigation";
import css from "./FavoriteList.module.css";
import toast from "react-hot-toast";
import { FavoriteListModalProps } from "../FavoriteListModal";

const FavoriteList = ({ onClose }: FavoriteListModalProps) => {
  const router = useRouter();
  const { favorites, removeFromFavorites } = useCamperStore();
  const handleClick = (id: string) => {
    onClose();
    router.push(`/catalog/${id}`);
  };

  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    event.stopPropagation();
    removeFromFavorites(id);
    toast.success("Camper is remove in favorite");
  };

  return (
    <div className={css.favoriteBox}>
      <h3 className={css.favoriteTitle}>Your favorite campers:</h3>
      {favorites.length === 0 ? (
        <p className={css.emptyListFavorite}>
          This list is empty, add your first camper to your favorites
        </p>
      ) : (
        <ul className={css.favoriteList}>
          {favorites.map((camp) => (
            <li
              key={camp.id}
              onClick={() => handleClick(camp.id)}
              className={css.favoriteItem}
            >
              <div className={css.favoriteItemBox}>
                {camp.name}
                <button
                  type="button"
                  onClick={(e) => handleDelete(e, camp.id)}
                  className={css.deleteFavoriteBtn}
                >
                  <svg width={18} height={18} className={css.favoriteListIcon}>
                    <use href="/sprite/sprite.svg#icon-trash" />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteList;
