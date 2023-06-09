import type { CohortEntity } from "codac-server-graphql";
import Image from "next/image";
import Link from "next/link";

import { formatDate } from "../utils/date";
import { CardTag } from "./card-tag";

export const CohortCard = ({ cohort, href }: { cohort: CohortEntity; href: string }) => {
  const image = cohort.attributes.logo?.data.attributes.url ?? "";
  const startDate = cohort.attributes.start_date as string | undefined;
  return (
    <Link href={href} className="group block">
      <div className="space-y-2">
        <div className="relative">
          {startDate != undefined && (
            <div className="absolute left-2 top-2 z-10 flex">
              <CardTag tag={formatDate(startDate)} />
            </div>
          )}
          <Image
            src={image}
            width={150}
            height={150}
            className="rounded-xl backdrop-invert group-hover:opacity-80"
            alt={cohort.attributes.name ?? ""}
            // placeholder="blur"
            // blurDataURL={cohort.attributes.image?.data.attributes.url}
          />
        </div>

        <div className="group-hover:text-codac-cyan truncate text-sm font-medium text-white">
          {cohort.attributes.name}
        </div>

        {/* <CohortRating rating={4} /> */}
      </div>
    </Link>
  );
};
