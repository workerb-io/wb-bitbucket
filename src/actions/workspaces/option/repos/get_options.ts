import { accessToken } from "../../../../utils/constants"
import { decodeApiResponse, getUrl } from "../../../../utils/helper"

let repositories: any[] | null = null

if (options.workspaces) {
	const repoResponse = httpGet(getUrl(`repositories/${options.workspaces.uuid}`), {
		Authorization: 'Basic ' + accessToken
	})
	
	const repoApiResponse = decodeApiResponse(repoResponse)
	const repositoriesResponse = repoApiResponse.response
	repositories = repositoriesResponse.values
} else {
	repositories = null
}

const returnOptions = () => {

	if (!repositories) {
		return {}
	}

	return JSON.stringify({
		add: repositories
	})
}

export default returnOptions
