// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

/* eslint-disable import/no-extraneous-dependencies, global-require, @typescript-eslint/no-var-requires, func-names */

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    browsers: ['MyHeadlessChrome'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-brief-reporter'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    customLaunchers: {
      MyHeadlessChrome: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
          '--disable-translate',
          '--disable-extensions',
          '--no-sandbox',
          '--remote-debugging-port=9222',
          '--js-flags="--max_old_space_size=4096"',
        ],
      },
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly', 'text'],
      fixWebpackSourcePaths: true,
      verbose: false,
      thresholds: {
        emitWarning: false,
        global: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80,
        },
        each: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80,
        },
      },
    },
    briefReporter: {
      omitExternalStackFrames: true,
      suppressBrowserLogs: true,
    },
    reporters: ['coverage-istanbul', 'brief'],
    colors: true,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,
  });
};
