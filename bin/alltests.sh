#!/bin/bash

bin=$(dirname $0)

file=alltests.js

cd $bin/../;

echo '' > $file

list=$(find plu lg -iname *_test.html | xargs -i echo \"{}\",)
list="$list%%%"
list=${list/,%%%/}

echo '//本文档由 bin/alltests.sh 生成请勿手工修改。' > $file
echo "var _allTests = [$list];" >> $file





