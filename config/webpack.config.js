const webpack = require('webpack');
const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const packageName = require('../package.json').name;

let finalPackageName = packageName + '.js';

// default loaders when transpiling to ES5 (for running on every browser)
let loadersSetup = ['babel-loader', 'ts-loader'];

let outputPath = path.resolve('build/build-es5');

// transpiling to ES6? (for editor and for some browsers)
const toES6 = process.env.NODE_ENV === 'es6';

// deploying? (for complete games)
const deploying = process.env.NODE_ENV === 'production';

if (toES6) {
    // remove babel loader that would otherwise transpile to ES5
    loadersSetup.shift();
    outputPath = path.resolve('build/build-es6');

}

if (deploying) {
    finalPackageName = packageName + '.min.js';
    outputPath = path.resolve('build/dist');
}


let config = {
    // Library (or app) entry point (webpack will look for it in the 'src' directory due to the modules setting below).
    entry: [
        'index.js'
    ],
    // Output the bundled JS to dist/app.js
    output: {
        filename: finalPackageName,
        path: outputPath,
        // export itself to a global var
        libraryTarget: "var",
        // name of the global var
        library: "TE",
        publicPath: "/build/build-es5/"
    },
    resolve: {
        // Look for modules in .ts(x) files first, then .js(x)
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        // Add 'src' to our modules, as all our app code will live in there, so Webpack should look in there for modules
        modules: ['src', 'node_modules']
    },
    module: {
        loaders: [
            // .ts(x) files should first pass through the Typescript loader, and then through babel
            {
                test: /\.tsx?$/,
                loaders: loadersSetup
            }
        ]
    },
    plugins: [
        // Set up the notifier plugin - you can remove this (or set alwaysNotify false) if desired
        new WebpackNotifierPlugin({alwaysNotify: true})
    ]
};

module.exports = config;