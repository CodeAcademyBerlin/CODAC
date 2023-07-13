import Image from "next/image";
import Link from "next/link";
export const CardList = ({ image, href = "", title = "", startDate = "", course = "", }) => {
    return (<section className="card-list flex ">
      <article className="mentorListCard shadow-lg transition duration-200 ">
        <Link href={href} className="">
          <div className=" card-content m-4 flex items-center ">
            {image && (<Image src={image} width={160} height={200} className="avatarBorder filter-grayscale block h-24 w-24 rounded-full " alt={title}/>)}
            <div className="ml-6 flex flex-col">
              <div className="group-hover:text-codac-cyan truncate text-sm font-medium italic text-white">
                {title}
              </div>
              <div className="group-hover:text-codac-cyan truncate text-sm font-medium text-white">
                {course}
              </div>
              <div>
                {startDate && <p className="text-ms m-8 text-black">Start date {startDate}</p>}
              </div>
            </div>
          </div>
        </Link>
      </article>
    </section>);
};
