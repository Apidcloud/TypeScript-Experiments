const webpack = require('webpack');
const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const packageName = require('../package.json').name;

let finalPackageName;

let outputPath = path.resolve('build/build-es5');

// transpiling to ES6? (for editor and for some browsers)
const TO_ES6 = process.env.NODE_ENV === 'es6';

// deploying? (for complete games)
const DEPLOYING = process.env.NODE_ENV === 'production';

// default loaders when transpiling to ES5 (for running on every browser
// .ts(x) files should first pass through the Typescript loader, and then through babel
let loadersSetup = [
    {
        loader: 'babel-loader',
        options: {
            plugins: ['transform-runtime'],
            presets: [['es2015', { modules: false }], 'stage-3'],
        }
    },
    {
        loader: 'ts-loader'
    }
];

// if transpiling to ES6
if (TO_ES6) {
    // remove babel loader that would otherwise transpile to ES5
    loadersSetup.shift();
    outputPath = path.resolve('build/build-es6');
    finalPackageName = packageName + ".js";

} else {
    // ES5 - default case
    finalPackageName = packageName + '.browser.js';
}

if (DEPLOYING) {
    // also ES5, but minified
    finalPackageName = packageName + '.browser.min.js';
    outputPath = path.resolve('build/dist');
}

let config = {
    // TODO: check if targeting electron with webpack is better in some way (i.e., target: electron)

    // devtool is already set with -d (debug) and removed with -p (production) flags from webpack and webpack dev server
    // devtool: 'source-map',

    // Library (or app) entry point (webpack will look for it in the 'src' directory due to the modules setting below).
    entry: [
        'index.ts'
    ],
    // Output the bundled JS to dist/app.js
    output: {
        filename: finalPackageName,
        path: outputPath,
        // export itself to a global var
        libraryTarget: "var",
        // name of the global var
        library: "TE",
        // webpack dev server hot reload path
        publicPath: "/build/build-es5/"
    },
    resolve: {
        // Look for modules in .ts(x) files first, then .js(x)
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        // Add 'src' to our modules, as all our app code will live in there, so Webpack should look in there for modules
        modules: ['src', 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                // Skip any files outside of `src` directory
                include: /src/,
                // loaders depending on target (ES6 or ES5)
                use: loadersSetup
            }
        ]
    },
    plugins: [
        // Set up the notifier plugin - you can remove this (or set alwaysNotify false) if desired
        new WebpackNotifierPlugin({alwaysNotify: true})
    ]
};

module.exports = config;