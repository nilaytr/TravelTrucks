import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../../redux/filters/filtersSlice";
import css from "./Location.module.css";

const Location = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    
    const handleChange = (e) => {
        setValue(e.target.value);
        dispatch(setLocation(e.target.value));
    };

    return (
        <div className={css.locationWrapper}>
            <p className={css.locationTitle}>Location</p>
            <div className={css.locationInput}>
                <img src="/icons/map.svg" alt="Location Icon" className={css.locationIcon} />
                <input
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(e)}
                    name="location"
                    placeholder="Please enter a location"
                    className={css.inputField}
                />
            </div>
        </div>
    );
};

export default Location;