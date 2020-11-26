#!/usr/bin/env bash

# initialize submodules recursively
git submodule update --init --recursive

# update haven-web-cpp
cd ./external/haven-web-cpp
git checkout master #tags/v0.3.3
git pull ##--ff-only origin tags/v0.3.3

# update haven-offshore
branchname=$(git branch --show-current)
tagname=$(git tag --points-at HEAD)
if [ -z "$branchname" ]
then
    git checkout tags/$tagname
else
    git checkout $branchname
fi

cd ./external/haven-offshore

git pull #--ff-only origin tags/v0.16.0.1
cd ../../../../