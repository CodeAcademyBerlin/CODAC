/// <reference types="react" />
import { StaticImageData } from "next/image";
export interface CohortCardProps {
    image?: string | StaticImageData;
    title?: string;
    startDate?: string;
    github?: string;
    linkdin?: string;
    course?: string;
    email?: string;
}
export declare const Card: ({ image, title, github, linkdin, course, email }: CohortCardProps) => import("react").JSX.Element;
//# sourceMappingURL=card.d.ts.map