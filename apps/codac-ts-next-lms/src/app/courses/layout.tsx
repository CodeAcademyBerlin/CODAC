"use client";
import { DashboardLayout, GlobalNav, SignIn } from "codac-ui";

import { navigation } from "#/constants/navigation";

import { useAuth } from "../hooks/useAuth";

export const metadata = {
  title: "Courses",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  // const session = await getServerSession(authOptions);
  // console.log("session", session);
  // const courses = await getCourses();
  const { user } = useAuth();
  console.log("user", user);

  return (
    <DashboardLayout
      navigation={
        <GlobalNav navigation={navigation} header="CODAC LMS" authentication={user?.email} />
      }
    >
      <div className="space-y-9">
        {/* <Boundary labels={["courses"]} color="blue">
          <div className="flex justify-between">
            <TabGroup
              path={`/courses`}
              items={[
                ...courses.map((x) => ({
                  text: x.attributes.name,
                  slug: x.attributes.slug ?? "",
                })),
              ]}
            />

            <div className="self-start"></div>
          </div>
        </Boundary> */}
        <div>{children}</div>
      </div>
    </DashboardLayout>
  );
}
