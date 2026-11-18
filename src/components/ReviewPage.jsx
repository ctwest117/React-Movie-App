import { useState } from "react";
import { Star } from "./Star";

const baseObj = { movie: "", name: "", email: "", rating: 0, review: "" };

export function Review() {
  const [review, setReview] = useState({ ...baseObj });
  const [revList, setRevList] = useState([]);

  const handleChange = (key, val) => {
    setReview((prev) => ({ ...prev, [key]: val }));
  };

  const checkEmail = (e) => {
    if (!e) return false;
    if (!e.includes("@")) return false;
    if (!e.endsWith(".com") && !e.endsWith(".edu")) return false;
    return true;
  };

  const checkForm = (rev) => {
    const { movie, name, email, rating, review } = rev;
    if (!movie || !name || rating < 1 || rating > 5) return false;
    if (!checkEmail(email)) return false;
    if (revList.some((r) => r.email === email && r.movie === movie)) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkForm(review)) return;
    setRevList((prev) => [...prev, { ...review }]);
    setReview({ ...baseObj });
  };

  return (
    <div className="mx-auto grid max-w-5xl gap-8 p-5 md:grid-cols-2">
      <form
        className="flex flex-col gap-4 [&>input]:rounded-sm [&>input]:border [&>input]:border-slate-500 [&>input]:p-3 [&>input]:outline-amber-400"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1 className="text-xl font-semibold">Write a review</h1>
        {!review.movie && <label htmlFor="movie">Required</label>}
        <input
          name="movie"
          type="text"
          value={review.movie}
          placeholder="Movie Title"
          onChange={(e) => handleChange("movie", e.target.value)}
        />
        {!review.name && <label htmlFor="name">Required</label>}
        <input
          name="name"
          type="text"
          value={review.name}
          placeholder="Username"
          onChange={(e) => handleChange("name", e.target.value)}
        />
        {!checkEmail(review.email) && <label htmlFor="email">Required</label>}
        <input
          name="email"
          type="email"
          value={review.email}
          placeholder="example@email.com"
          onChange={(e) => handleChange("email", e.target.value)}
        />
        {!review.rating && <label>Required</label>}
        <div className="flex">
          {[1, 2, 3, 4, 5].map((i) => {
            return (
              <button
                key={i}
                type="button"
                onClick={() => handleChange("rating", i)}
                className="cursor-pointer rounded-sm p-1 hover:bg-slate-700"
              >
                <Star
                  key={i}
                  size={20}
                  stroke="gold"
                  fill={i <= review.rating ? "gold" : "none"}
                />
              </button>
            );
          })}
        </div>
        {!review.review && <label htmlFor="review">Not Required</label>}
        <input
          name="review"
          type="text"
          value={review.review}
          placeholder="Write your review here..."
          onChange={(e) => handleChange("review", e.target.value)}
        />
        <button
          type="submit"
          className="cursor-pointer rounded-sm bg-amber-400 p-3 font-medium text-slate-900 hover:bg-amber-300"
        >
          Submit
        </button>
      </form>
      <ul className="space-y-5 [&>li]:space-y-2 [&>li]:border-b [&>li]:border-slate-700 [&>li]:pb-5 [&>li]:break-words">
        {revList.map(({ movie, name, email, rating, review }) => {
          return (
            <li key={movie + email}>
              <div className="text-lg font-semibold text-amber-400">
                {movie}
              </div>
              <div className="text-sm text-slate-400">
                {name} · {email}
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => {
                  return (
                    <Star
                      key={i}
                      size={20}
                      stroke="gold"
                      fill={i <= rating ? "gold" : "none"}
                    />
                  );
                })}
              </div>
              {review && <div>{review}</div>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
