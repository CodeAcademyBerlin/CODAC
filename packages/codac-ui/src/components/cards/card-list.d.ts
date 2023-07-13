/// <reference types="react" />
import { StaticImageData } from "next/image";
export interface CardProps {
    image?: string | StaticImageData;
    tag?: string;
    href?: string;
    title?: string;
    rating?: number;
    startDate?: string;
    course?: string;
    github?: string;
    linkdin?: string;
}
export declare const CardList: ({ image, href, title, startDate, course, }: CardProps) => import("react").JSX.Element;
//# sourceMappingURL=card-list.d.ts.map