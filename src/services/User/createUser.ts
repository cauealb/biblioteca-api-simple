import prisma from "../../lib/prisma.js"

interface User {
    name: string
    email: string
    password: string
    idRole: number
}

export async function createUser(dataUser: User) {
    const user = await prisma.user.create({
        data: dataUser
    })

    return user;
}