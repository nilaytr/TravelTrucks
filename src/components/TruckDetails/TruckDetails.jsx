import { useState } from "react";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import BookingForm from "../BookingForm/BookingForm";
//import css from "./TruckDetails.module.css";

const TruckDetails = ({ truck }) => {
    const [activeTab, setActiveTab] = useState('features');

    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    if (!truck) return null;

    const {
        name,
        rating,
        reviews,
        location,
        price,
        gallery,
        description,
        transmission,
        engine,
        AC,
        kitchen,
        radio,
        form,
        length,
        width,
        height,
        tank,
        consumption,
    } = truck;

    return (
        <div>
            <div>
                <h2>{name}</h2>
            </div>
            <div>
                <p>{rating}</p>
            </div>
            <div>
                <p>{location}</p>
            </div>
            <div>
                <p>{price}</p>
            </div>
            <div>
                {gallery.map((img, index) => (
                    <img key={index} src={img.original} alt={`${name} image ${index + 1}`} />
                ))}
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default TruckDetails;