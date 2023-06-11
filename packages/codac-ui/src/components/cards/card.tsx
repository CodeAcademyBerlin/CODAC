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

export const Card = ({ image, href = "", tag, title = "", rating }: CardProps) => {
  return (
    <Link href={href} className="group block">
      <div className="space-y-2">
        <div className="relative">
          {tag != undefined && (
            <div className="absolute left-2 top-2 z-10 flex">
              <CardTag tag={tag} />
            </div>
          )}
          {image && (
            <Image
              src={image}
              width={150}
              height={150}
              className="rounded-xl backdrop-invert group-hover:opacity-80"
              alt={title}
              // placeholder="blur"
              // blurDataURL={course.attributes.image?.data.attributes.url}
            />
          )}
        </div>

        <div className="group-hover:text-codac-cyan truncate text-sm font-medium text-white">
          {title}
        </div>

        {rating != undefined && <CardRating rating={rating} />}
      </div>
    </Link>
  );
};
