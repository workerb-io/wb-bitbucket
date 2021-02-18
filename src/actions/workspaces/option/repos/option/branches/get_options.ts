import { fetchWithAuth} from "../../../../../../utils/helper"

let branches: any[] | null = null

const returnOptions = () => {

    if (!options.workspaces || !options.repos) {
        return {}
    }

    branches = fetchWithAuth(`repositories/${options.workspaces.uuid}/${options.repos.slug}/refs/branches`)

	if (!branches) {
		return {}
	}

	return JSON.stringify({
		add: branches
	})
}

export default returnOptions
