#!/bin/bash

directory="/home/ubuntu/Neel9626"

echo "Sizes of all files using stat:"
find "$directory" -type f -exec stat --format="%s %n" {} \;

echo ""
echo "Sizes of all files using du:"
find "$directory" -type f -exec du -h {} +
