#!/usr/bin/env bash

# initialize submodules recursively
git submodule update --init --recursive

# update haven-web-cpp
cd ./external/haven-web-cpp
git checkout feature/xassets #tags/v0.3.3
git pull ##--ff-only origin tags/v0.3.3

# update haven-main

branchname=$(git --git-dir ../../.git branch --show-current)
tagname=$(git --git-dir ../../.git tag --points-at HEAD)

cd ./external/haven-main

if [ -z "$branchname" ]
then
    git checkout tags/$tagname
else
    git checkout $branchname
fi
 


git pull #--ff-only origin tags/v0.16.0.1
cd ../../../../