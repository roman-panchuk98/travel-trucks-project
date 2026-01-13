import Modal from "../Modal/Modal";
import FavoriteList from "./FavoriteList/FavoriteList";

export interface FavoriteListModalProps {
  onClose: () => void;
}

const FavoriteListModal = ({ onClose }: FavoriteListModalProps) => {
  return (
    <Modal onClose={onClose}>
      <FavoriteList onClose={onClose} />
    </Modal>
  );
};

export default FavoriteListModal;
