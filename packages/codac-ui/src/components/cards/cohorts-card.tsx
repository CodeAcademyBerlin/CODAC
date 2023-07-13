import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { CardTag } from "./card-tag";

export interface CardProps {
  image?: string | StaticImageData;
  tag?: string;
  href?: string;
  title?: string;
  startDate?: string;
}

export const Cohorts = ({
  image,
  href = "",
  tag,
  title = "",
  startDate = "",

}: CardProps) => {
  return (
    <section className="card-list flex">
      <article className="card bg-dark rounded-xl shadow-lg transition duration-200">
        <header className="card-header">
          <div>
            {startDate && (
              <p className="m-8 text-center text-sm text-white">Start date {startDate}</p>
            )}
          </div>
        </header>
        <Link href={href} className="">
          <div className="card-content m-6 flex items-center ">
            {image && (
              <Image
                src={image}
                width={160}
                height={200}
                className="avatarBorder filter-grayscale block h-24 w-24 rounded-full "
                alt={title}
              />
            )}
            <div className="group-hover:text-codac-cyan ml-6 truncate text-sm font-medium italic text-white">
              {title}
            </div>
          </div>
        </Link>
        <div className="ml-32 flex">{tag != undefined && <CardTag tag={tag} />}</div>
      </article>
    </section>
  );
};
