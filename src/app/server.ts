import { env } from "../config/env.js";
import { buildApp } from "./app.js";

export const startServer = async () => {
    try {
        const app = await buildApp();

        await app.listen({
            host: env.host,
            port: env.port,
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};