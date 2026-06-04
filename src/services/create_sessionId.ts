import { randomUUID } from "node:crypto";
import prisma from "../lib/prisma.js";

export async function createSessionId(idUser: number) {
    const sessionId = randomUUID();

    await prisma.session.create({
        data: {
            idSession: sessionId,
            idUser: idUser,
            expireAt: new Date()
        }
    })

    return sessionId;
}