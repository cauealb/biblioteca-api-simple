import type { FastifyReply, FastifyRequest } from "fastify";
import { PrismaSessionRepository } from "../../../repository/PrismaSessionRepository.js";
import { ListSessionIdService } from "../services/ListSessionIdService.js";

const repository = new PrismaSessionRepository()
const service = new ListSessionIdService(repository)

export class ListSessionIdController {
    async handle(request: FastifyRequest, replay: FastifyReply) {
        const sessions = await service.execute()
        replay.status(200).send(sessions)
    }
}