import Submenu from './submenuBase';
import util from '../util';
import templateHtml from './template/submenu/mask';
/**
 * Mask ui class
 * @class
 * @ignore
 */
class Mask extends Submenu {
    constructor(subMenuElement, {iconStyle, menuBarPosition}) {
        super(subMenuElement, {
            name: 'mask',
            iconStyle,
            menuBarPosition,
            templateHtml
        });

        this._els = {
            applyButton: this.selector('#tie-mask-apply'),
            maskImageButton: this.selector('#tie-mask-image-file'),
            background1: this.selector('#background1'),
            background2: this.selector('#background2'),
            background3: this.selector('#background3'),
            background4: this.selector('#background4')
        };
        // this.setBorder('#background1');
    }

    addEvent(actions, bigActions) {
        this.actions = actions;
        // const self = this;
        this.bigActions = bigActions;
        // this._els.maskImageButton.addEventListener('click', () => {
        //     bigActions.main.setTypeIconOrBackground();
        // });
        this._els.maskImageButton.addEventListener('change', this._loadMaskFile.bind(this));
        // this._els.applyButton.addEventListener('click', event => {
        //     console.log(event);
        //     _mainAction.loadImageTemplate('http://localhost:8080/examples/img/sampleImage.jpg');
        // });
    }

    addEventChooseImage(actions) {
        // this.actions = actions;
        // const self = this;
        // this._els.maskImageButton.addEventListener('change', this._loadMaskFile.bind(this));
        this._els.background1.addEventListener('click', () => {
            actions.main.loadImageTemplate('http://localhost:8080/src/image/background.jpg');
            this.removeAllBorder();
            this.setBorder('#background1');
            actions.main.setElementTemplate1();
        });
        this._els.background2.addEventListener('click', () => {
            actions.main.loadImageTemplate('http://localhost:8080/src/image/background2.jpg');
            this.removeAllBorder();
            this.setBorder('#background2');
        });
        this._els.background3.addEventListener('click', () => {
            actions.main.loadImageTemplate('http://localhost:8080/src/image/background3.jpg');
            this.removeAllBorder();
            this.setBorder('#background3');
        });
        this._els.background4.addEventListener('click', () => {
            actions.main.loadImageTemplate('http://localhost:8080/src/image/background4.jpg');
            this.removeAllBorder();
            this.setBorder('#background4');
        });
    }

    setBorder(id) {
        this.selector(id).style.border = '1.5px solid rgb(187, 187, 187)';
    }

    removeAllBorder() {
        this.selector('#background1').style.border = 'none';
        this.selector('#background2').style.border = 'none';
        this.selector('#background3').style.border = 'none';
        this.selector('#background4').style.border = 'none';
    }

    /**
     * Apply mask
     * @private
     */
    _applyMask() {
        this.actions.applyFilter();
        this._els.applyButton.classList.remove('active');
    }

    /**
     * Load mask file
     * @param {object} event - File change event object
     * @private
     */
    _loadMaskFile(event) {
        let imgUrl;

        if (!util.isSupportFileApi()) {
            alert('This browser does not support file-api');
        }

        const [file] = event.target.files;

        if (file) {
            imgUrl = URL.createObjectURL(file);
            // this.actions.setTypeIconOrBackground(1);
            this.actions.loadImageFromURL(imgUrl, file);
            // this._els.applyButton.classList.add('active');
        }
    }
}

export default Mask;
