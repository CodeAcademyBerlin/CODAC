export type ApolloListQueryGen<Type> = Record<
  string,
  {
    data: Type[];
  }
>;
