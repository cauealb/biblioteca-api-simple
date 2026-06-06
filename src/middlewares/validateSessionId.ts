import type { FastifyReply, FastifyRequest } from "fastify";
import { PrismaSessionRepository } from "../repository/PrismaSessionRepository.js";
import { ListSessionIdByIdService } from "../modules/session/services/ListSessionIdByIdService.js";

const repository = new PrismaSessionRepository()
const service = new ListSessionIdByIdService(repository)

export async function ValidateSessionId(request: FastifyRequest, replay: FastifyReply) {
    const sessionId = request.cookies.sessionId

    if(!sessionId) {
        return replay.status(401).send({
            err: "Você não está autorizado a entrar nessa rota!"
        })
    }

    const session = await service.execute(sessionId)
    if(!session) {
        return replay.status(401).send({
            err: "Essa session não está cadastrada no nosso sistema!!"
        })
    }

    if(new Date() > session.expireAt) {
        return replay.status(401).send({
            err: "Sua session foi expirada. Necessário entrar no sistema novamente"
        })
    }
}