import * as React from "react";

function openClose() {
  const sidebar = document.querySelector("#sidebar");
  const path = document.querySelector("path");

  if (sidebar?.classList.contains("hidden")) {
    sidebar.classList.remove("hidden");
    path?.setAttribute("d", "M6 18L18 6M6 6l12 12");
  } else {
    sidebar?.classList.add("hidden");
    path?.setAttribute("d", "M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75");
  }
}

function Navbar() {
  return (
    <div className="navbar ml-12 fixed top-1 z-10 flex w-9/12 items-center justify-end gap-1 bg-[#009688] py-3 px-3 text-sm shadow-lg">
      <div className="mr-auto flex text-md">
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width={35}
          onClick={openClose}
        >
          <path
            d="M6 18L18 6M6 6l12 12"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        &emsp; &emsp;
        <p className="font-semibold">CodeAcademy Logo</p>
      </div>
      <div className="flex gap-2">
        <div>Links</div>
        <div>Mode</div>
        <div>User</div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div
      className="sidebar fixed top-1 ml-1 h-[98vh] w-2/12 bg-zinc-800 pt-0"
      id="sidebar"
    >
      <div className="sidebar-item">Web Development</div>
      <div className="sidebar-item">Hello World!</div>
      <div className="sidebar-item">Spikes</div>
      <div className="sidebar-item">Mentors</div>
      <div className="sidebar-item">Calendar</div>
      <div className="sidebar-item">Family</div>
    </div>
  );
}
function Footer() {
  return (
    <div
      className="footer fixed bottom-1 ml-1 mt-4 flex h-[8%] w-9/12 justify-between bg-zinc-800 p-2 pt-3 "
      id="footer"
    >
      <div className="footer-item">@ Copyright 2023 CodeAcademy-Berlin</div>
      <div className="footer-item">
        Naehe Thomas-Mann-Haltestelle, Greifswalder Str. Berlin
      </div>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-[3%] w-screen">
      <div className="flex items-start">
        <div>
          <Sidebar />
        </div>
        <div className="comeover mx-[22%]">
          <header>
            <Navbar />
          </header>
          <main>{children}</main>{" "}
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}