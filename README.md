# `returnif` demo

Checkout out the full post here: TODO

Here's a demonstration of the new `returnif` keyword.

This repo includes <a href="https://github.com/adamlouis/babel/pull/4">adamlouis/babel</a> as a git submodule.

The `index.js` file:

1. reads all files in `js-samples` dir as strings
2. runs `generate(parse(CODE))`
3. writes the AST and the transpiled JS to `js-gen` dir
3. excutes the generated js in the`js-gen` dir

# How to run

## clone

```
git clone git@github.com:adamlouis/returnif.git
```

## build the babel submodule

```
git submodule update --init
cd babel
npm i
npm run build
cd ..
```

You may get some errors during `npm run build`. These are fine as long as @babel/generator and @babel/parser build correctly. You can verify this by checking for the presence of the `./babel/packages/babel-parser/lib` and `./babel/packages/babel-generator/lib` directories.

# run!

```
node .
```