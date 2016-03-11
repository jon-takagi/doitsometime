#!/bin/bash
cd ia
git pull origin master
rvmsudo rails s -p 80
