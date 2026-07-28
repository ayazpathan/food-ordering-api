import type { User } from "@prisma/client";

import type { container } from "../container.js";

export interface GraphQLContext {
    user: User | null;
    services: typeof container;
}