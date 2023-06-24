import { useQuery } from "@apollo/client";
import { CohortEntity, MentorEntity, StudentEntity } from "codac-graphql-types";

import { getCohortByNameDocument, GetStudentsByCohortDocument } from "./queries/cohort";
import { GetMentorIdDocument, GetMentorsAllDocument } from "./queries/mentors";

export const useGetCohorts = () => {
  const { data, error, loading } = useQuery(GetStudentsByCohortDocument);
  const students = data?.students?.data as StudentEntity[];

  return { students, error, loading };
};
export const useGetMentors = () => {
  const { data, error, loading } = useQuery(GetMentorsAllDocument);
  const mentors = data?.mentors?.data as MentorEntity[];

  return { mentors, error, loading };
};

export const useGetMentor = (id: string) => {
  const { data, loading, error } = useQuery(GetMentorIdDocument, {
    variables: {
      id: id,
    },
  });

  const mentor = data?.mentor?.data as MentorEntity;

  return { mentor, loading, error };
};
export const useGetCohortByName = () => {
  const { data, error, loading } = useQuery(getCohortByNameDocument);
  console.log('helo data',data)
  const cohort = data?.cohorts?.data[0] as CohortEntity;
  console.log('helo cohort',cohort)

  return { cohort, error, loading };
};
