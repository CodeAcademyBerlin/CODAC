/** Shape of the graphql response, pass the type of the data expected as genebic.  */
export type ApolloGenericQuery<Type> = Record<
  string,
  {
    data: Type;
    loading: boolean;
    error: ApolloError | undefined;
  }
>;
