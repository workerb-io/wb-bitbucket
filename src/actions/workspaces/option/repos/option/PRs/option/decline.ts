import { PACKAGE_NAME } from "../../../../../../../utils/constants";
import { UpdateWithAuth } from "../../../../../../../utils/helper";

if (!options.workspaces || !options.repos) {
  notify("Workspace or repo is not selected", "success", 3000);
}

try {
  UpdateWithAuth<null, any>(
    `repositories/${options.workspaces.uuid}/${options.repos.slug}/pullrequests/${options.PRs.id}/decline`
  );
  notify("PR declined", "success", 3000);
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
