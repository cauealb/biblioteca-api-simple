import type { sessionRepository } from "../../../repository/contract/sessionRepository.js";

export class DeleteSessionIdService {
    constructor(
        private repository: sessionRepository
    ) {}

    async execute(id: string) {
        return this.repository.delete(id)
    }
}