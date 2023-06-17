import React from "react";
import Students from "#/components/community/Students";
import { useRouter } from "next/router";

export default function Cohort() {

  const router = useRouter();
  const { id } = router.query;


  return <Students cohortName={id} />
}
