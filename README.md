# react-cart-example
This is my attempt to play around with [ReactJS](https://facebook.github.io/react/).

## Tools

* [webpack](https://github.com/webpack/webpack)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)
* [eslint](http://eslint.org/)

### Available Commands

```shell
npm start
```

run the (webpack-dev-server)[http://webpack.github.io/docs/webpack-dev-server.html] with hot-reloading.
Access the application at http://localhost:8000

```shell
npm run build
```

run webpack in production mode, and build the optimized bundle inside `src/build` folder with source-map.
Access the application at http://localhost:8000

```shell
npm run serve-build
```

serve the production ready application on http://localhost:8000.
Since we bundled the file with source-mapping support, Yìyou'll be able to debug it using chrome-dev-tools.

```shell
npm run eslint
```

```shell
npm run jscs
```


### TODO
* Order items
* Filter items
* remove items from the Cart
* [css](https://github.com/MicheleBertoli/css-in-js)
* tests
* using some flux approach?
* loading initial data asynchronously
