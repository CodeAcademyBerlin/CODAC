import Image from "next/image";
import Link from "next/link";

import { CardRating } from "./card-rating";

export interface CardProps {
  image?: string;
  imageBlur?: string;
  rating?: number;
  name: string;
  description?: string;
  href: string;
}

export const Card = ({ image, imageBlur, rating, name, description, href }: CardProps) => {
  return (
    <Link
      href={href}
      className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
    >
      <div className="font-medium text-gray-200 group-hover:text-gray-50">{name}</div>

      {description ? (
        <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
          {description}
        </div>
      ) : null}
    </Link>
    // <Link href={href} className="group block">
    //   <div className="space-y-2">
    //     <div className="relative">

    //      {image && <Image
    //         src={`/${image}`}
    //         width={400}
    //         height={400}
    //         className="rounded-xl grayscale group-hover:opacity-80"
    //         alt={name}
    //         placeholder="blur"
    //         blurDataURL={imageBlur}
    //       />}
    //     </div>

    //     <div className="group-hover:text-vercel-cyan truncate text-sm font-medium text-white">
    //       {name}
    //     </div>
    //     {description &&  <div className="text-sm text-gray-300">
    //   <strong className="font-bold text-gray-100">
    //     {description}
    //   </strong>
    // </div>}

    //     {rating ? <CardRating rating={rating} /> : null}

    //   </div>
    // </Link>
  );
};
