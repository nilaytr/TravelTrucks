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

    console.log("TruckDetails props.truck:", truck);

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
                <h2>€ {price.toFixed(2)}</h2>
            </div>
            <div>
                {gallery.map((img, index) => (
                    <img key={index} src={img.original} alt={`${name} image ${index + 1}`} />
                ))}
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div>
                <button className={`tab-button ${activeTab === "features" ? "active" : ""}`}
                    onClick={() => handleClick("features")}>Features</button>
                <button className={`tab-button ${activeTab === "reviews" ? "active" : ""}`}
                    onClick={() => handleClick("reviews")}>Reviews</button>
            </div>
            <div>
                {activeTab === "features" && <Features
                    transmission={transmission}
                    engine={engine}
                    AC={AC}
                    kitchen={kitchen}
                    radio={radio}
                    form={form}
                    length={length}
                    width={width}
                    height={height}
                    tank={tank}
                    consumption={consumption}
                />}
                {activeTab === "reviews" && <Reviews reviews={reviews} />}
            </div>
            <div>
                <BookingForm />
            </div>
        </div>
    );
};

export default TruckDetails;