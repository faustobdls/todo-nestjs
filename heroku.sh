#!/bin/bash
ls -lha ./
# npm i -g @nestjs/cli
# npx rimraf dist
# nest build
npx typeorm migration:generate
npx typeorm migration:run
ls -lha ./
node ./dist/main.js