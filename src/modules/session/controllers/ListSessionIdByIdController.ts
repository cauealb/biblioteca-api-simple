import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { PrismaSessionRepository } from "../../../repository/PrismaSessionRepository.js";
import { ListSessionIdByIdService } from "../services/ListSessionIdByIdService.js";

const repository = new PrismaSessionRepository()
const service = new ListSessionIdByIdService(repository)

export class ListSessionIdByIdController {
    async handle(request: FastifyRequest, replay: FastifyReply) {
        const sessionIdSchema = z.object({ sessionId: z.coerce.string() })
        const { sessionId } = sessionIdSchema.parse(request.params)

        const session = await service.execute(sessionId)
        replay.status(200).send(session)
    }
}