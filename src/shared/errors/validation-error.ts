import { AppError } from "./app-error.js";
import { ErrorCode } from "./error-codes.js";

export class ValidationError extends AppError {
    constructor(message: string) {
        super(message, ErrorCode.VALIDATION, 422);
    }
}