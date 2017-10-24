import objectFitImage from 'object-fit-images'
import objectFitVideo from 'object-fit-videos'
import enableInlineVideo from 'iphone-inline-video'

const CLASS_FEATURE = '.ft-fit-bg'
const CLASS_INITIAL_HIDE = '-initial-hide'

/**
 * Object fit feature class.
 */
class ObjectFit extends base.features.Feature {

  init() {
    this._objectFit = this.node.getAttribute('data-object-fit')
    this._objectPosition = this.node.getAttribute('data-object-position')

    if (this._objectFit && this._objectPosition) {
      this.node.style.objectFit = this._objectFit
      this.node.style.objectPosition = this._objectPosition
      this.node.style.fontFamily = `"object-fit: ${this._objectFit}; object-position: ${this._objectPosition}"`
    } else if (this._objectFit) {
      this.node.style.objectFit = this._objectFit
      this.node.style.fontFamily = `"object-fit: ${this._objectFit}; object-position: ${this.options.defaultObjectPosition}"`
    } else  if (this._objectPosition) {
      this.node.style.objectPosition = this._objectPosition
      this.node.style.fontFamily = `"object-fit: ${this.options.defaultObjectFit}; object-position: ${this._objectPosition}"`
    }

    if (this.node.nodeName.toLowerCase() == 'video') {
      objectFitVideo(this.node)
      enableInlineVideo(this.node, {
          iPad: this.options.iPad
      })

      if (this.node.autoplay) this.node.play()
    } else {
      objectFitImage(this.node, {
        watchMQ: this.options.watchMQ
      })
    }

    // remove initial hide class
    window.setTimeout(() => {
      this.node.closest(CLASS_FEATURE).classList.remove(CLASS_INITIAL_HIDE)
    }, 0)
  }

}

/**
 * Default feature options (also used to initialize object-fit-images and iphone-inline-video library).
 *
 * @see https://github.com/bfred-it/object-fit-images
 *
 * @type {Object}
 * @property {Boolean} watchMQ=false
 *   This enables the automatic re-fix of the selected images when the window resizes.
 *   You only need it in some cases
 * @property {String} defaultObjectFit='cover'
 *   Default object fit used when only `data-object-position` is defined
 * @property {String} defaultObjectPosition='center center'
 *   Default object position used when only `data-object-fit` is defined
 */
ObjectFit.defaultOptions = {
  iPad: true,
  watchMQ: false,
  defaultObjectFit: 'cover',
  defaultObjectPosition: 'center center'
}

export default ObjectFit
