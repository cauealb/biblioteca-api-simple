import type { roleRepository } from "../../../repository/contract/roleRepository.js";

export class ListRoleByNameService {
    constructor(
        private repository: roleRepository
    ) {}

    async execute(name: string) {
        return this.repository.findByName(name)
    }
}