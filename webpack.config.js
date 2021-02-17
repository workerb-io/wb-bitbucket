const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const fs = require("fs");
const helpers = require("./webpack.helpers.js");
const WBMetaJsonGenerator = require("wb-packager-webpack-plugin");

const fileSystem = helpers.generateFS(__dirname + "/src/actions", "workerB");

const entryFiles = helpers.generateEntryPaths(fileSystem.children);

const entryPaths = helpers
  .getFiles(entryFiles, ".ts")
  .map((file) => file.replace(".ts", ""));

const metaFiles = helpers.getFiles(entryFiles, ".json");

console.log(metaFiles);

let copyPatterns = metaFiles.map((metaFile) => ({
  from: "./src/actions/" + metaFile,
  to: "./" + metaFile,
}));

const rootJSON = fs.readFileSync("./src/actions/meta.json", "utf8");
const rootJSONParsed = rootJSON ? JSON.parse(rootJSON) : {};
let iconPath = "";

if (rootJSONParsed.icon) {
  iconPath = path.join("./src/actions", rootJSONParsed.icon);
  copyPatterns.concat({ from: iconPath, to: "./" });
}

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
    alias: {
      utils: path.resolve(__dirname, "src/utils/"),
    },
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
    new CopyPlugin({
      patterns: copyPatterns,
      options: {
        concurrency: 100,
      },
    }),
    new WBMetaJsonGenerator({
      environment: "development",
      package: "wb-bitbucket",
      packageDescription: "test",
      packageIcon: "",
      readmeFile: "README.md",
      folderDescriptionList: [
        {
          path: "/boards",
          description: "Display all the boards",
          iconPath: "",
        },
        {
          path: "",
          description: "Display all the lists of the board",
        },
      ],
    }),
  ],
};
