#!/usr/bin/env bash

# compile sass
npx sass sass/:build/resources/styles/

# copy html files
ln html/home.html build/index.html
ln html/404.html build/404.html
