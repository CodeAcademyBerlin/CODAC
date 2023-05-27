"use client";
import { BerlinSkyline, BlankLayout, BrandLogo, BrandText, CardShinyHOC, TronGrid } from "codac-ui";
import Link from "next/link";
import React, { Suspense } from "react";

const LandingGraphics = () => {
  return (
    <>
      <BerlinSkyline />
      <TronGrid />
      <BlankLayout>
        <Link href="/courses">
          <CardShinyHOC>
            <BrandLogo>CODAC</BrandLogo>
          </CardShinyHOC>
        </Link>
      </BlankLayout>
    </>
  );
};

export default LandingGraphics;
