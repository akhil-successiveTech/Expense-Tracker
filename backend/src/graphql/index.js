import { createYoga, createSchema } from "graphql-yoga";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";

// Build executable schema
const schema = createSchema({
  typeDefs,
  resolvers
});

export const yoga = createYoga({
  schema,
  graphqlEndpoint: "/graphql"
});
