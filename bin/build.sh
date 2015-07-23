#!/bin/bash

namespace=$1
if [ -z "$namespace" ]; then
  echo '用法: ./build.sh NAMESPACE [-mixin]'
  echo '  -mixin 使用该参数将使得css样式被打包在js代码中'
  echo ''
  echo '示例: ./build.sh plu.home'
  echo '      ./build.sh plu.widget.title -mixin'
  exit 0
fi

if [[ $2 == '-mixin' ]]; then
  mixin=1
fi

# 相关路径
bin=`dirname $0`
build=$bin/../build

jsns=${namespace/\.main/}
cssns=${jsns/plu\./plu\.css\.}
cssns=${cssns/lg\./lg\.css\.}

jspath=${jsns//\./\/}
csspath=${cssns//\./\/}

jsmain=$bin/../$jspath/main.js
cssmain=$bin/../$csspath/main.css

jsbuild=$build/$jspath
cssbuild=$build/$csspath

jso=${jsbuild}.o
csso=${cssbuild}.o

# js打包
if [ -a $jsmain ]; then
  echo "打包js代码 ..." 
  # 尝试创建所需目录
  mkdir -p `dirname $jsbuild.js`
  # 调用closure compiler进行打包
  $bin/../closure-library/closure/bin/build/closurebuilder.py \
  --root=$bin/../closure-library/ \
  --root=$bin/../closure-templates/ \
  --root=$bin/../plu/ \
  --root=$bin/../mem/ \
  --root=$bin/../lg/ \
  --namespace="${jsns}.main" \
  --output_mode=compiled \
  --compiler_flags="--compilation_level=ADVANCED_OPTIMIZATIONS" \
  --compiler_flags="--define=goog.DEBUG=false" \
  --compiler_flags="--output_wrapper=(function(){%output%})();" \
  --compiler_flags="--js_output_file=$jso" \
  --compiler_jar=$bin/../closure-compiler/compiler.jar 
  
else
  echo "找不到 ${jsmain} 不进行js打包"
fi 

# css打包
if [ -a $cssmain ]; then
  echo "打包css代码 ..."
  # 尝试创建所需目录
  mkdir -p `dirname $cssbuild.css`
  # 获取cdn路径
  csscdn=`grep -o "cdn\s*=\s*[^ \*]*" $cssmain \
    | cut -d "=" -f 2
    ` 
  if [[ $csscdn == '' ]]; then
    csscdn="http://r.plures.net/plu/images"
  fi
  csscdn=${csscdn/images\//images}
  # 调用closure stylesheet进行打包
  grep -o "url(.*)" $cssmain \
    | sed -E "s/url\(([^\(\)'\"]*)\)/\1/" \
    | xargs -i echo ${bin}/../${csspath}/{} \
    | xargs java -jar $bin/../closure-stylesheets/closure-stylesheets.jar \
	--allow-unrecognized-functions \
    | sed -E "s/\"/'/g" \
    | sed "s#([^(http:]*images#(${csscdn}#g" >> $csso
else
  echo "找不到 ${cssmain} 不进行css打包"
fi

if [[ $mixin ]]; then 
  if [ -a $csso ]; then
    if [ -a $jso ]; then
      cssstr=`cat $csso`
      styleadder=$build/styleadder.o
      $bin/../closure-library/closure/bin/build/closurebuilder.py \
      --root=$bin/../closure-library/ \
      --root=$bin/../closure-templates/ \
      --root=$bin/../plu/ \
      --root=$bin/../mem/ \
      --root=$bin/../lg/ \
      --namespace="plu.widget.styleadder.main" \
      --output_mode=compiled \
      --compiler_flags="--compilation_level=ADVANCED_OPTIMIZATIONS" \
      --compiler_flags="--define=goog.DEBUG=false" \
      --compiler_flags="--js_output_file=$styleadder" \
      --compiler_jar=$bin/../closure-compiler/compiler.jar 
      njso=${jso}.m
      echo -n '(function(){var STYLE_STR="' > $njso
      cat $csso | xargs -i echo -n {} >> $njso
      echo -n '";' >> $njso
      cat $styleadder >> $njso
      echo -n '})();' >> $njso
      cat $jso >> $njso
      njsid=`node $bin/crc32.js $njso`
      njsc=${jsbuild}-$njsid.js
      mv $njso $njsc
      echo "$njsc"
      rm $csso
      rm $jso
      rm $styleadder
    fi 
  fi
else 
  # 为js打包结果加上标示
  if [ -a $jso ]; then
    jsid=`node $bin/crc32.js $jso`
    jsc=${jsbuild}-$jsid.js
    mv $jso $jsc 
    echo "$jsc"
  fi

  # 为css打包结果加上标示
  if [ -a $csso ]; then
    cssid=`node $bin/crc32.js $csso`
    cssc=${cssbuild}-$cssid.css
    mv $csso $cssc 
    echo "$cssc"
  fi
fi
