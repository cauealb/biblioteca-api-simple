import type { FastifyReply, FastifyRequest } from "fastify";
import { PrismaUserRepository } from "../../../repository/prismaUserRepository.js";
import { DeleteUserService } from "../services/DeleteUserService.js";
import z from "zod";

const repository = new PrismaUserRepository()
const service = new DeleteUserService(repository)

export class DeleteUserController {
    async handle(request: FastifyRequest, replay: FastifyReply) {
        const idSchema = z.object({ id: z.coerce.number() })
        const { id } = idSchema.parse(request.params)

        await service.execute(id);
        return replay.status(204).send()
    }
}