import type { Session } from "@prisma/client"

export interface sessionRepository {
    create(idUser: number): Promise<Session>
    findAll(): Promise<Session[]>
    findById(id: string): Promise<Session | null>

    delete(id: string): Promise<void>
    deleteAllSessionOfUser(idUser: number): Promise<void>
} 