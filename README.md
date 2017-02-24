## `object-fit` feature

Install polyfill functionality for `object-fit` / `object-position` properties on images and videos.
Also makes inlining videos on iOS < 10 possible.

### Global dependencies

* [`gi-js-base`](https://github.com/Goldinteractive/js-base)

### Dependencies

* [`object-fit-images`](https://github.com/bfred-it/object-fit-images)
* [`object-fit-videos`](https://github.com/TricomB2B/object-fit-videos)
* [`iphone-inline-video`](https://github.com/bfred-it/iphone-inline-video)

### Installation

Install this package with sackmesser:

    make feature-install-object-fit

or when sackmesser is not used:

    yarn install gi-feature-object-fit

After the installation has completed, you can import the module files:

#### JS:

```javascript
// import feature class
import ObjectFit from 'gi-feature-object-fit'
// ...
base.features.add('fit', ObjectFit)
```

Make sure you provide the global dependencies in your webpack config file:

```javascript
new webpack.ProvidePlugin({
  base: 'gi-js-base'
})
```

#### Styles:

```sass
@import 'gi-feature-object-fit/src/style';
```

### Browser compatibility

* Newest two browser versions of Chrome, Firefox, Safari and Edge
* IE 10 and above

### Development

* `make build` or `npm run build` - Build production version of the feature.
* `make dev` or `npm run dev` - Build demo of the feature, run a watcher and start browser-sync.
* `make test` or `npm run test` - Test the feature.
* `make jsdoc` - Update documentation inside the `docs` folder.
* `make publish` - Publish npm package.
