import objectFitImages from 'object-fit-images'

/**
 * Object fit image feature class.
 */
class ObjectFitImage extends base.features.Feature {

  init() {
    objectFitImages(this.node, this.options)
  }

}

/**
 * Default feature options (also used to initialize object-fit-images library).
 *
 * @see https://github.com/bfred-it/object-fit-images
 *
 * @type {Object}
 * @property {Boolean} watchMQ=false
 *   This enables the automatic re-fix of the selected images when the window resizes.
 *   You only need it in some cases
 */
ObjectFitImage.defaultOptions = {
  watchMQ: false
}

export default ObjectFitImage
