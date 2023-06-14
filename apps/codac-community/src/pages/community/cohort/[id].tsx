import React from "react";

import Students from "#/components/community/students";
import { useRouter } from "next/router";

export default function Cohort() {
  // route pro nama
  const router = useRouter();
  const { id } = router.query;


  return <Students cohortName={id} />;
}
