import css from "./Features.module.css";

const FeaturesItem = ({ iconName, text }) => {
    return (
        <li className={css.featureItem}>
            <img src={`/icons/${iconName}.svg`} alt={text} />
            <span>{text}</span>
        </li>
    );
};

export default FeaturesItem;