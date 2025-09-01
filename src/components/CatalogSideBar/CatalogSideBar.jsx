import Location from "../Location/Location";
import Filters from "../Filters/Filters";
import css from "./CatalogSideBar.module.css";

const CatalogSideBar = () => {
    
    return (
        <aside className={css.catalogSideBar}>
            <div>
                <Location />
            </div>
            <div>
                <p>Filters</p>
                <h2>Vehicle equipment</h2>
                <ul>
                    <Filters iconName="ac" text="AC" filterName="AC" filterValue="true" />
                    <Filters iconName="diagram" text="Automatic" filterName="transmission" value="automatic" />
                    <Filters iconName="kitchen" text="Kitchen" filterName="kitchen" type="toggle" />
                    <Filters iconName="tv" text="TV" filterName="tv" type="toggle" />
                    <Filters iconName="bathroom" text="Bathroom" filterName="bathroom" type="toggle" />
                </ul>
            </div>
            <div>
                <h2>Vehicle type</h2>
                <ul>
                    <Filters iconName="bi_grid-1x2" text="Van" filterName="form" type="select" value="van" />
                    <Filters iconName="bi_grid" text="Fully Integrated" filterName="form" type="select" value="fullyIntegrated" />
                    <Filters iconName="bi_grid-3x3-gap" text="Alcove" filterName="form" type="select" value="alcove" />
                </ul>
            </div>
        </aside>
    );
};

export default CatalogSideBar;