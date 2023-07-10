import Image, { StaticImageData } from "next/image";

export interface CohortCardProps {
  image?: string | StaticImageData;
  title?: string;
  startDate?: string;
}

export const CohortCard = ({ image, title = "", startDate = "" }: CohortCardProps) => {
  return (
    <div className=" m-20 flex justify-center  cardCohort p-12">

      <div>
        {image && (
          <Image
            style={{ minHeight: "230px", maxHeight: "300px" }}
            src={image}
            width={200}
            height={200}
            className="rounded-xl backdrop-invert group-hover:opacity-80"
            alt={title}
          />
        )}

      </div>
      <div className="flex flex-col">
        <div>
          <div className="p-8 text-lg font-medium text-white"></div>
        </div>
        <h3 className="p-8 text-lg font-medium italic  text-white"> {title}</h3>

        <div>
          {startDate && <p className="m-8 text-lg text-white">Start date {startDate}</p>}
        </div>
      </div>
    </div>
  );
};
