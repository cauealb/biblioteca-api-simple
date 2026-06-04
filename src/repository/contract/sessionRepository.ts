interface Session {
    sessionId: string
    expireAt: Date
}

export interface sessionRepository {
    create(idUser: number): Promise<Session>
} 