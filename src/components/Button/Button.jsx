import css from "./Button.module.css";

export const Button = ({ text, className, onClick }) => {
  return (
    <button className={`${css.button} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};