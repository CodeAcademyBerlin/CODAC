import router from "next/router";

import { Mentor } from "#/components/community/Mentor";

export default function mentor() {
  const id = (router.query.id as string) ?? "";

  return <Mentor id={id} />;
}
