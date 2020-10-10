export const apiUrl = 'https://api.bitbucket.org/2.0/'
export const accessToken = VARS && VARS["BITBUCKET_PERSONAL_TOKEN"]

export const PACKAGE_NAME = process.env.NODE_ENV === "production" ? "bitbucket" : "dist"
