import { AppError } from "./app-error.js";
import { ErrorCode } from "./error-codes.js";

export class UnauthorizedError extends AppError {
    constructor(message = "Unauthorized") {
        super(message, ErrorCode.UNAUTHORIZED, 401);
    }
}