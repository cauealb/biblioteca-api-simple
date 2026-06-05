import type { sessionRepository } from "../../../repository/contract/sessionRepository.js";

export class ListSessionIdService {
    constructor(
        private repository: sessionRepository
    ) {}

    async execute() {
        return this.repository.findAll()
    }
}