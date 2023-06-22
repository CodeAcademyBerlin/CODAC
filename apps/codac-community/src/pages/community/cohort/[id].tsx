import { useRouter } from "next/router";
import React from "react";

import ListStudent from "#/components/community/ListStudent";

export default function Cohort() {
  const router = useRouter();
  const { id } = router.query;

  return <ListStudent cohortName={id} />;
}
