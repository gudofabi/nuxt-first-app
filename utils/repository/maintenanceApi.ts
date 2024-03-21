import type { $Fetch, NitroFetchRequest } from 'nitropack'

export const maintenanceApi = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
    async getBranchDropdown() {
        return fetch(
            "/maintenance/branches/dropdown?filter=external"
          )
    }
})