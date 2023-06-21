export type ApolloGenericQuery<Type> = Record<
  string,
  {
    data: Type;
    loading: boolean;
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    error: ApolloError | undefined;
  }
>;
 