"use client";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";
import { BrandText } from "../brand";
import { CodacLogoIcon } from "../icons/codac-logo";
import { LMSAddressBar } from "./lms-address-bar";
export function LMSNav() {
    const [isOpen, setIsOpen] = useState(false);
    const close = () => {
        setIsOpen(false);
    };
    return (<div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-gray-200 dark:bg-black  lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
        <Link href="/dashboard" className="group flex items-center  gap-x-2.5 group-hover:border-white/50" onClick={close}>
          <div className="h-7 w-7 ">
            <CodacLogoIcon />
          </div>
          <BrandText>CODAC LMS</BrandText>
          {/* <h3 className="text-primary font-semibold tracking-wide dark:text-gray-400 dark:group-hover:text-gray-50">
          {header}
        </h3> */}
        </Link>
      </div>

      <button type="button" className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden" onClick={() => {
            setIsOpen(!isOpen);
        }}>
        {/* <ThemeSwitch /> */}
        <div className="font-medium text-gray-100 group-hover:text-gray-400">Menu</div>
        {isOpen ? (<XIcon className="block w-6 text-gray-400"/>) : (<MenuAlt2Icon className="block w-6 text-gray-400"/>)}
      </button>
      <div className={clsx("overflow-y-auto lg:static lg:block", {
            "fixed inset-x-0 bottom-0 top-14 mt-px bg-black": isOpen,
            hidden: !isOpen,
        })}>
        <nav className="space-y-6 px-2 py-5">
          <LMSAddressBar />
          {/* {navigation.map((section) => {
          return (
            <div key={section.name}>
              <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
                <div>{section.name}</div>
              </div>

              <div className="space-y-1">
                {section.items.map((item) => (
                  <GlobalNavItemApp key={item.slug} item={item} close={close} />
                ))}
              </div>
            </div>
          );
        })} */}
        </nav>

        {/* <SideAuth user={authentication} className="absolute hidden sm:block"></SideAuth> */}
      </div>
    </div>);
}
function GlobalNavItemApp({ item, close }) {
    const segment = useSelectedLayoutSegment();
    const isActive = item.slug === segment;
    return (<Link onClick={close} href={`/${item.slug}`} className={clsx("block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300", {
            "text-gray-400 hover:bg-gray-800": !isActive,
            "text-white": isActive,
        })}>
      {item.name}
    </Link>);
}
