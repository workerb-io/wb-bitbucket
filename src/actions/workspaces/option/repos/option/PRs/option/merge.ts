import { PACKAGE_NAME } from "../../../../../../../utils/constants";
import { UpdateWithAuth } from "../../../../../../../utils/helper";

interface PullRequestMergeRequest {
  type: string;
}

if (!options.workspaces || !options.repos) {
  notify("Workspace or repo is not selected", "success", 3000);
}

const payload: PullRequestMergeRequest = {
  type: options.PRs.type,
};

try {
  UpdateWithAuth<PullRequestMergeRequest, any>(
    `repositories/${options.workspaces.uuid}/${options.repos.slug}/pullrequests/${options.PRs.id}/merge`,
    payload
  );
  notify("PR merged", "success", 3000);
  reIndex([
    PACKAGE_NAME,
    "workspaces",
    options.workspaces.name,
    "repos",
    options.repos.name,
    "PRs",
  ]);
} catch (error) {
  throw error;
}
