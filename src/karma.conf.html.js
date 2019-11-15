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
      require('karma-jasmine-html-reporter'),
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
    reporters: ['kjhtml'],
    colors: true,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,
  });
};
