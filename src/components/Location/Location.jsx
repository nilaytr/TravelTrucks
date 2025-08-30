import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFilters } from "../../redux/filters/filtersSlice";
import css from "./Location.module.css";

const Location = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
        dispatch(updateFilters({ location: e.target.value }));
    };

    return (
        <div>
            <p>Location</p>
            <div className={css.locationWrapper}>
                <img src="/icons/map.svg" alt="Location Icon" className={css.locationIcon}/>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(e)}
                    name="location"
                    placeholder="Please enter a location"
                />
            </div>
        </div>
    );
};

export default Location;