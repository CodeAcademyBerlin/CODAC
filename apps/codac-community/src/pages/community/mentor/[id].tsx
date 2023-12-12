import { useRouter } from "next/router";

import { Mentor } from "#/components/community/Mentor";

// import { Mentor } from "#/components/community/";

export default function MentorPge() {
  const router = useRouter();
  const id = (router.query.id as string) ?? "";

  return <Mentor id={id} />;
}
