"use client";
import React from "react";
import { codacFontClass } from "./codac-font";
export function BrandText({ children }) {
    return <div className={`flex-auto ${codacFontClass} text-primary`}>{children}</div>;
}
