import { Button } from "./Button";
const meta = {
    title: "Example/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {},
};
export default meta;
export const PrimaryLightmode = {
    args: {
        primary: true,
        darkmode: false,
        label: "Send",
    },
};
export const PrimaryDarkmode = {
    args: {
        primary: true,
        darkmode: true,
        label: "Join",
    },
    parameters: {
        backgrounds: {
            default: "dark",
        },
    },
};
export const SecondaryLightmode = {
    args: {
        primary: false,
        darkmode: false,
        label: "Send",
    },
};
export const SecondaryDarkmode = {
    args: {
        primary: false,
        darkmode: true,
        label: "Join",
    },
    parameters: {
        backgrounds: {
            default: "dark",
        },
    },
};
