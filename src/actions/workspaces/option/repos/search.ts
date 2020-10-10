if (args[0]) {
    open(`https://bitbucket.org/dashboard/repositories?search=${args[0]}`)
} else {
    open("https://bitbucket.org/dashboard/repositories")
}
