import "dotenv/config";

export const env = {
    nodeEnv: process.env.NODE_ENV ?? "development",

    host: process.env.HOST ?? "127.0.0.1",

    port: Number(process.env.PORT ?? 4000),

    databaseUrl: process.env.DATABASE_URL ?? "",

    jwtSecret: process.env.JWT_SECRET ?? "",

    jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? "15m",

    refreshTokenExpiresIn:
        process.env.REFRESH_TOKEN_EXPIRES_IN ?? "7d",
};