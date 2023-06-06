import type { Review } from "../types";
import { CourseRating } from "./course-rating";

export const CourseReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center gap-x-2">
          <div className="h-6 w-6 rounded-full bg-gray-700" />
          <div className="text-sm text-white">{review.name}</div>
        </div>

        {review.rating ? <CourseRating rating={review.rating} /> : null}
      </div>

      <div className="text-gray-400">{review.text}</div>
    </div>
  );
};
