import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import TruckCard from "../TruckCard/TruckCard";
import CatalogSideBar from "../CatalogSideBar/CatalogSideBar";
import { fetchTrucks } from "../../redux/trucks/trucksOperations";
import { filterTrucks } from "../../utils/filterTrucks";
import { Loader } from "../Loader/Loader";
import css from "./Catalog.module.css";

const Catalog = () => {
    const dispatch = useDispatch();
    const { items, isLoading, error } = useSelector((state) => state.trucks);
    const filters = useSelector((state) => state.filters);
    
    const [visibleTruck, setVisibleTruck] = useState(4);
    const [filteredItems, setFilteredItems] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    
    useEffect(() => {
        dispatch(fetchTrucks());
    }, [dispatch]);
    
    const handleLoadMore = () => {
        setVisibleTruck((prev) => prev + 4);
    };
    
    const handleSearch = () => {
        const result = filterTrucks({
            trucks: items,
            location: filters.location,
            selectedTypes: filters.form ? [filters.form] : [],
            selectedEquipments: Object.keys(filters).filter((key) =>
                typeof filters[key] === "boolean" && filters[key] === true).map(key => key.toLowerCase())
        });
        
        setFilteredItems(result);
        setHasSearched(true);
        setVisibleTruck(4);
    };
    
    if (isLoading) return <Loader />;
    if (error) return <div>{error}</div>;
    
    const displayTrucks = hasSearched ? filteredItems : items;
    
    if (!displayTrucks || displayTrucks.length === 0) {
        return <div>No trucks found</div>;
    }
    
    return (
        <main className={css.catalog}>
            <div>
                <CatalogSideBar />
                <button className={css.searchButton} onClick={handleSearch}>Search</button>
            </div>
            <div className={css.trucksRight}>
                <ul>
                    {displayTrucks.slice(0, visibleTruck).map((truck) => (
                        <li key={truck.id}>
                            <TruckCard truck={truck} />
                        </li>
                    ))}
                </ul>
                {visibleTruck < displayTrucks.length && (
                    <button className={css.loadMoreButton} onClick={handleLoadMore}>Load more</button>
                )}
            </div>
        </main>
    );
};

export default Catalog;