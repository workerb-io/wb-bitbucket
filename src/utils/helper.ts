import { accessToken, apiUrl, PACKAGE_NAME } from './constants'

interface Branch {
    name: string
}

interface BranchPayload {
    branch: Branch
}

interface PullRequestRequest {
    title: string,
    source: BranchPayload,
    destination: BranchPayload
}

export const getUrl = (endPoint: string) => {
	return apiUrl + endPoint
}

export const decodeApiResponse = (result: APIResponse) => {
	if (!result.response) {
		return {
			response: {},
			status: result.status,
		}
	}

	return {
		response: JSON.parse(result.response),
		status: result.status,
	}
}

export const fetchWithAuth = (endPoint: string): any => {
    const apiResponse = httpGet(getUrl(endPoint), {
		Authorization: 'Basic ' + accessToken
	})
	
	const decodedApiResponse = decodeApiResponse(apiResponse)
	const { response = {} } = decodedApiResponse

	if (response.type === "error") {
		throw response.error.message
	}
    
	return response.values || null
}

export function UpdateWithAuth<P, R>(endPoint: string, payload?: P): R {

	const stringifiedData: string | null = payload ? JSON.stringify(payload) : null
	const headers: any = {
		Authorization: 'Basic ' + accessToken
	}

	if (stringifiedData) {
		headers["content-type"] = "application/json"
	}

	const apiResponse = httpPost(getUrl(endPoint), stringifiedData, headers)
	
	const decodedApiResponse = decodeApiResponse(apiResponse)
	const { response = {} } = decodedApiResponse

	if (response.type === "error") {
		notify(response.error.message, "error", 3000)
		throw response.error.message
	}

	return response.values
}

export function DeleteWithAuth (endPoint: string): any {

	const headers: any = {
		Authorization: 'Basic ' + accessToken
	}

	const apiResponse = httpDelete(getUrl(endPoint), null, headers)
	
	const decodedApiResponse = decodeApiResponse(apiResponse)
	const { response = {} } = decodedApiResponse

	if (response.type === "error") {
		notify(response.error.message, "error", 3000)
		throw response.error.message
	}

	return response
}

export function createPR (source: string, destination: string): void {
	const title = prompt("PR title")

	const payload: PullRequestRequest = {
		title,
		"source": {
			"branch": {
				"name": source
			}
		},
		"destination": {
			"branch": {
				"name": destination
			}
		}
	}

	try {
		UpdateWithAuth<PullRequestRequest, any>(`repositories/${options.workspaces.uuid}/${options.repos.slug}/pullrequests/`, payload)
		notify("PR created", "success", 3000)
		reIndex([PACKAGE_NAME, "workspaces", options.workspaces.name, "repos", options.repos.name, "PRs"])
	} catch (error) {
		throw error
	}
}
