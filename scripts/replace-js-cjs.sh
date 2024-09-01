#!/bin/bash
sed -i 's|require("./spiritist-books.js")|require("./spiritist-books.cjs")|' dist/index.cjs