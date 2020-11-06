#!/bin/bash
directory=dist
branch=gh-pages

build_command() {
  yarn build
}

rm -rf $directory

git checkout --orphan gh-pages

build_command

git --work-tree dist add --all

git --work-tree dist commit -m 'Deploy'

git push origin HEAD:gh-pages --force

rm -r $directory

git checkout -f master

git branch -D gh-pages