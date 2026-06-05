import type { FastifyReply, FastifyRequest } from "fastify";
import { PrismaRoleRepository } from "../../../repository/PrismaRoleRepository.js";
import { ListRolesService } from "../services/ListRolesService.js";

const repository = new PrismaRoleRepository()
const service = new ListRolesService(repository)

export class ListRolesController {
    async handle(request: FastifyRequest, replay: FastifyReply) {
        const roles = await service.execute()
        replay.status(200).send(roles)
    }
}