#!/bin/bash
npx typeorm migration:generate
npx typeorm migration:run
node ./dist/main.js