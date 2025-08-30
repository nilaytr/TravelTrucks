import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import TruckCard from "../TruckCard/TruckCard";
import { fetchTrucks } from "../../redux/trucks/trucksOperations";
import { Loader } from "../Loader/Loader";
//import css from "./Catalog.module.css";

const Catalog = () => {
    const dispatch = useDispatch();
    const [visibleTruck, setVisibleTruck] = useState(4);

    const truckList = useSelector((state) => state.trucks.items || []);
    const isLoading = useSelector((state) => state.trucks.isLoading);
    const error = useSelector((state) => state.trucks.error);

    useEffect(() => {
        dispatch(fetchTrucks());
    }, [dispatch]);

    const handleLoadMore = () => {
        setVisibleTruck((prev) => prev + 4);
    }

    if (isLoading) return <Loader />;
    if (error) return <div>{error}</div>;

    if (truckList.length === 0)
        return (
            <div>No trucks found</div>
        );
    
    return (
        <main>
            {truckList.slice(0, visibleTruck).map((truck) => (
                <TruckCard key={truck.id} truck={truck} />
            ))}

            {visibleTruck < truckList.length && (
                <button onClick={handleLoadMore}>Load more</button>
            )}
        </main>
    );
};

export default Catalog;