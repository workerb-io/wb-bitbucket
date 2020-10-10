import { fetchWithAuth } from "../../../../utils/helper"

let repositories: any[] | null = null

const returnOptions = () => {

	if (!options.workspaces) {
		return {}	
	}

	repositories = fetchWithAuth(`repositories/${options.workspaces.uuid}`)

	if (!repositories) {
		return {}	
	}

	return JSON.stringify({
		add: repositories
	})
}

export default returnOptions
