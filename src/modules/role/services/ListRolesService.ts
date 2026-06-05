import type { roleRepository } from "../../../repository/contract/roleRepository.js";

export class ListRolesService {
    constructor(
        private repository: roleRepository
    ) {}

    async execute() {
        return this.repository.findAll()
    }
}