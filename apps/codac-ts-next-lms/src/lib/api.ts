import { GetPageDocument, type GetPageQuery, type PageEntity } from "codac-server-graphql";

import { initializeApollo } from "./apolloClient";

const client = initializeApollo(null, null);

export const getPageData = async (
  params: { slug: string[] },
  locale: string
): Promise<PageEntity | null> => {
  const slug = params.slug.join("/");
  console.log("slug", slug);
  // Find the pages that match this slug
  // const pagesData = await fetchAPI(`/pages?slug=${slug}&locale=${locale}&status=published&populate=*${preview ? '&status=draft' : ''}`)
  const {
    data: { pages },
  } = await client.query<GetPageQuery>({
    query: GetPageDocument,
    variables: { locale, slug },
  });
  console.log("pages", pages);
  // Make sure we found something, otherwise return null
  if (!pages) {
    return null;
  }

  // Return the first item since there should only be one result per slug
  return pages.data[0] as PageEntity;
};