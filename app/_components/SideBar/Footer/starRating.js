import FullStar from "./fullstar.js";
import HalfStar from "./halfStar.js";
import EmptyStar from "./emptyStar.js";
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center text-sm">
      <span>{rating}</span>
      {Array.from({ length: fullStars }).map((_, index) => (
        <FullStar key={index} />
      ))}
      {hasHalfStar && <HalfStar />}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <EmptyStar key={index} />
      ))}
    </div>
  );
};
export default StarRating;
