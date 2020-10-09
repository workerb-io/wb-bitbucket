if (options.workspaces) {
    open(options.workspaces.links.html.href)
} else {
    notify("No workspace selected", "error", 3000)
}