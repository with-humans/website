#!/bin/bash

set -ex

ffmpeg -i $1 -y -an -t 4s -crf 18 -vf hue=s=0,setpts=1.5*PTS,scale=1024:-1,eq=brightness=-0.2 $(dirname $0)/../img/train.mp4
ffmpeg -i $1 -y -an -t 4s -crf 18 -b:v 2000k -vf hue=s=0,setpts=1.5*PTS,scale=1024:-1,eq=brightness=-0.2 $(dirname $0)/../img/train.webm
ffmpeg -i $(dirname $0)/../img/train.mp4 -y -r 1 -f image2 -t 1 $(dirname $0)/../img/train.jpg
