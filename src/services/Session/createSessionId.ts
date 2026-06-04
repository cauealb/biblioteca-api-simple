import { randomUUID } from "node:crypto";
import prisma from "../../lib/prisma.js";

export async function createSessionId(idUser: number) {
    const sessionId = randomUUID();
    const expireAt = new Date(60 * 60 * 24 * 7)

    await prisma.session.create({
        data: {
            idSession: sessionId,
            idUser: idUser,
            expireAt: expireAt
        }
    })

    return { sessionId, expireAt };
}