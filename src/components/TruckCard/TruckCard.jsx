import { useDispatch, useSelector } from "react-redux";
import { fetchTrucksById } from "../../redux/trucks/trucksOperations";
import { useNavigate } from "react-router-dom";
import { addFavourite } from "../../redux/favourites/favouritesSlice";
import { Loader } from "../Loader/Loader";
import Features from "../Features/Features";
//import css from "./TruckCard.module.css";

const TruckCard = ({ truck }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoading = useSelector((state) => state.trucks.isLoading);
    const error = useSelector((state) => state.trucks.error);

    const favourites = useSelector((state) => state.favourites.items || []);
    const isFavourite = favourites.some((f) =>
        typeof f === "object" ? f?.id === truck?.id : f === truck?.id);
    
    if (!truck) return null;
    if (isLoading) return <Loader />;
    if (error) return <div>{error}</div>;

    const handleFavourite = () => {
        dispatch(addFavourite(truck));
    };
    
    const handleShowMore = async () => {
        try {
            await dispatch(fetchTrucksById(truck.id)).unwrap();
            navigate(`/catalog/${truck.id}`, { state: truck });
        } catch (error) {
            console.error(error);
        }
    };
    
    const featureKeys = Object.keys(truck || {}).filter(
        (key) => typeof truck[key] === "boolean" && truck[key] === true);

    return (
        <>
            <ul>
                <li>
                    <div>
                        <img src={truck.gallery?.[0]?.thumb} alt={truck.name} />
                    </div>
                    <div>
                        <h2>{truck.name}</h2>
                    </div>
                    <div>
                        <h2>€ {Number(truck.price || 0).toFixed(2)}</h2>
                        <button
                            onClick={handleFavourite}
                            aria-label={isFavourite ? "Remove from favorites" : "Add to favorites"}
                        >
                            <img
                                src={`/icons/${isFavourite ? "RedVector" : "Vector"}.svg`}
                                alt="Favourite"
                            />
                        </button>
                    </div>
                    <div>
                        <img src="/icons/Rating-1.svg" alt="Rating" />
                        <p>{truck.rating} ({truck.reviews?.length || 0} Reviews)</p>
                    </div>
                    <div>
                        <img src="/icons/map.svg" alt="Map" />
                        <p>{truck.location}</p>
                    </div>
                    <p>{truck.description}</p>
                    <div>
                        <ul>
                            {featureKeys.map((key) => (
                                <Features
                                    key={key}
                                    text={key[0].toUpperCase() + key.slice(1)}
                                    iconName={key.toLowerCase()}
                                />
                            ))}
                            {truck.transmission && (
                                <Features
                                    text={truck.transmission[0].toUpperCase() + truck.transmission.slice(1)}
                                    iconName="diagram"
                                />
                            )}
                        </ul>
                    </div>
                    <button onClick={handleShowMore}>Show more</button>
                </li>
            </ul>
        </>
    );
};

export default TruckCard;