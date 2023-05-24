import {
  GetPageDocument,
  GetPagesDocument,
  PageContentSectionsDynamicZone,
  type PageEntity,
} from "codac-server-graphql";
import type {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next/types";

import DynamicZoneSections from "../../components/DynamicZoneSections";
import { getPageData } from "../../lib/api";
import { initializeApollo } from "../../lib/apolloClient";

// The file is called [[...slug]].js because we're using Next's
// optional catch all routes feature. See the related docs:
// https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes

const DynamicPage = ({ pageContext }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { contentSections } = pageContext;
  return <>{contentSections ? <DynamicZoneSections contentSections={contentSections} /> : null}</>;
};

export default DynamicPage;
type ApolloListQueryGen<Type> = Record<
  string,
  {
    data: Type[];
  }
>;
const client = initializeApollo(null, null);
export const getStaticPaths = async (context: GetStaticPropsContext) => {
  // Get all pages from Strapi
  const allPages = context.locales
    ? context.locales.map(async (locale: string) => {
        const {
          data: { pages },
        } = await client.query<ApolloListQueryGen<PageEntity>>({
          query: GetPagesDocument,
          variables: { locale },
        });
        return pages.data;
      })
    : [];

  const pages = (await Promise.all(allPages)).flat();
  console.log("pages", pages);
  const paths = pages.map(({ attributes }) => {
    // Decompose the slug that was saved in Strapi
    const { slug, locale } = attributes;
    const slugArray = !slug ? false : slug.split("/");
    console.log("slug", slug);
    return {
      params: { slug: slugArray },
      // Specify the locale to render
      locale,
    };
  });

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params, locale } = context;

  const slugArr = params?.slug as string[];
  const slug: string = slugArr.join("/");

  const {
    data: { pages },
  } = await client.query<ApolloListQueryGen<PageEntity>>({
    query: GetPageDocument,
    variables: { locale, slug },
  });

  if (!pages.data.length) {
    // Giving the page no props will trigger a 404 page
    return {
      notFound: true,
    };
  } else {
    const pageData = pages.data[0];

    const { slug, contentSections } = pageData.attributes;

    const pageContext = {
      // locale,
      // locales,
      // defaultLocale,
      slug,

      contentSections,
    };
    console.log("pageContext", pageContext);
    return {
      props: {
        pageContext: {
          ...pageContext,
        },
      },
      revalidate: 10,
    };
  }
};
