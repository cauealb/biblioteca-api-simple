import type { Session } from "@prisma/client"

export interface SessionResponse {
    sessionId: string
    expireAt: Date
}
export interface sessionRepository {
    create(idUser: number, sessionId: string, expireAt: Date): Promise<SessionResponse>
    findAll(): Promise<Session[]>
    findById(id: string): Promise<Session | null>
} 