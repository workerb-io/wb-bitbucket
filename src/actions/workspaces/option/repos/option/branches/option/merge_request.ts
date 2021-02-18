import { createPR } from "../../../../../../../utils/helper"

if (!options.workspaces || !options.repos) {
    notify("Workspace or repo is not selected", "success", 3000)
    throw "Workspace or repo is not selected"
}

let source = options.branches.name
let destination = "master"

createPR(source, destination)
