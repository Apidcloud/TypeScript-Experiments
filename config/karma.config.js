/**
 * Created by luisf on 14/05/2017.
 */

const webpack = require('webpack');

const webpackConfig = require('./webpack.config');

module.exports = function (config) {
    config.set({
        basePath: '',

        frameworks: ['jasmine'],

        files: [
            '../test/*_test.ts',
            '../test/**/*_test.ts'
        ],

        preprocessors: {
            '../test/*_test.ts': ['webpack'],
            '../test/**/*_test.ts': ['webpack'],
        },

        mime: {
            'text/x-typescript': ['ts','tsx']
        },

        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true,
        concurrency: Infinity,

        webpack: {

            module: {
                loaders: [
                    {
                        test: /\.tsx?$/,
                        // we only want typescript loader here
                        // (i.e., we don't need ES5 and thus not babel-loader, so we don't use the webpackConfig.module)
                        loaders: ['babel-loader', 'ts-loader']
                    }
                ]
            },
            resolve: webpackConfig.resolve
        },
    })
}
