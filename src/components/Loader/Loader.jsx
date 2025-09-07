import { BeatLoader } from "react-spinners";
import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      <BeatLoader size={25} color="#E44848" />
    </div>
  )
};