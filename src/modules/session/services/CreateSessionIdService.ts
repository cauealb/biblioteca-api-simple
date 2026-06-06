import { randomUUID, type privateDecrypt } from "node:crypto";
import type { sessionRepository } from "../../../repository/contract/sessionRepository.js";
import type { UserRepository } from "../../../repository/contract/userRepository.js";

export class CreateSessionIdService {
    constructor(
        private sessionRepository: sessionRepository,
        private userRepository: UserRepository
    ) {}

    async execute(id: number) {
        const sessionId = randomUUID();
        const expireAt = new Date()
        expireAt.setDate(expireAt.getDate() + 1)

        const user = await this.userRepository.findById(id);
        if(!user) {
            throw new Error("Erro ao criar sessão, este usuário não exite no nosso bando de dados!");
        }

        const session = await this.sessionRepository.create(id, sessionId, expireAt)
        return session
    }
}