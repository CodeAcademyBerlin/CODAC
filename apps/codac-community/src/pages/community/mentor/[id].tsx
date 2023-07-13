import { Mentor } from "#/components/community/mentor";
import router from "next/router";

// import { Mentor } from "#/components/community/";

export default function mentor() {
  const id = (router.query.id as string) ?? "";

  return <Mentor id={id} />;
}
