import { getUrl, decodeApiResponse } from '../../utils/helper'
import { accessToken } from '../../utils/constants'

var repoResponse = httpGet(getUrl(`/repositories&_=${new Date().getTime()}`), {
	Authorization: 'Basic ' + accessToken
})

var repoApiResponse = decodeApiResponse(repoResponse)
// var repoList = repoApiResponse.response

log(repoApiResponse)

const returnOptions = () => {
	return JSON.stringify({
		add: [],
	})
}

export default returnOptions
