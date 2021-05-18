#!/bin/sh

#EMCC_DEBUG=1 

# get current package version
NPM_VERSION=$(node -p -e "require('./package.json').version")
#rename webworker reference in LibraryUtils
sed -i "" "s/HavenWebWorker[0-9\.]*/HavenWebWorker${NPM_VERSION}./g" ./src/main/js/common/LibraryUtils.js 
# build web app dependencies -> adds current package version on its own
npm run build_worker


