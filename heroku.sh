#!/bin/bash
npm i
npx rimraf dist
npx nest build
npm run migration:generate
npm run migration:run
ls -lha src
node ./src/dist/main.js