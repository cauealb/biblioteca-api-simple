import type { FastifyReply, FastifyRequest } from "fastify";
import { PrismaUserRepository } from "../repository/PrismaUserRepository.js";
import { ListUserByIdService } from "../modules/users/services/ListUserByIdService.js";
import { PrismaRoleRepository } from "../repository/PrismaRoleRepository.js";
import { ListRoleByIdService } from "../modules/role/services/ListRoleByIdService.js";
import { PrismaSessionRepository } from "../repository/PrismaSessionRepository.js";
import { ListSessionIdService } from "../modules/session/services/ListSessionIdService.js";
import { ListSessionIdByIdService } from "../modules/session/services/ListSessionIdByIdService.js";

const userRepository = new PrismaUserRepository()
const userService = new ListUserByIdService(userRepository)
const sessionRepository = new PrismaSessionRepository()
const sessionService = new ListSessionIdByIdService(sessionRepository)
const roleRepository = new PrismaRoleRepository()
const roleService = new ListRoleByIdService(roleRepository)

export async function ValidateAdmin(request: FastifyRequest, replay: FastifyReply) {
    const session = request.sessionUser;
    if(!session) {
        return replay.status(404).send({
            err: "Nenhuma sessão encontrada!"
        })
    }

    const user = await userService.execute(session.idUser);
    if(!user) {
        return replay.status(404).send({
            err: "Seu usuário está inválido!"
        })
    }

    const role = await roleService.execute(user.idRole)
    if(role?.nameRole != "Admin") {
        return replay.status(401).send({
            err: "Seu usuário não é permitido nessa rota!"
        })
    }
}