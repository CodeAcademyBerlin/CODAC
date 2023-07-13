import React from "react";
import "./button.css";
interface ButtonProps {
    /**
     * Button Label (Icon automatically added)
     */
    label: string;
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * Is it for darkmode?
     */
    darkmode?: boolean;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const Button: ({ primary, darkmode, label, ...props }: ButtonProps) => React.JSX.Element;
export {};
//# sourceMappingURL=Button.d.ts.map