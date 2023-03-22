var m=Object.defineProperty;var s=(o,t)=>m(o,"name",{value:t,configurable:!0});import"./index-a38f3d31.js";import{A as l,M as d}from"./Props-6f414934.js";import"./es.object.get-own-property-descriptor-d261b708.js";import"./web.url.constructor-357fc977.js";import"./iframe-afa0e48e.js";import"./es.number.is-integer-c07b5b47.js";import"./index-681e4b07-7aedf28b.js";import"./es.map.constructor-088687ee.js";import"./es.number.to-fixed-4714c3f9.js";import"./index-6c397bfc.js";import"./es.number.is-nan-184f406b.js";import"./string-d2fe5096.js";const p="/assets/code-brackets-9ef6443e.svg",c="/assets/colors-ac9401f3.svg",g="/assets/comments-f15a6837.svg",x="/assets/direction-94a9917f.svg",u="/assets/flow-275142c6.svg",h="/assets/plugin-57148314.svg",f="/assets/repo-fb4ece47.svg",b="/assets/stackalt-2ad81543.svg";function n(){return n=Object.assign?Object.assign.bind():function(o){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(o[a]=r[a])}return o},n.apply(this,arguments)}s(n,"_extends");const k={},y="wrapper";function i({components:o,...t}){return mdx(y,n({},k,t,{components:o,mdxType:"MDXLayout"}),mdx(d,{title:"Example/Introduction",mdxType:"Meta"}),mdx("style",null,`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 900;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px 30px 20px 15px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span {
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `),mdx("h1",null,"Welcome to Storybook"),mdx("p",null,`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,mdx("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),mdx("p",null,`Browse example stories now by navigating to them in the sidebar.
View their code in the `,mdx("inlineCode",{parentName:"p"},"stories"),` directory to learn how they work.
We recommend building UIs with a `,mdx("a",{parentName:"p",href:"https://componentdriven.org"},mdx("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),mdx("div",{className:"subheading"},"Configure"),mdx("div",{className:"link-list"},mdx("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},mdx("img",{src:h,alt:"plugin"}),mdx("span",null,mdx("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),mdx("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},mdx("img",{src:b,alt:"Build"}),mdx("span",null,mdx("strong",null,"Build configuration"),"How to customize webpack and Babel")),mdx("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},mdx("img",{src:c,alt:"colors"}),mdx("span",null,mdx("strong",null,"Styling"),"How to load and configure CSS libraries")),mdx("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},mdx("img",{src:u,alt:"flow"}),mdx("span",null,mdx("strong",null,"Data"),"Providers and mocking for data libraries"))),mdx("div",{className:"subheading"},"Learn"),mdx("div",{className:"link-list"},mdx("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},mdx("img",{src:f,alt:"repo"}),mdx("span",null,mdx("strong",null,"Storybook documentation"),"Configure, customize, and extend")),mdx("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank"},mdx("img",{src:x,alt:"direction"}),mdx("span",null,mdx("strong",null,"In-depth guides"),"Best practices from leading teams")),mdx("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},mdx("img",{src:p,alt:"code"}),mdx("span",null,mdx("strong",null,"GitHub project"),"View the source and add issues")),mdx("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},mdx("img",{src:g,alt:"comments"}),mdx("span",null,mdx("strong",null,"Discord chat"),"Chat with maintainers and the community"))),mdx("div",{className:"tip-wrapper"},mdx("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",mdx("code",null,"stories/Introduction.stories.mdx")))}s(i,"MDXContent");i.isMDXComponent=!0;const w=s(()=>{throw new Error("Docs-only story")},"__page");w.parameters={docsOnly:!0};const e={title:"Example/Introduction",tags:["stories-mdx"],includeStories:["__page"]},v={};e.parameters=e.parameters||{};e.parameters.docs={...e.parameters.docs||{},page:()=>mdx(l,{mdxStoryNameToKey:v,mdxComponentAnnotations:e},mdx(i,null))};const O=["__page"];export{O as __namedExportsOrder,w as __page,e as default};
//# sourceMappingURL=Introduction.stories-1c7c14b0.js.map
