import { PACKAGE_NAME } from "../../../../utils/constants";
import { UpdateWithAuth } from "../../../../utils/helper";

interface RepoRequestObject {
  scm: string;
}

if (!options.workspaces) {
  notify("Workspace is not selected", "success", 3000);
}

let repoName: string = args[0];

if (!repoName) {
  repoName = prompt("What is the repo name?");
}

const payload: RepoRequestObject = {
  scm: "git",
};

try {
  UpdateWithAuth<RepoRequestObject, any>(
    `repositories/${options.workspaces.uuid}/${repoName}`,
    payload
  );
  notify("PR created", "success", 3000);
  reIndex([PACKAGE_NAME, "workspaces", options.workspaces.name, "repos"]);
} catch (error) {
  throw error;
}
