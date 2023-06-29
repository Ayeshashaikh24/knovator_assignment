import React, { useState } from "react";

export default function ReviewForm({ addReview }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && rating) {
      addReview({ title, rating, description });
      setTitle("");
      setRating("");
      setDescription("");
    }
  };

  const handleReset = () => {
    setTitle("");
    setRating("");
    setDescription("");
  };

  return (
    <div className="review-form">
      <h2>Give Review</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title*</label>
        <input
          type="text"
          id="title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="rating">Rating*</label>
        <input
          type="number"
          id="rating"
          min="1"
          max="5"
          value={rating}
          required
          onChange={(e) => setRating(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
}