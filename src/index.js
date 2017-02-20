import objectFitImages from 'object-fit-images'

/**
 * Object fit image feature class.
 */
class ObjectFitImage extends base.features.Feature {

  init() {
    this._objectFit = this.node.getAttribute('data-object-fit')
    this._objectPosition = this.node.getAttribute('data-object-position')

    if (this._objectFit) {
      this.node.style.objectFit = this._objectFit
    } else {
      this._objectFit = base.utils.dom.computedStyle(this.node, 'object-fit')
    }

    if (this._objectPosition) {
      this.node.style.objectPosition = this._objectPosition
    } else {
      this._objectPosition = base.utils.dom.computedStyle(this.node, 'object-position')
    }

    this.node.style.fontFamily = `"object-fit: ${this._objectFit}; object-position: ${this._objectPosition}"`

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
