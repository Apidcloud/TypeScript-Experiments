var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    // for development use eval-source-map
    // for production use source-map
    devtool: 'eval-source-map',
    // Library (or app) entry point (webpack will look for it in the 'src' directory due to the modules setting below).
    entry: [
        'index.js'
    ],
    // Output the bundled JS to dist/app.js
    output: {
        filename: 'app.js',
        path: path.resolve('dist'),
        // export itself to a global var
        libraryTarget: "var",
        // name of the global var
        library: "SC"
    },
    resolve: {
        // Look for modules in .ts(x) files first, then .js(x)
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        // Add 'src' to our modulesDirectories, as all our app code will live in there, so Webpack should look in there for modules
        modules: ['src', 'node_modules']
    },
    module: {
        loaders: [
            // .ts(x) files should first pass through the Typescript loader, and then through babel
            {
                test: /\.tsx?$/,
                loaders: ['babel-loader', 'ts-loader']
            }
        ]
    },
    plugins: [
        // Set up the notifier plugin - you can remove this (or set alwaysNotify false) if desired
        new WebpackNotifierPlugin({ alwaysNotify: true })
    ]
};