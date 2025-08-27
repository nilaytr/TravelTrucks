import { useSelector, useDispatch } from "react-redux";
//import TruckCard from "../../components/TruckCard/TruckCard";
import { fetchTrucks } from "../../redux/trucks/trucksOperations";
//import Loader from "../../components/Loader/Loader";

const CatalogPage = () => {
    const dispatch = useDispatch();
    const { items, isLoading, error } = useSelector((state) => state.trucks);



}










