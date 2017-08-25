# TWB Transparentizer

## What?

This is a node script that generates the transparent PNGs found on the [Trends With Benefits](http://twb.cool) website. It has a very specific use case.

## How?

This script relies heavily on [Jimp](https://github.com/oliver-moran/jimp), a terrific JavaScript-based image manipulation tool.

You want to use this? OK. Here's how.

### Requirements

* node (I use [nvm](https://github.com/creationix/nvm) to install and manage node versions)

### Usage

1. Clone the repo: `git clone https://github.com/gabedanon/twb-transparentizer`
2. Install dependencies: `npm install` or `yarn` if you use [yarn](https://yarnpkg.com)
3. Add image(s) you'd like to convert to the `in/` folder
4. Run `node index.js`
5. Voilà! Converted images are output to the `out/` folder