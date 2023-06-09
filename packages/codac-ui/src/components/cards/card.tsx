import Image from "next/image";
import Link from "next/link";

import { CardRating } from "./card-rating";
import { CardTag } from "./card-tag";

export interface CardProps {
  image?: string;
  tag?: string;
  href?: string;
  title?: string;
  rating?: number;
}
const defaultImage =
  "https://res.cloudinary.com/codac-strapi-prod/image/upload/v1686089631/d4a0be07_4c48_4ab6_bc3e_385b103d73b6_fda4a6ccd9.jpg";

export const Card = ({ image = defaultImage, href = "", tag, title = "", rating }: CardProps) => {
  return (
    <Link href={href} className="group block">
      <div className="space-y-2">
        <div className="relative">
          {tag != undefined && (
            <div className="absolute left-2 top-2 z-10 flex">
              <CardTag tag={tag} />
            </div>
          )}
          <Image
            src={image}
            width={150}
            height={150}
            className="rounded-xl backdrop-invert group-hover:opacity-80"
            alt={title}
            // placeholder="blur"
            // blurDataURL={course.attributes.image?.data.attributes.url}
          />
        </div>

        <div className="group-hover:text-codac-cyan truncate text-sm font-medium text-white">
          {title}
        </div>

        {rating != undefined && <CardRating rating={rating} />}
      </div>
    </Link>
  );
};
