import type { FastifyRequest } from "fastify";

import { container } from "../container.js";
import type { GraphQLContext } from "./types.js";

export async function buildContext(
    request: FastifyRequest,
): Promise<GraphQLContext> {
    const authorization = request.headers.authorization;

    if (!authorization?.startsWith("Bearer ")) {
        return {
            user: null,
            services: container,
        };
    }

    try {
        const token = authorization.replace("Bearer ", "");

        const payload =
            await container.jwtService.verifyToken(token);

        const user =
            await container.userRepository.findById(payload.sub);

        return {
            user,
            services: container,
        };
    } catch {
        return {
            user: null,
            services: container,
        };
    }
}