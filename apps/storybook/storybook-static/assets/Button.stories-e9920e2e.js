var s=Object.defineProperty;var e=(o,n)=>s(o,"name",{value:n,configurable:!0});import{j as r}from"./jsx-runtime-69008c6b.js";import"./index-a38f3d31.js";import"./es.object.get-own-property-descriptor-d261b708.js";var a=e(({primary:o=!1,label:n="Boop",size:l="small"})=>r("button",{className:`
        ${o?"ui-bg-red-500":"ui-bg-blue-500"}
        ${l==="large"?"text-lg":"text-base"}
      `,children:n}),"o");const b={parameters:{storySource:{source:`import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "codac-ui";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
`,locationsMap:{primary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},secondary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},large:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},small:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}}}}},title:"Example/Button",component:a,argTypes:{backgroundColor:{control:"color"}}},t=e(o=>r(a,{...o}),"Template"),c=t.bind({});c.args={primary:!0,label:"Button"};const i=t.bind({});i.args={label:"Button"};const p=t.bind({});p.args={size:"large",label:"Button"};const d=t.bind({});d.args={size:"small",label:"Button"};const B=["Primary","Secondary","Large","Small"];export{p as Large,c as Primary,i as Secondary,d as Small,B as __namedExportsOrder,b as default};
//# sourceMappingURL=Button.stories-e9920e2e.js.map
