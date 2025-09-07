import css from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
    return (
        <div className={css.reviewsWrapper}>
            <div className={css.reviewsContainer}>
                {reviews.map((review, index) => {
                    const initialName = review.reviewer_name ? review.reviewer_name[0].toUpperCase() : "?";
                    const displayName = review.reviewer_name || "Anonymous";
                    const rating = Number(review.reviewer_rating) || 0;

                    return (
                        <div key={index}>
                            <div className={css.reviewItem}>
                                <span className={css.initials}>{initialName}</span>
                                <div className={css.nameStars}>
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
                            <p className={css.reviewText}>{review.comment}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Reviews;