#!/usr/bin/env bash

# initialize submodules recursively
git submodule update --init --recursive

# hack for building after difficulty drift fix
sed -i 's/long double/double/g' external/haven-web-cpp/external/haven/src/cryptonote_basic/difficulty.cpp
