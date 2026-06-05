import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { PrismaRoleRepository } from "../../../repository/PrismaRoleRepository.js";
import { CreateRoleService } from "../services/CreateRoleService.js";

const repository = new PrismaRoleRepository()
const service = new CreateRoleService(repository)

export class CreateRoleController {
    async handle(request: FastifyRequest, replay: FastifyReply) {
        const nameSchema = z.object({ name: z.coerce.string() });
        const { name } = nameSchema.parse(request.body);

        const role = await service.execute(name)
        replay.status(201).send(role)
    }
}