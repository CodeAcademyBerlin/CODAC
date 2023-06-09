import {
  GetPageDocument,
  GetPagesDocument,
  type PageContentSectionsDynamicZone,
  type PageEntity,
} from "codac-graphql-types";
import type { GetStaticPropsContext } from "next/types";

import DynamicZoneSections from "#/components/dynamic-zone-sections";
import { initializeApollo } from "#/lib/apolloClient";
import type { ApolloGenericQuery } from "#/types/apollo";

interface PageContext {
  slug: string;
  contentSections: PageContentSectionsDynamicZone[];
}
// const DynamicPage = ({ pageContext }: InferGetStaticPropsType<typeof getStaticProps>) => {
const DynamicPage = ({ pageContext }: { pageContext: PageContext }) => {
  const { contentSections } = pageContext;
  return <DynamicZoneSections contentSections={contentSections} />;
};

export default DynamicPage;

const client = initializeApollo({});
export const getStaticPaths = async (context: GetStaticPropsContext) => {
  // Get all pages from Strapi
  const allPages = context.locales
    ? context.locales.map(async (locale: string) => {
        const {
          data: { pages },
        } = await client.query<ApolloGenericQuery<PageEntity[]>>({
          query: GetPagesDocument,
          variables: { locale },
        });
        return pages.data;
      })
    : [];

  const pages = (await Promise.all(allPages)).flat();
  const paths = pages.map(({ attributes }) => {
    const { slug, locale } = attributes;
    const slugArray = slug?.split("/");

    return {
      params: { slug: slugArray },
      locale,
    };
  });

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  try {
    const { params, locale } = context;

    const slugArr = params?.slug as string[];
    const slugStr: string = slugArr.join("/");

    const {
      data: { pages },
    } = await client.query<ApolloGenericQuery<PageEntity[]>>({
      query: GetPageDocument,
      variables: { locale, slug: slugStr },
    });

    const pageData = pages.data[0];

    const { slug, contentSections } = pageData.attributes;

    const pageContext = {
      // locale,
      // locales,
      // defaultLocale,
      slug,

      contentSections,
    };
    return {
      props: {
        pageContext: {
          ...pageContext,
        },
      },
      revalidate: 10,
    };
  } catch (error) {
    console.log("error", error);
    return {
      notFound: true,
    };
  }
};
