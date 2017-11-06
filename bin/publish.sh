#!/usr/bin/env bash

VERSION=$1

if [ "$VERSION" = "" ]; then
	echo "version is a required argument";
	exit 0;
fi

npm version ${VERSION} ;
./bin/build.sh ;
cd dist ;
npm publish ;

echo "******************* DONE *******************"

