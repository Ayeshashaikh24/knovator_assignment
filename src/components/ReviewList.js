export default function ReviewList({ reviews, deleteReview }) {
    return (
      <div className="reviews">
        <h2>Reviews</h2>
        <ul className="review-list">
          {reviews.map((review, index) => (
            <li key={index} className="review-item">
              <h3>{review.title}</h3>
              <p>Rating: {review.rating}</p>
              <p>Description: {review.description}</p>
              <button
                className="delete-button"
                onClick={() => deleteReview(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  