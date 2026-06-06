import type { FastifyReply, FastifyRequest } from "fastify";
import { PrismaUserRepository } from "../repository/PrismaUserRepository.js";
import { ListUserByIdService } from "../modules/users/services/ListUserByIdService.js";
import { PrismaRoleRepository } from "../repository/PrismaRoleRepository.js";
import { ListRoleByNameService } from "../modules/role/services/ListRoleByNameService.js";

const userRepository = new PrismaUserRepository()
const userService = new ListUserByIdService(userRepository)
// const roleRepository = new PrismaRoleRepository()
// const roleService = new ListRoleByNameService

export async function ValidateAdmin(request: FastifyRequest, replay: FastifyReply) {
    const session = request.sessionUser;
    if(!session) {
        return replay.status(400).send({
            err: "Seu usuário não está autenticado!"
        })
    }

    const user = await userService.execute(session.idUser);
    if(!user) {
        return replay.status(404).send({
            err: "Seu usuário está inválido!"
        })
    }

    if(user.idRole != 1) {
        return replay.status(401).send({
            err: "Seu usuário não é permitido nessa rota!"
        })
    }
}