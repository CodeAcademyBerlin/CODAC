import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface CardProps {
  image?: string | StaticImageData;
  tag?: string;
  href?: string;
  title?: string;
  rating?: number;
  startDate?: string;
  course?: string;
  github?: string;
  linkdin?: string;
}

export const CardList = ({
  image,
  href = "",
  tag,
  title = "",
  rating,
  startDate = "",
  course = "",
  github = "",
  linkdin = "",
}: CardProps) => {
  return (
    <section className="card-list flex">
      <article className="mentorListCard shadow-lg transition duration-200">
        <header className="card-header">
          <div>{startDate && <p className="text-ms m-8 text-black">Start date {startDate}</p>}</div>
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
            <div className="ml-6 flex flex-col">
              <div className="group-hover:text-codac-cyan truncate text-sm font-medium italic text-white">
                {title}
              </div>
              <div className="group-hover:text-codac-cyan truncate text-sm font-medium text-white">
                {course}
              </div>
            </div>
          </div>
        </Link>
      </article>
    </section>
  );
};
