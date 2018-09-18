#!/bin/sh
cd $TRAVIS_BUILD_DIR/rest-api
./../tslint/bin/tslint -c tslint.json 'src/**/*.ts'
