import type { CourseEntity, CourseEntityResponse, ProjectEntity } from "codac-server-graphql";
import Image from "next/image";

export const ProjectCard = ({ project }: { project: ProjectEntity }) => {
  console.log("project", project);
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-full lg:col-span-1"></div>

      <div className="col-span-full space-y-4 lg:col-span-2">
        <div className="truncate text-xl font-medium text-white lg:text-2xl">
          {project.attributes.name}
        </div>

        {/* <courseRating rating={course.rating} /> */}

        <div className="space-y-4 text-sm text-gray-200">
          {/* <p>{course.attributes.description}</p> */}
        </div>
      </div>

      <div className="col-span-full lg:col-span-1">
        {/* <Pricing course={course} cartCount={cartCount} /> */}
      </div>
    </div>
  );
};
