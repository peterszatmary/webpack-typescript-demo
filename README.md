# webpack-typescript-demo #
Webpack typescript integration.

[![Build Status](https://travis-ci.org/peterszatmary/webpack-typescript-demo.svg?branch=master)](https://travis-ci.org/peterszatmary/webpack-typescript-demo)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f0e3a53e2bd24cd6947230b5b9c87c7e)](https://www.codacy.com/app/peterszatmary/webpack-typescript-demo?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=peterszatmary/webpack-typescript-demo&amp;utm_campaign=Badge_Grade)

## What project does ##

-   creating target bundle.js from typescript files in src folder.
-   transpiling from typescript to javascript
-   minifying the bundle.js with
-   creating sourcemap bundle.js.map.

At start we have several typescript files in src folder. These are transpiled to
javascript es5 and combined to one target bundle.js file that is minifyied with UglifyJsPlugin.

## Config files ##

There are three configuration files in project.

-   **[package.json](https://github.com/peterszatmary/webpack-typescript-demo/blob/master/package.json)** : for npm, used for installing node modules as dependencies.
-   **[tsconfig.json](https://github.com/peterszatmary/webpack-typescript-demo/blob/master/tsconfig.json)** : configuration for typescript
-   **[webpack.config.js](https://github.com/peterszatmary/webpack-typescript-demo/blob/master/webpack.config.js)** : configuration for webpack

## How to run ##

```bash
npm install
```

Install all dependencies from [package.json](https://github.com/peterszatmary/webpack-typescript-demo/blob/master/package.json).

```bash
webpack
```

creates [bundle.js](https://github.com/peterszatmary/webpack-typescript-demo/blob/master/build/bundle.js) and [bundle.js.map](https://github.com/peterszatmary/webpack-typescript-demo/blob/master/build/bundle.js.map).

For development purpose is better to use watch mode that will trigger webpack on your change in code.

```bash
webpack --watch
```

## Output ##

Output is in [build](https://github.com/peterszatmary/webpack-typescript-demo/tree/master/build) folder. There should be after webpack command 2 files :

- [bundle.js](https://github.com/peterszatmary/webpack-typescript-demo/blob/master/build/bundle.js)
- [bundle.js.map](https://github.com/peterszatmary/webpack-typescript-demo/blob/master/build/bundle.js.map)

After running bundle.js you should see

![webpack-typescript-output](https://github.com/peterszatmary/just-like-that/blob/master/imgs/webpack-typescript-demo/webpack-typescript-output.png)