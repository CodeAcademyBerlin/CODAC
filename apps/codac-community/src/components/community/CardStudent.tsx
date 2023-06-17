import { StudentEntity } from "codac-graphql-types";
import { Card } from "codac-ui";
import React from "react";

interface CardStudentProp {
  student: StudentEntity;
}

export const CardStudent = ({ student }: CardStudentProp) => {
  return (
    <div>
      <div key={student.id} className="">
        {student.attributes && (
          <div className="relative">
            <div className="absolute -left-4 top-2"></div>
            <Card
              image={student.attributes.user?.data.attributes.avatar?.data.attributes.url ?? ""}
              title={student.attributes.firstname ?? ""}
              href={`/students/${student.id}`}
            />
          </div>
        )}
      </div>
    </div>
  );
};
