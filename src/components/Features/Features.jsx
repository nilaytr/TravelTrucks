const Features = ({ iconName, text }) => {
    return (
        <li>
            <img src={`/icons/${iconName}.svg`} alt={text} />
            <p>{text}</p>
        </li>
    );
};

export default Features;