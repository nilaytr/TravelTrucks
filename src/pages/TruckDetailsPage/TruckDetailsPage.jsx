import { useDispatch, useSelector } from "react-redux";
import { useParams} from "react-router-dom";
import { useEffect } from "react";
import { fetchTrucksById } from "../../redux/trucks/trucksOperations";
import TruckDetails from "../../components/TruckDetails/TruckDetails";
import Navigation from "../../components/Navigation/Navigation";
import { Loader } from "../../components/Loader/Loader";

const TruckDetailsPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { selectedTruck, isLoading, error } = useSelector(state => state.trucks);
    
    useEffect(() => {
        dispatch(fetchTrucksById(id));
    }, [dispatch, id]);
    
    if (isLoading) return <Loader />;
    if (error) return <div>{error}</div>;
    
    return (
        <>
            <Navigation />
            <TruckDetails truck={selectedTruck} />
        </>
    )
};

export default TruckDetailsPage;