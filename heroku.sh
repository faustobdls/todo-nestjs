#!/bin/bash
npm i
npx install @nestjs/cli
rimraf dist
nest build
node dist/main.js