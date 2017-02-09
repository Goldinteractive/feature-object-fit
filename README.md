## `object-fit-images` feature

Install polyfill functionality for `object-fit` / `object-position` properties on images.

### Global dependencies

* [`gi-js-base`](https://github.com/Goldinteractive/js-base)

### Dependencies

* [`object-fit-images`](https://github.com/bfred-it/object-fit-images)

### Installation

Install this package with sackmesser:

    make feature-install-object-fit-images

or when sackmesser is not used:

    yarn install gi-feature-object-fit-images

After the installation has completed, you can import the module files:

#### JS:

```javascript
// import feature class
import ObjectFitImage from 'gi-feature-object-fit-images'
// ...
base.features.add('fit', ObjectFitImage)
```

Make sure you provide the global dependencies in your webpack config file:

```javascript
new webpack.ProvidePlugin({
  base: 'gi-js-base'
})
```

#### Styles:

```sass
@import 'gi-feature-object-fit-images/src/style';
```

### Browser compatibility

* Newest two browser versions of Chrome, Firefox, Safari and Edge
* IE 9 and above

### Development

* `make build` or `npm run build` - Build production version of the feature.
* `make dev` or `npm run dev` - Build demo of the feature, run a watcher and start browser-sync.
* `make test` or `npm run test` - Test the feature.
* `make jsdoc` - Update documentation inside the `docs` folder.
* `make publish` - Publish npm package.
