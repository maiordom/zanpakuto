#!/usr/bin/env node

var fs = require('fs');
var exec = require('child_process').exec;
var util = require('util');

var execDir = process.cwd();
var moduleDir = __dirname;
var logger = function() {
    console.log(arguments);
};

exec(util.format('cp -f %s/src/.editorconfig %s', moduleDir, execDir), logger);
exec(util.format('cp -f %s/src/.eslintrc.js %s', moduleDir, execDir), logger);
exec(util.format('cp -f %s/src/gulpfile.js %s', moduleDir, execDir), logger);
exec(util.format('cp -f %s/src/pre-commit.js %s', moduleDir, execDir), logger);
exec(util.format('cp -d %s/demo %s', moduleDir, execDir), logger);
exec(util.format('cp -d %s/test %s', moduleDir, execDir), logger);
exec(util.format('mkdir %s/src', execDir), logger);
exec(util.format('mkdir %s/dist', execDir), logger);