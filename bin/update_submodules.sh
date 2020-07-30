#!/usr/bin/env bash

# initialize submodules recursively
git submodule update --init --recursive

# update haven-web-cpp
cd ./external/haven-web-cpp
git checkout tags/v0.3.3
git pull ##--ff-only origin tags/v0.3.3

# update haven-offshore
cd ./external/haven-offshore
git checkout master
git pull #--ff-only origin tags/v0.16.0.1
cd ../../../../