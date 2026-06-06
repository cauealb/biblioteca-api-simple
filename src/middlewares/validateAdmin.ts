import type { FastifyReply, FastifyRequest } from "fastify";

export async function ValidateAdmin(request: FastifyRequest, replay: FastifyReply) {
    const session = request.cookies.sessionId;
    
}