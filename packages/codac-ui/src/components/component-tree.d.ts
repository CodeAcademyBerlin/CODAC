/// <reference types="react" />
interface Item {
    name: string;
    type: "server" | "client";
    size: number;
    children?: Item[];
}
export declare const ComponentTree: ({ items }: {
    items: Item[];
}) => import("react").JSX.Element;
export {};
//# sourceMappingURL=component-tree.d.ts.map