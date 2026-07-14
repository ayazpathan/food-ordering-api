import { ApolloServer } from "@apollo/server";
import type { GraphQLContext } from "./types.js";
import { formatError } from "./error-formatter.js";

import { resolvers, typeDefs } from "../../modules/index.js";

export const apolloServer =
    new ApolloServer<GraphQLContext>({
        typeDefs,
        resolvers,
        formatError,
        includeStacktraceInErrorResponses: false,
    });
