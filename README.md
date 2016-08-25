# webpack-typescript-demo
Webpack typescript integration.


## What project does

- creating target bundle.js from typescript files in src folder.
- transpiling from typescript to javascript
- minifying the bundle.js with
- creating sourcemap bundle.js.map.


At start we have several typescript files in src folder. These are transpiled to
javascript es5 and combined to one target bundle.js file that is minifyied with UglifyJsPlugin.


## Config files

There are three configuration files in project.

- **package.json** : for npm, used for installing node modules as dependencies.
- **tsconfig.json** : configuration for typescript
- **webpack.config.js** : configuration for webpack




## How to run

```shell
npm install
```

Install all dependencies from package.json.


```shell
webpack
```

creates bundle.js and bundle.js.map.

For development purpose is better to use watch mode that will trigger webpack on your change in code.

```shell
webpack --watch
```

## Output

TODO


