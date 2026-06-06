import type { FastifyReply, FastifyRequest } from "fastify";

export async function ValidateSessionId(request: FastifyRequest, replay: FastifyReply) {
    const sessionId = request.cookies.sessionId

    if(!sessionId) {
        return replay.status(401).send({
            err: "Você não está autorizado a entrar nessa rota!"
        })
    }
}