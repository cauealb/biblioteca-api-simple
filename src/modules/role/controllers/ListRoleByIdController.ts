import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { PrismaRoleRepository } from "../../../repository/PrismaRoleRepository.js";
import { ListRoleByIdService } from "../services/ListRoleByIdService.js";

const repository = new PrismaRoleRepository()
const service = new ListRoleByIdService(repository)

export class ListRoleByIdController {
    async handle(request: FastifyRequest, replay: FastifyReply) {
        const idSchema = z.object({ id: z.coerce.number() });
        const { id } = idSchema.parse(request.params)

        const role = await service.execute(id);
        replay.status(200).send(role)
    }
}