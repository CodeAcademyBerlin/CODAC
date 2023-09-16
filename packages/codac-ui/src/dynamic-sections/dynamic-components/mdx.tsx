/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MDXComponents } from "mdx/types";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Suspense } from "react";
interface ComponentSectionsRichText {
  __component: "sections.rich-text";
  content?: string;
  id: string;
}

interface Props {
  data: ComponentSectionsRichText;
}
const components: MDXComponents = {
  h1: ({ children, ...rest }) => <h1 {...rest}>{children}</h1>,
  h2: ({ children, ...rest }) => (
    <h2 className="text-secondary text-xl" {...rest}>
      {children}
    </h2>
  ),
  p: ({ children, ...rest }) => (
    <p className="text-black dark:text-white" {...rest}>
      {children}
    </p>
  ),
  img: ({ src, placeholder, height, width, alt, ref, ...rest }) => (
    <div className="flex justify-center">
      <Image {...rest} placeholder={"empty"} alt={alt!} src={src!} height={500} width={500} />
    </div>
  ),
};
export function SectionMDXAsync({ data }: Props) {
  return (
    <Suspense fallback={<>Loading...</>}>
      {/* @ts-expect-error Async Server Component */}

      <MDXRemote source={data.content ?? ""} components={components} />
    </Suspense>
  );
}
