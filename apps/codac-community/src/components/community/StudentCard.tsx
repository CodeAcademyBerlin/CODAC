import { StudentEntity } from "codac-graphql-types";
import { CardList } from "codac-ui";

import defaultAvatar from "../../../public/defaultAvatar.png";

interface CardStudentProp {
  student: StudentEntity;
}

export const StudentCard = (props: CardStudentProp) => {
  const { student } = props;

  const avatarUrl = student.attributes?.user?.data?.attributes?.avatar?.data?.attributes?.url;
  const imageUrl = avatarUrl || defaultAvatar;

  return (
    <div>
      <div className=" flex grid-cols-5 flex-wrap justify-center">
        {student.attributes && (
          <div className="relative">
            <div className="absolute top-2"></div>
            <CardList
              image={imageUrl}
              title={student.attributes.firstname ?? ""}
              href={`/community/cohort/student/${student.id}`}
              course={student.attributes?.course?.data?.attributes?.name || ""}
            />
          </div>
        )}
      </div>
    </div>
  );
};
