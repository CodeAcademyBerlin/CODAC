import { useQuery } from "@apollo/client";
import { CohortEntity, MentorEntity, StudentEntity } from "codac-graphql-types";

import { GetCohortByNameDocument, GetStudentsByCohortDocument } from "./queries/cohort";
import { GetMentorIdDocument, GetMentorsAllDocument } from "./queries/mentors";
import { GetStudentByIdDocument } from "./queries/student";

export const useGetStudentsByCohorts = (cohortName: string) => {
  const { data, error, loading } = useQuery(GetStudentsByCohortDocument, {

    variables: {
      cohortName: cohortName,
    },
  });
      console.log(data);
  const students = data?.students?.data as StudentEntity[];
  console.log(students)

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
export const useGetCohortByName = (cohortName: string) => {
  const { data, error, loading } = useQuery(GetCohortByNameDocument, {
    variables: {
      cohortName: cohortName,
    },
  });
  console.log("this is the cohortbyname data", data)

  const cohort = data?.cohorts?.data[0] as CohortEntity;
  console.log("helo cohort", cohort);

  return { cohort, error, loading };
};
export const useGetStudent = (id: string) => {
  const { data, error, loading } = useQuery(GetStudentByIdDocument, {
    variables: { id }
  });
  const student = data?.student?.data as StudentEntity;

  return { student, error, loading };
};
