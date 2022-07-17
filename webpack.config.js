const { config } = require("dotenv")
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const Dotenv = require('dotenv-webpack');

module.exports = {
    //...
    mode: 'development',
    entry: './src/main.js',
       plugins: [
        new NodePolyfillPlugin()
    ],
    resolve: {
        fallback: {
            "fs": false,
            "os":false,
            "path":false
        },
    },
    plugins: [
        new Dotenv()
      ]
    }