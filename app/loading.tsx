import css from "./loading.module.css";
import { PulseLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className={css.backdrop}>
      <PulseLoader color="yellow" />
    </div>
  );
};

export default Loading;
