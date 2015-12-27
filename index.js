#!/usr/bin/env node

var fs = require('fs');
var exec = require('child_process').exec;
var util = require('util');

var execDir = process.cwd();
var moduleDir = __dirname;
var logger = function() {
    console.log(arguments);
};

exec(util.format('cp %s/src/.eslintrc.js %s', moduleDir, execDir), logger);
exec(util.format('cp %s/src/gulpfile.js %s', moduleDir, execDir), logger);
exec(util.format('cp %s/src/pre-commit.js %s', moduleDir, execDir), logger);
exec(util.format('cp %s/demo %s', moduleDir, execDir), logger);
exec(util.format('cp %s/test %s', moduleDir, execDir), logger);
exec(util.format('mkdir %s/src', execDir), logger);
exec(util.format('mkdir %s/dist', execDir), logger);