function Svg({ iconName, cssClass }) {
    return (
        <svg className={cssClass}>
            <use href={`/icons.svg#icon-${iconName}`} />
        </svg>
    );
}

export default Svg;