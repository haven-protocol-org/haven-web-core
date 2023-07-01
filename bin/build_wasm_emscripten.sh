#!/bin/bash

#EMCC_DEBUG=1
source ../../utils/emsdk/emsdk_env.sh

export BOOSTROOT="build/boost/lib"
export BOOST_ROOT=$BOOSTROOT
export BOOST_LIB=$BOOSTROOT/lib
export BOOST_IGNORE_SYSTEM_PATHS=1
export BOOST_LIBRARYDIR=$BOOSTROOT/lib

# get current package version
NPM_VERSION=$(node -p -e "require('./package.json').version")


# export build names for versioning
export HAVEN_OFFSHORE_NAME=haven_offshore${NPM_VERSION}
export HAVEN_OFFSHORE_KEYS_NAME=haven_offshore_keys${NPM_VERSION}



# delete emscripten cache (enable if modifying em_js or its dependencies for full refresh)
rm -rf ~/.emscripten_cache || exit 1

# build wasm files
HOST_NCORES=$(nproc 2>/dev/null || shell nproc 2>/dev/null || sysctl -n hw.ncpu 2>/dev/null || echo 1)
[ -d build ] || mkdir -p build || exit 1
cd build || exit 1
emcmake cmake .. || exit 1
emmake cmake --build . -j$HOST_NCORES || exit 1




# move available wasm files to ./dist
cd ..

#delete dist folder if exist
rm -r ./dist || true

mkdir -p ./dist || exit 1
[ -f ./build/${HAVEN_OFFSHORE_KEYS_NAME}.js ] \
  && {
    mv ./build/${HAVEN_OFFSHORE_KEYS_NAME}.js ./dist/
  }

[ -f ./build/${HAVEN_OFFSHORE_KEYS_NAME}.wasm ] \
  && {
    mv ./build/${HAVEN_OFFSHORE_KEYS_NAME}.wasm ./dist/
  }

[ -f ./build/${HAVEN_OFFSHORE_NAME}.js ] \
  && {
    mv ./build/${HAVEN_OFFSHORE_NAME}.js ./dist/
  }

[ -f ./build/${HAVEN_OFFSHORE_NAME}.wasm ] \
  && {
    mv ./build/${HAVEN_OFFSHORE_NAME}.wasm ./dist/
  }



# rename reference in Libraryutils
if [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i "" "s/haven_offshore[0-9\.]*/${HAVEN_OFFSHORE_NAME}/g" ./src/main/js/common/LibraryUtils.js 
else
  sed -i "s/haven_offshore[0-9\.]*/${HAVEN_OFFSHORE_NAME}/g" ./src/main/js/common/LibraryUtils.js 
fi
