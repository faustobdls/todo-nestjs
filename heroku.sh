#!/bin/bash
sudo npm i -g @nestjs/cli
npx rimraf dist
nest build
npx typeorm migration:generate
npx typeorm migration:run
ls -lha dist
node ./dist/main.js