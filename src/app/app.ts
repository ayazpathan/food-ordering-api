import Fastify from "fastify";

export const buildApp = () => {
    return Fastify({
        logger: {
            level: "info",
        },
    });
};
