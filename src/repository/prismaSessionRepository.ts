import type { sessionRepository } from "./contract/sessionRepository.js";
import prisma from "../lib/prisma.js";

export class PrismaSessionRepository implements sessionRepository {
    async create(idUser: number, sessionId: string, expireAt: Date) {
        await prisma.session.create({
            data: {
                idSession: sessionId,
                idUser: idUser,
                expireAt: expireAt
            }
        })
    }
}