import { type ReactNode } from "react";
export interface Item {
    name: string;
    slug: string;
    description?: string;
}
export declare function GlobalNav({ navigation, header, authentication, appDir, }: {
    authentication: ReactNode;
    navigation: {
        name: string;
        items: Item[];
    }[];
    header: string;
    appDir?: boolean;
}): import("react").JSX.Element;
//# sourceMappingURL=global-nav.d.ts.map