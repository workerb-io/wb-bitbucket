import { fetchWithAuth } from "../../../../../../utils/helper";

let prs: any[] | null = null;

const returnOptions = () => {
  if (!options.workspaces || !options.repos) {
    return {};
  }

  prs = fetchWithAuth(
    `repositories/${options.workspaces.uuid}/${options.repos.slug}/pullrequests/`
  );

  if (!prs) {
    return {};
  }

  return JSON.stringify({
    add: prs.map((pr) => ({ ...pr, name: pr.title })),
  });
};

export default returnOptions;
