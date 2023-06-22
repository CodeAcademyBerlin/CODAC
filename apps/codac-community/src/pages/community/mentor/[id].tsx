
import { useRouter } from "next/router";

import { Mentor } from "#/components/community/Mentor";

export default function mentor() {
  const router = useRouter();
  const { id } = router.query;

  return <Mentor id={id} />;
}


