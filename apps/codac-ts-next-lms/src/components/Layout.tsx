import * as React from "react";
import { Navbar, RainbowCursor } from "toxic-ui";
import Header from "./Header";
import Link from "next/link";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link href="/">
        <Navbar
          brand={{
            id: 0,
            text: "CODAC LMS",
            logo: "https://res.cloudinary.com/dicgyh2ou/image/upload/c_scale,w_51/v1677670098/logo_c688d5f4f4.png",
          }}
          urls={[{ href: "/", text: "Home", id: 1 }]}
        ></Navbar>
      </Link>
      {/* <Header title="CODAC LMS" /> */}


      {children}
    </>
  );
}
