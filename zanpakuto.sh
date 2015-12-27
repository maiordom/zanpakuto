#!/bin/bash

EXEC_DIR=$(pwd)
MODULE_DIR=eval cd $(dirname $0) && pwd

cp -vi $MODULE_DIR/src/.editorconfig $EXEC_DIR
cp -vi $MODULE_DIR/src/.eslintrc.js $EXEC_DIR
cp -vi $MODULE_DIR/src/pre-commit.js $EXEC_DIR
cp -vi $MODULE_DIR/src/gulpfuke.js $EXEC_DIR
cp -vir $MODULE_DIR/src/demo $EXEC_DIR
cp -vir $MODULE_DIR/src/test $EXEC_DIR
mkdir -v $EXEC_DIR/src
mkdir -v $EXEC_DIR/dist
