import React from "react";

import Students from "#/components/community/students";
import { useRouter } from "next/router";

export default function Cohort() {

  const router = useRouter();
  const { id } = router.query;


  return <Students cohortName={id} />;
}
