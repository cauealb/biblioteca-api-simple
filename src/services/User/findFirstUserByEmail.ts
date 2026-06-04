import prisma from "../../lib/prisma.js";

export async function findUserByEmail(email: string) {
    const user = await prisma.user.findFirst({
        where: { email: email }
    })

    return user;
}