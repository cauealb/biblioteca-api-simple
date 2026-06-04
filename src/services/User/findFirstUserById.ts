import prisma from "../../lib/prisma.js";

export async function findUserById(idUser: number) {
    const user = await prisma.user.findFirst({
        where: { idUser: idUser }
    })

    return user;
}