
import { useRouter } from "next/router";

import { Mentor } from "#/components/community/Mentor";

export default function mentor() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const id = (router.query.id as string) ?? "";

  return <Mentor id={id} />;
}


