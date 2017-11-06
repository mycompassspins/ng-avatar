#!/usr/bin/env bash

rm -rf dist
mkdir dist
tsc -p tsconfig.dist.json
cp src/lib/index.d.ts dist
cp src/lib/avatar.scss dist
cp package.json dist
cp package-lock.json dist
cp README.md dist
