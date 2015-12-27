#!/usr/bin/env node

var fs = require('fs');
var exec = require('child_process').exec;
var util = require('util');

var execDir = process.cwd();
var moduleDir = __dirname;
var logger = function() {
    console.log(arguments);
};

exec(util.format('cp -vi %s/src/.editorconfig %s', moduleDir, execDir), logger);
exec(util.format('cp -vi %s/src/.eslintrc.js %s', moduleDir, execDir), logger);
exec(util.format('cp -vi %s/src/pre-commit.js %s', moduleDir, execDir), logger);

exec(util.format('cp -vi %s/src/gulpfile.js %s', moduleDir, execDir), logger);
exec(util.format('cp -riv %s/src/demo %s', moduleDir, execDir), logger);
exec(util.format('cp -riv %s/src/test %s', moduleDir, execDir), logger);
exec(util.format('mkdir -v %s/src', execDir), logger);
exec(util.format('mkdir -v %s/dist', execDir), logger);
