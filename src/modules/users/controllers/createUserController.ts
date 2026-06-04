import type { FastifyRequest, FastifyReply } from 'fastify';
import { CreateUserService } from '../services/createUserService.js'
import { PrismaUserRepository } from '../../../repository/prismaUserRepository.js';

const UserRepository = new PrismaUserRepository()
const service = new CreateUserService(UserRepository)
export default class CreateUserController {
    async handle(request: FastifyRequest, replay: FastifyReply) {
        const user = await service.createUser(request.body)

        replay.status(201).send(user)
    }
}