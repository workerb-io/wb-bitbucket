import { createPR } from "../../../../../../utils/helper";

if (!options.workspaces || !options.repos) {
  notify("Workspace or repo is not selected", "success", 3000);
  throw "Workspace or repo is not selected";
}

let source = args[0];
let destination = args[1];

if (!source) {
  source = prompt("What is the source branch?");
}

if (!destination) {
  destination = prompt("What is the destination branch?");
}

createPR(source, destination);
