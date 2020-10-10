import { PACKAGE_NAME } from "../../../../../../utils/constants"
import { UpdateWithAuth } from "../../../../../../utils/helper"

interface Branch {
    name: string
}

interface BranchPayload {
    branch: Branch
}

interface PullRequestRequest {
    title: string,
    source: BranchPayload,
    destination: BranchPayload
}

if (!options.workspaces || !options.repos) {
    notify("Workspace or repo is not selected", "success", 3000)
}

let source = args[0]
let destination = args[1]

const title = prompt("PR title")

if (!source) {
    source = prompt("What is the source branch?")
}

if (!destination) {
    destination = prompt("What is the destination branch?")
}

const payload: PullRequestRequest = {
    title,
    "source": {
        "branch": {
            "name": source
        }
    },
    "destination": {
        "branch": {
            "name": destination
        }
    }
}

try {
    UpdateWithAuth<PullRequestRequest, any>(`repositories/${options.workspaces.uuid}/${options.repos.slug}/pullrequests/`, payload)
    notify("PR created", "success", 3000)
    reIndex([PACKAGE_NAME, "workspaces", options.workspaces.name, "repos", options.repos.name, "PRs"])
} catch (error) {
    throw error
}
