import { getUrl, decodeApiResponse } from 'utils/helper'
import { accessToken } from 'utils/constants'

var repoResponse = httpGet(getUrl(`workspaces`), {
	Authorization: 'Basic ' + accessToken
})

var repoApiResponse = decodeApiResponse(repoResponse)
var workspacesResponse = repoApiResponse.response
var workspaces = workspacesResponse.values

const returnOptions = () => {

	if (!workspaces) {
		return {}
	}

	return JSON.stringify({
		add: workspaces
	})
}

export default returnOptions
