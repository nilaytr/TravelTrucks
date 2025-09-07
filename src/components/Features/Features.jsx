import css from "./Features.module.css";

const iconMap = {
    bathroom: "bathroom.svg",
    tv: "tv.svg",
    kitchen: "kitchen.svg",
    ac: "ac.svg",
    radio: "radio.svg",
    diagram: "diagram.svg",
};

const Features = ({
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
    featureKeys = []
}) => {
    return (
        <ul className={css.featuresListContainer}>
            <ul className={css.featuresUlList}>
               {featureKeys.map((key) => (
                <li key={key} className={css.featureItem}>
                    <img src={`/icons/${iconMap[key] || key + ".svg"}`} alt={key} />
                    <span>{key[0].toUpperCase() + key.slice(1)}</span>
                </li>
            ))}
            {transmission && (
                <li className={css.featureItem}>
                    <img src="/icons/diagram.svg" alt="Transmission" />
                    <span>{transmission}</span>
                </li>
            )}
            {engine && (
                <li className={css.featureItem}>
                    <img src="/icons/engine.svg" alt="Engine" />
                    <span>{engine}</span>
                </li>
            )}
            {AC && (
                <li className={css.featureItem}>
                    <img src="/icons/ac.svg" alt="AC" />
                    <span>AC</span>
                </li>
            )}
            {kitchen && (
                <li className={css.featureItem}>
                    <img src="/icons/kitchen.svg" alt="Kitchen" />
                    <span>Kitchen</span>
                </li>
            )}
            {radio && (
                <li className={css.featureItem}>
                    <img src="/icons/radio.svg" alt="Radio" />
                    <span>Radio</span>
                </li>
            )} 
            </ul>
            <div className={css.detailsContainer}>
                <h2 className={css.detailsHeader}>Vehicle details</h2>
                <ul className={css.detailsList}>
                   {form && (
                    <li className={css.featureItemDetails}>
                        <span className={css.featureLabel}>Form</span>
                        <span className={css.featureValue}>{form}</span>
                    </li>
                )}
                {length && (
                    <li className={css.featureItemDetails}>
                        <span className={css.featureLabel}>Length</span>
                        <span className={css.featureValue}>{length}</span>
                    </li>
                )}
                {width && (
                    <li className={css.featureItemDetails}>
                        <span className={css.featureLabel}>Width</span>
                        <span className={css.featureValue}>{width}</span>
                    </li>
                )}
                {height && (
                    <li className={css.featureItemDetails}>
                        <span className={css.featureLabel}>Height</span>
                        <span className={css.featureValue}>{height}</span>
                    </li>
                )}
                {tank && (
                    <li className={css.featureItemDetails}>
                        <span className={css.featureLabel}>Tank</span>
                        <span className={css.featureValue}>{tank}</span>
                    </li>
                )}
                {consumption && (
                    <li className={css.featureItemDetails}>
                        <span className={css.featureLabel}>Consumption</span>
                        <span className={css.featureValue}>{consumption}</span>
                    </li>
                )} 
                </ul>
            </div>
        </ul>
    );
};

export default Features;