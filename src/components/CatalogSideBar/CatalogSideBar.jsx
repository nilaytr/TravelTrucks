import Location from "../Location/Location";
import Filters from "../Filters/Filters";
import { Button } from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { fetchTrucks } from "../../redux/trucks/trucksOperations";
import css from "./CatalogSideBar.module.css";

const CatalogSideBar = () => {
    const filterObjects = useSelector((state) => state.filters);
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(fetchTrucks(filterObjects));
    };

    return (
        <aside>
            <div>
                <Location />
            </div>
            <div>
                <p>Filters</p>
                <h2>Vehicle equipment</h2>
                <ul>
                    <Filters iconName="wind" text="AC" filterName="ac" filterValue="true" />
                    <Filters iconName="diagram" text="Automatic" filterName="transmission" filterValue="automatic" />
                    <Filters iconName="cup-hot" text="Kitchen" filterName="kitchen" filterValue="true" />
                    <Filters iconName="tv" text="TV" filterName="tv" filterValue="true" />
                    <Filters iconName="ph_shower" text="Bathroom" filterName="bathroom" filterValue="true" />
                </ul>
            </div>
            <div>
                <h2>Vehicle type</h2>
                <ul>
                    <Filters iconName="bi_grid-1x2" text="Van" filterName="form" filterValue="van" />
                    <Filters iconName="bi_grid" text="Fully Integrated" filterName="form" filterValue="fullyIntegrated" />
                    <Filters iconName="bi_grid-3x3-gap" text="Alcove" filterName="form" filterValue="alcove" />
                </ul>
            </div>
            <Button text="Search" className={css.searchButton} type="submit" onClick={handleSearch} />
        </aside>
    );
};

export default CatalogSideBar;