import type { roleRepository } from "../../../repository/contract/roleRepository.js";

export class ListRoleByIdService {
    constructor(
        private repository: roleRepository
    ) {}

    async execute(id: number) {
        return this.repository.findById(id)
    }
}