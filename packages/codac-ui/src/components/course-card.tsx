import type { CourseEntity } from "codac-server-graphql";
import Image from "next/image";
import Link from "next/link";

import { CourseRating } from "./course-rating";
import { CourseTag } from "./course-tag";

export const CourseCard = ({ course, href }: { course: CourseEntity; href: string }) => {
  const image = course.attributes.image?.data.attributes.url ?? "";
  return (
    <Link href={href} className="group block">
      <div className="space-y-2">
        <div className="relative">
          <div className="absolute left-2 top-2 z-10 flex">
            <CourseTag tag={`${course.attributes.calc_length ?? ""} months`} />
          </div>
          <Image
            src={image}
            width={150}
            height={150}
            className="rounded-xl backdrop-invert group-hover:opacity-80"
            alt={course.attributes.name}
            // placeholder="blur"
            // blurDataURL={course.attributes.image?.data.attributes.url}
          />
        </div>

        <div className="group-hover:text-vercel-cyan truncate text-sm font-medium text-white">
          {course.attributes.name}
        </div>

        {/* <CourseRating rating={4} /> */}
      </div>
    </Link>
  );
};
