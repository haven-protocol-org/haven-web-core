#!/bin/bash

# should be run after build, renames build files and their references in code
# bump version //TODO use hash of files for versionizing

VERSION=$(npm --no-git-tag-version version patch)
VERSION=$(echo $VERSION | cut -c 2-)




# rename code reference in Libraryutils
sed -i "" "s/const PACKAGE_VERSION =.*/const PACKAGE_VERSION = '$VERSION'/g" ./src/main/js/common/LibraryUtils.js 

# rename wasm file in haven_offshore.js
sed -i "" "s/haven_offshore.wasm/haven_offshore$VERSION.wasm/g" ./dist/haven_offshore.js 

# rename wasm file in HavenWebWorker
sed -i "" "s/haven_offshore.*.wasm/haven_offshore$VERSION.wasm/g" ./dist/HavenWebWorker.js 

# rename web worker 
# [ -f ./dist/HavenWebWorker.js ] \
#   && {
#     mv ./dist/HavenWebWorker.js ./dist/HavenWebWorker${VERSION}.js
#   }


# # rename wasm file
# [ -f ./dist/haven_offshore.wasm ] \
#   && {
#     mv ./dist/haven_offshore.wasm ./dist/haven_offshore${VERSION}.wasm
#   }

# # rename js glue code
# [ -f ./dist/haven_offshore.js ] \
#   && {
#     mv ./dist/haven_offshore.js ./dist/haven_offshore${VERSION}.js
#   }



