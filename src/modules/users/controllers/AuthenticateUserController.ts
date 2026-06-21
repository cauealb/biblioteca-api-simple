import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { PrismaUserRepository } from "../../../repository/PrismaUserRepository.js";
import { PrismaSessionRepository } from "../../../repository/PrismaSessionRepository.js";
import { AuthenticateUserService } from "../services/AuthenticateUserService.js";

const userRepository = new PrismaUserRepository()
const sessionRepository = new PrismaSessionRepository()
const service = new AuthenticateUserService(userRepository, sessionRepository)

export class AuthenticateUserController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const bodySchema = z.object({ email: z.email(), password: z.coerce.string() });
        const { email, password } = bodySchema.parse(request.body);

        const session = await service.execute(email, password);
        reply.setCookie('sessionId', session.idSession, {
            path: '/',
            expires: session.expireAt,
            secure: true,
            httpOnly: true,
            sameSite: "lax"
        })

        return reply.status(201).send({
            message: "Usuário authenticado com sucesso!"
        })
    }
}