import { StarIcon } from "@heroicons/react/solid";
import clsx from "clsx";
export const CardRating = ({ rating }) => {
    return (<div className="flex gap-x-1">
      {Array.from({ length: 5 }).map((_, i) => {
            return (<StarIcon key={i} className={clsx("w-4", i < rating ? "text-white" : "text-gray-500")}/>);
        })}
    </div>);
};
