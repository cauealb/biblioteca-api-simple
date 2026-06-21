import type { sessionRepository } from "./contract/sessionRepository.js";
import prisma from "../lib/prisma.js";
import { randomUUID } from "node:crypto";

export class PrismaSessionRepository implements sessionRepository {
    async create(idUser: number) {
        const sessionId = randomUUID();
        const expireAt = new Date();
        expireAt.setDate(expireAt.getDate() + 1);

        return await prisma.session.create({
            data: {
                idSession: sessionId,
                idUser: idUser,
                expireAt: expireAt
            }
        })
    }

    async findAll() {
        return await prisma.session.findMany()
    }

    async findById(id: string) {
        return await prisma.session.findFirst({ where: { idSession: id } })
    }

    async delete(id: string) {
        await prisma.session.delete({ where: { idSession: id } })
    }
}