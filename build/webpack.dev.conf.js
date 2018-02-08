"use strict"
const utils = require("./utils")
const webpack = require("webpack")
const config = require("../config")
const merge = require("webpack-merge")
const baseWebpackConfig = require("./webpack.base.conf")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin")
const BrowserSyncPlugin = require("browser-sync-webpack-plugin")

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
	baseWebpackConfig.entry[name] = ["./build/dev-client"].concat(
		baseWebpackConfig.entry[name]
	)
})

module.exports = merge(baseWebpackConfig, {
	module: {
		rules: utils.styleLoaders({
			sourceMap: config.dev.cssSourceMap,
		}),
	},
	// cheap-module-eval-source-map is faster for development
	// use "source-map" to enable VSCode debugger
	devtool: "source-map",
	plugins: [
		new webpack.DefinePlugin({
			"process.env": config.dev.env,
		}),
		// https://github.com/glenjamin/webpack-hot-middleware#installation--usage
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		// https://github.com/ampedandwired/html-webpack-plugin
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "index.html",
			inject: true,
		}),
		new FriendlyErrorsPlugin(),
		new BrowserSyncPlugin(
			{
				host: "localhost",
				port: 3000,
				proxy: "http://localhost:8080/",
				open: false,
			},
			{
				reload: false,
			}
		),
	],
})
