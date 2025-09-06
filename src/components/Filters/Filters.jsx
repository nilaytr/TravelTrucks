import { useDispatch, useSelector } from "react-redux";
import { setForm, toggleFeature } from "../../redux/filters/filtersSlice";
import css from "./Filters.module.css";

const Filters = ({ iconName, text, filterName, type, value }) => {
    const dispatch = useDispatch();
    const currentValue = useSelector((state) => state.filters[filterName]);
    
    const selected = type === "toggle"
        ? currentValue === true
        : currentValue === value;
    
    const handleClick = () => {
        if (type === "toggle") {
            dispatch(toggleFeature(filterName));
        } else if (type === "select") {
            dispatch(setForm(selected ? "" : value));
        }
    };
    
    return (
        <li className={css.checkButtonWrapper}>
            <button className={`${css.checkButton} ${selected ? css.buttonSelected : ""}`}
                onClick={handleClick}>
                <img src={`/icons/${iconName}.svg`} alt={text} className={css.icon} />
                <p>{text}</p>
            </button>
        </li>
    );
};

export default Filters;