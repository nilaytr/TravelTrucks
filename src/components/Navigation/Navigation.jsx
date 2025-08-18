import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

function Navigation() {
    return (
        <div>
            <nav>
                <NavLink
                    to="/"
                    className={css.headerLogo}>
                    <img src= "/TravelTrucks.png" alt="Travel Trucks logo" />
                </NavLink>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? `${css.navLink} ${css.active}` : css.navLink}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/catalog"
                            className={({ isActive }) => isActive ? `${css.navLink} ${css.active}` : css.navLink}>
                            Catalog
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation