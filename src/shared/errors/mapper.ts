import { unwrapResolverError } from "@apollo/server/errors";
import type { GraphQLFormattedError } from "graphql";
import { ZodError } from "zod";

import { AppError } from "./app-error.js";
import { ErrorCode } from "./error-codes.js";

export function mapError(
    formattedError: GraphQLFormattedError,
    error: unknown,
): GraphQLFormattedError {
    const originalError = unwrapResolverError(error);

    if (originalError instanceof ZodError) {
        return {
            message: "Validation failed.",
            extensions: {
                code: ErrorCode.VALIDATION,
                errors: originalError.issues.map(issue => ({
                    field: issue.path.join("."),
                    message: issue.message,
                })),
            },
        };
    }

    if (originalError instanceof AppError) {
        return {
            message: originalError.message,
            extensions: {
                code: originalError.code,
                statusCode: originalError.statusCode,
            },
        };
    }

    return formattedError;
}