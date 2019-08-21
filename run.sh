#!/bin/sh
docker run --rm -p 4000:4000 -v "$(pwd):/srv/jekyll" -it jekyll/jekyll:3.7 jekyll serve
