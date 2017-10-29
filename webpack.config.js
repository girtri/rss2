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
		extensions: [ ".ts", ".tsx", ".js", ".css"]
	},

	devtool: "source-map", // enum
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader"
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader"
				]
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: {
					loader: "url-loader",
					options: {
						limit: 1000000,
						mimetype: "application/font-woff"
					}
				}
			}
		]
	}
};
