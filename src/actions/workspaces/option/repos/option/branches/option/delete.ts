import { PACKAGE_NAME } from "../../../../../../../utils/constants"
import { DeleteWithAuth } from "../../../../../../../utils/helper"

if (!options.workspaces || !options.repos) {
    notify("Workspace or repo is not selected", "success", 3000)
}

try {
    DeleteWithAuth(`repositories/${options.workspaces.uuid}/${options.repos.slug}/refs/branches/${options.branches.name}`)
    notify("Branch deleted", "success", 3000)
    reIndex([PACKAGE_NAME, "workspaces", options.workspaces.name, "repos", options.repos.name, "branches"])
} catch (error) {
    throw error
}
