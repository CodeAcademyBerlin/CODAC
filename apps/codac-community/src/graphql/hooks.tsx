import { useQuery } from "@apollo/client";
import { MentorEntity, StudentEntity, useGetAllStaffsQuery } from "codac-graphql-types";

import { GetStudentsByCohortDocument } from "./queries/cohort";
import { GetMentorsAllDocument } from "./queries/mentors";

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



