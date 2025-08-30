import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "../../redux/filters/filtersSlice";

const Filters = ({ iconName, text, filterName, filterValue }) => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filters[filterName]);
    const selected = filter === filterValue;

    const handleClick = () => {
        dispatch(updateFilters({ [filterName]: selected ? "" : filterValue }));
    };

    return (
        <>
            <li>
                <button className={selected ? "active" : ""} onClick={handleClick}>
                    <img src={`/icons/${iconName}.svg`} alt={text} />
                    <p>{text}</p>
                </button>
            </li>
        </>
    );
};

export default Filters;