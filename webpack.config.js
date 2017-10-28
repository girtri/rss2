const path = require("path");

module.exports = {
	entry: "./app/ts/index.tsx",
	output: {
		path: path.resolve(__dirname, "./app/build/js/"),
		filename: "bundle.js"
	},
	target: "electron-renderer",

	resolve: {
		modules: [
			"node_modules",
			path.resolve(__dirname, "app/ts")
		],
		extensions: [ ".ts", ".tsx", ".js"]
	},

	devtool: "source-map", // enum
	module: {
		rules: [
		{
			test: /\.tsx?$/,
			use: "ts-loader"
		}
		]
	}
};