import { AppError } from "./app-error.js";
import { ErrorCode } from "./error-codes.js";

export class NotFoundError extends AppError {
    constructor(message = "Resource not found") {
        super(message, ErrorCode.NOT_FOUND, 404);
    }
}