import type { FastifyReply, FastifyRequest } from "fastify";
import z, { email } from "zod";
import { PrismaUserRepository } from "../../../repository/PrismaUserRepository.js";
import { PrismaSessionRepository } from "../../../repository/PrismaSessionRepository.js";
import { CreateSessionIdService } from "../services/CreateSessionIdService.js";

const userRepository = new PrismaUserRepository();
const sessionRepository = new PrismaSessionRepository();
const sessionService = new CreateSessionIdService(
  sessionRepository,
  userRepository,
);

export class CreateSessionIdController {
  async handle(request: FastifyRequest, replay: FastifyReply) {
    const bodySchema = z.object({ email: z.email(), password: z.string().min(4)})
    const {email} = bodySchema.parse(request.body)

    const session = await sessionService.execute(email);
    replay.setCookie("sessionId", session.idSession, {
      path: "/",
      expires: session.expireAt,
    });

    request.sessionUser = session
    replay.status(201).send();
  }
}
