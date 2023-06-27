import { StudentEntity } from "codac-graphql-types";
import { Card } from "codac-ui";

interface CardStudentProp {
  student: StudentEntity;
}

export const StudentCard = (props: CardStudentProp) => {
  const { student } = props;
  return (
    <div>
      <div className="">
        {student.attributes && (
          
          <div className="relative">
            <div className="absolute top-2"></div>
            <Card
              image={student.attributes.user?.data.attributes.avatar?.data.attributes.url ?? ""}
              title={student.attributes.firstname ?? ""}
              href={`/community/cohort/student/${student.id}`}
            />
          </div>
        )}
      </div>
    </div>
  );
};
