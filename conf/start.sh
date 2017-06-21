#!/bin/bash
echo "starting container"
service nginx restart
node ./dist/server.js