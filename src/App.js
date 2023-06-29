import { useState } from "react";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";
import "./App.css";
function App() {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  const deleteReview = (index) => {
    setReviews(reviews.filter((_, i) => i !== index));
  };

  return (
    <div className="page">
      <ReviewForm addReview={addReview} />
      <ReviewList reviews={reviews} deleteReview={deleteReview} />
    </div>
  );
}

export default App;