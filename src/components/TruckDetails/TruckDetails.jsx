import { useState } from "react";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import BookingForm from "../BookingForm/BookingForm";
import css from "./TruckDetails.module.css";

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
        <div className={css.detailsContainer}>
            <div className={css.detailsHeader}>
                <h2>{name}</h2>
            </div>
            <div className={css.ratingDetails}>
                <img src="/icons/Rating-1.svg" alt="Rating" />
                <p>{rating} ({truck.reviews?.length || 0} Reviews)</p>
            </div>
            <div className={css.locationDetails}>
                <img src="/icons/map.svg" alt="Map" />
                <p>{location}</p>
            </div>
            <div className={css.priceDetails}>
                <h2>€ {price.toFixed(2)}</h2>
            </div>
            <div className={css.galleryDetails}>
                {gallery.map((img, index) => (
                    <img key={index} src={img.original} alt={`${name} image ${index + 1}`} />
                ))}
            </div>
            <div className={css.descrDetails}>
                <p>{description}</p>
            </div>
            <div className={css.tabs}>
                <button className={`${css.tabButton} ${activeTab === "features" ? css.active : ""}`}
                    onClick={() => handleClick("features")}>Features</button>
                <button className={`${css.tabButton} ${activeTab === "reviews" ? css.active : ""}`}
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