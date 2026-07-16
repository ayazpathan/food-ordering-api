import Fastify from "fastify";
import fastifyApollo from "@as-integrations/fastify";

import { apolloServer } from "../core/apollo/server.js";
import { buildContext } from "../core/apollo/context.js";

export const buildApp = async () => {
    const app = Fastify({
        logger: {
            level: "info",
        },
    });

    await apolloServer.start();

    await app.register(
        fastifyApollo(apolloServer),
        {
            path: "/graphql",
            context: async (request, reply) => {
                return buildContext(request);
            },
        },
    );

    return app;
};