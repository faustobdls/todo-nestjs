#!/bin/bash
npm i
npx install @nestjs/cli
rimraf dist
nest build
npm run migration:generate
npm run migration:run
node dist/main.js