import { gql, useQuery } from "@apollo/client";
import type { StudentEntity } from "codac-graphql-types";
import { Card, Ping, SkeletonCards } from "codac-ui";

import type { ApolloGenericQuery } from "#/types/apollo";

const GetStudentsDocument = gql`
  query getAllStudents($cohortName: String) {
    students(filters: { cohort: { name: { eq: $cohortName } } }) {
      data {
        id
        attributes {
          firstname
          lastname
          user {
            data {
              attributes {
                avatar {
                  data {
                    attributes {
                      url
                      previewUrl
                    }
                  }
                }
              }
            }
          }
          cohort {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

function Students() {
  const { data, loading } = useQuery<ApolloGenericQuery<StudentEntity[]>>(GetStudentsDocument);
  const students = data?.students?.data ?? [];

  return (
    <>
      <div className="space-y-6">
        <div>
          <div className="text-lg font-medium text-white">Students</div>
        </div>
        {loading && <SkeletonCards number={3} isLoading={loading} />}
        <div className="grid grid-cols-4 gap-2">
          {students.map((student) => (
            <div key={student.id} className="">
              {student.attributes && (
                <div className="relative">
                  <div className="absolute -left-4 top-2">
                    <Ping></Ping>
                  </div>
                  <Card
                    image={
                      student.attributes.user?.data.attributes.avatar?.data.attributes.url ?? ""
                    }
                    title={student.attributes.firstname ?? ""}
                    href={`/students/${student.id}`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Students;
