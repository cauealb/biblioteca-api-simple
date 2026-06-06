import type { sessionRepository } from "../../../repository/contract/sessionRepository.js";

export class ListSessionIdByIdService {
    constructor(
        private repository: sessionRepository
    ) {}

    async execute(id: string) {
        
    }
}