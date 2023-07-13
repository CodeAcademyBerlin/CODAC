/// <reference types="react" />
interface MediaProps {
    file: {
        data: {
            id: string;
            attributes: {
                url: string;
                name: string;
                alternativeText: string;
            };
        };
    };
}
export declare function SectionMedia({ data }: {
    data: MediaProps;
}): import("react").JSX.Element;
export {};
//# sourceMappingURL=media.d.ts.map