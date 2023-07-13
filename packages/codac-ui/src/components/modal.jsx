"use client";
import { clsx } from "clsx";
import React, { useState } from "react";
import { Button } from "./button";
export const Modal = ({ children, color = "pink", buttonTitle, }) => {
    const [showModal, setShowModal] = useState(false);
    return (<>
      <Button color={color} type="button" onClick={() => { setShowModal(true); }}>
        {buttonTitle}
      </Button>

      <div onClick={() => { setShowModal(false); }} className={clsx("pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300", {
            "pointer-events-auto opacity-100": showModal,
        })}>
        <div onClick={(e) => { e.stopPropagation(); }} data-dialog="sign-in-dialog" className="relative mx-auto flex w-full max-w-[24rem] flex-col  bg-clip-border text-gray-700 shadow-md">
          {children}
        </div>
      </div>
    </>);
};
