import type { GraphQLFormattedError } from "graphql";

import { mapError } from "../../shared/errors/mapper.js";

export function formatError(
    formattedError: GraphQLFormattedError,
    error: unknown,
): GraphQLFormattedError {
    return mapError(
        formattedError,
        error,
    );
}