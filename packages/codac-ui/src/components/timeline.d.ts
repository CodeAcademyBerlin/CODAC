/// <reference types="react" />
interface Item {
    title: string;
    description: string;
    date?: string;
    href: string;
}
export declare const Timeline: ({ color, items, }: {
    color?: "pink" | "blue" | "violet" | "cyan" | "orange" | "default" | undefined;
    items: Item[];
}) => import("react").JSX.Element;
export {};
//# sourceMappingURL=timeline.d.ts.map