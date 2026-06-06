import type { Session } from "@prisma/client";
import "fastify";

declare module "fastify" {
    interface FastifyRequest {
        sessionUser?: Session
    }
}