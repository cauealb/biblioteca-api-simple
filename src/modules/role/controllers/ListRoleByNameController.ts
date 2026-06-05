import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { PrismaRoleRepository } from "../../../repository/PrismaRoleRepository.js";
import { ListRoleByNameService } from "../services/ListRoleByNameService.js";

const repository = new PrismaRoleRepository()
const service = new ListRoleByNameService(repository)

export class ListRoleByNameController {
    async handle(request: FastifyRequest, replay: FastifyReply) {
        const nameSchema = z.object({ name: z.coerce.string() })
        const { name } = nameSchema.parse(request.params)

        const role = await service.execute(name)
        replay.status(200).send(role)
    }
}