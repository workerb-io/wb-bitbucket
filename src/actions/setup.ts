import { PACKAGE_NAME } from "../utils/constants";

let appPassword = null;

const username = prompt("What is your bitbucket username?");

if (!username) {
  const error = "Username is required in order to setup bitbucket";
  notify(error, "error", 6000);
  throw error;
}

if (args[0]) {
  appPassword = args[0];
} else {
  open("https://bitbucket.org/account/settings/app-passwords/new");

  const tokenName = `workerb-${new Date().getTime()}`;

  type(tokenName, "#id_name", { method: "by_query_selector" });

  // give all the permissions
  click("account:write", {});
  click("team:write", {});
  click("project:write", {});
  click("repository:write", {});
  click("repository:admin", {});
  click("repository:delete", {});
  click("pipeline:variable", {});
  click("webhook", {});
  click("snippet:write", {});
  click("wiki", {});
  click("issue:write", {});
  click("pullrequest:write", {});

  click("Create", {
    expectReload: true,
  });

  appPassword = read(".app-passwords--password", {
    method: "by_query_selector",
  });

  click("Close", {});
}

if (!appPassword) {
  notify("Failed to save the auth token.", "error", 3000);
} else {
  const token = btoa(`${username}:${appPassword}`);

  log(token);
  log(username);
  log(appPassword);
  setVars(
    [
      {
        name: "BITBUCKET_PERSONAL_TOKEN",
        value: token,
      },
    ],
    { local: true }
  );
  notify("Access token added successfully." + token, "success", 3000);

  reIndex();
}
