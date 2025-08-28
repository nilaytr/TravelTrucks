import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTrucks } from "../../redux/trucks/trucksOperations";
import Filters from "../../components/Filters/Filters";
import CatalogSideBar from "../../components/CatalogSideBar/CatalogSideBar";
import TruckCard from "../../components/TruckCard/TruckCard";
import Loader from "../../components/Loader/Loader";

const CatalogPage = () => {
    const dispatch = useDispatch();
    const { items, isLoading, error } = useSelector((state) => state.trucks);

    useEffect(() => {
        dispatch(fetchTrucks());
    }, [dispatch]);

    return (

    )



}

export default CatalogPage;