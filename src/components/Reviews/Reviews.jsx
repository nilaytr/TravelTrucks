import css from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
    return (
        <div>
            <div>
                {reviews.map((review, index) => {
                    const initialName = review.reviewer_name ? review.reviewer_name[0].toUpperCase() : "?";
                    const displayName = review.reviewer_name || "Anonymous";
                    const rating = Number(review.rating) || 0;

                    return (
                        <div key={index}>
                            <div>
                                <span className={css.initials}>{initialName}</span>
                                <span className={css.name}>{displayName}</span>
                                <div>
                                    <p>{displayName}</p>
                                    <span className={css.stars}>
                                        {[...Array(5)].map((_, starIndex) => (
                                            <img
                                                key={starIndex}
                                                src={starIndex < rating ? "/icons/Rating-1.svg" : "/icons/Rating.svg"}
                                                alt={starIndex < rating ? "Filled Star" : "Empty Star"} className={css.star}
                                            />
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