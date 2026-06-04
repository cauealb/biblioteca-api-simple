export interface sessionRepository {
    create(idUser: number, sessionId: string, expireAt: Date): Promise<void>
} 