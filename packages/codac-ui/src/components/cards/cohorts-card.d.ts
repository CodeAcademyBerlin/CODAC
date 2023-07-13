/// <reference types="react" />
import { StaticImageData } from "next/image";
export interface CardProps {
    image?: string | StaticImageData;
    tag?: string;
    href?: string;
    title?: string;
    startDate?: string;
}
export declare const Cohorts: ({ image, href, tag, title, startDate, }: CardProps) => import("react").JSX.Element;
//# sourceMappingURL=cohorts-card.d.ts.map