import Svg from "../Svg";
import css from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
    return (
        <div>
            <div>
                {reviews.map((review, index) => {
                    const initialName = review.reviewer_name ? review.reviewer_name[0].toUpperCase() : "?";
                    const displayName = review.reviewer_name || "Anonymous";

                    return (
                        <div key={index}>
                            <div>
                                <span className={css.initials}>{initialName}</span>
                                <span className={css.name}>{displayName}</span>
                                <div>
                                    <p>{review.reviewer_name}</p>
                                    <span className={css.stars}>
                                        {[...Array(review.rating)].map((_, starIndex) => (
                                            <Svg key={starIndex} iconName="Rating-1" cssClass={css.star} />
                                        ))}
                                    </span>
                                    <span className={css.date}>{review.date}</span>
                                </div>
                            </div>
                            <p>{review.comment}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Reviews;