const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const fs = require("fs");
const helpers = require("./webpack.helpers.js");
const WBMetaJsonGenerator = require("wb-packager-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const fileSystem = helpers.generateFS(__dirname + "/src/actions", "workerB");

const entryFiles = helpers.generateEntryPaths(fileSystem.children);

const mode = process.argv.filter((val) => val.includes("--mode"));
let environment = "production";
if (mode.length > 0 && mode[0].includes("dev")) {
  environment = "development";
}

const entryPaths = helpers
  .getFiles(entryFiles, ".ts")
  .map((file) => file.replace(".ts", ""));

const folderDescriptionList = [
  {
    path: "/workspaces",
    iconPath: "src/actions/workspaces/workspaces_logo.png",
    description: "Workspaces for the current user",
  },
  {
    path: "/workspaces/option/repos",
    iconPath: "src/actions/workspaces/option/repos/repos_logo.png",
    description: "List all repos for a workspace",
  },
  {
    path: "/workspaces/option/repos/option/branches",
    iconPath: "src/actions/workspaces/option/repos/option/branches/branch_logo.png",
    description: "List all the branches of a repo",
  },
  {
    path: "/workspaces/option/repos/option/PRs",
    iconPath: "src/actions/workspaces/option/repos/option/PRs/pr_logo.png",
    description: "List all the PRs of a repo",
  },
];

module.exports = {
  entry: entryPaths.reduce((result, entryPath) => {
    result[entryPath] = "./src/actions/" + entryPath + ".ts";
    return result;
  }, {}),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    globalObject: "this",
    libraryTarget: "umd",
    library: "main",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: { presets: ["@babel/preset-env"] },
      },
    ],
  },
  plugins: [
    new WBMetaJsonGenerator({
      environment,
      package: "Bitbucket",
      packageDescription: "workerB package for bitbucket.com",
      packageIcon: "src/actions/logo.png",
      readmeFile: "README.md",
      sites: ["https://www.bitbucket.com"],
      folderDescriptionList,
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: /(@description|@name|@ignore)/i,
          },
        },
      }),
    ],
  },
};
