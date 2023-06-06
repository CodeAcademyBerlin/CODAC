import type { CourseEntity, CourseEntityResponse } from "codac-server-graphql";
import Image from "next/image";

export const SingleCourse = async ({ data }: { data: Promise<Response> }) => {
  const course = (await data.then(async (res) => res.json())) as CourseEntityResponse;
  const image = course.data.attributes.image?.data.attributes.url ?? "";
  // Get the cart count from the users cookies and pass it to the client
  // AddToCart component
  // const cartCount = cookies().get('_cart_count')?.value || '0';
  console.log("course", course);
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-full lg:col-span-1">
        <div className="space-y-2">
          <Image
            src={image}
            className="hidden rounded-lg grayscale lg:block"
            alt={course.data.attributes.name}
            height={400}
            width={400}
          />
        </div>
      </div>

      <div className="col-span-full space-y-4 lg:col-span-2">
        <div className="truncate text-xl font-medium text-white lg:text-2xl">
          {course.data.attributes.name}
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
