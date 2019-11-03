#!/bin/bash
npm i
rimraf dist
nest build
npm run migration:generate
npm run migration:run
ls -lha
node ./src/dist/main.js