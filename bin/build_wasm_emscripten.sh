#!/bin/sh

#EMCC_DEBUG=1
source ../../utils/emsdk/emsdk_env.sh

export BOOSTROOT="build/boost/lib"
export BOOST_ROOT=$BOOSTROOT
export BOOST_LIB=$BOOSTROOT/lib
export BOOST_IGNORE_SYSTEM_PATHS=1
export BOOST_LIBRARYDIR=$BOOSTROOT/lib

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
mkdir -p ./dist || exit 1
[ -f ./build/haven_offshore_keys.js ] \
  && {
    mv ./build/haven_offshore_keys.js ./dist/
  }

[ -f ./build/haven_offshore_keys.wasm ] \
  && {
    mv ./build/haven_offshore_keys.wasm ./dist/
  }

[ -f ./build/haven_offshore.js ] \
  && {
    mv ./build/haven_offshore.js ./dist/
  }

[ -f ./build/haven_offshore.wasm ] \
  && {
    mv ./build/haven_offshore.wasm ./dist/
  }