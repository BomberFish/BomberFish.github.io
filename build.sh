#!/bin/bash

npm run build

for f in $(ls -d dist/assets/*.js); do
  echo "Appending licence info to $f"
  echo -e "// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3.0\n$(cat $f)" > $f
  sed -i "\$i\\// @license-end" $f
done
