export default ({biImage, commonStyle, headerStyle, loadButtonStyle, downloadButtonStyle, submenuStyle}) => (`
    <div class="tui-image-editor-main-container" style="${commonStyle}">
        <div class="tui-image-editor-header" style="${headerStyle}">
            <div class="tui-image-editor-header-logo">
                <img src="${biImage}" />
            </div>
            
            <div class="tui-image-editor-header-buttons">
                <button style="${loadButtonStyle}">
                    Load
                    <input type="file" class="tui-image-editor-load-btn" />
                </button>
                <button class="tui-image-editor-download-btn" style="${downloadButtonStyle}">
                    Download
                </button>
            </div>
            <svg class="svg_ic-menu tui-image-editor-plus-size" style="margin: 13px; float: right">
                    <use xlink:href="../dist/svg/icon-a.svg#icon-a-plus-solid" class="normal"></use>
                    <!--<use xlink:href="../dist/svg/icon-b.svg#icon-b-plus-solid" class="hover"></use>-->
                    <!--<use xlink:href="../dist/svg/icon-c.svg#icon-c-plus-solid" class="hover"></use>-->
            </svg>
            <svg class="svg_ic-menu tui-image-editor-minus-size" style="margin: 13px; float: right">
                    <use xlink:href="../dist/svg/icon-a.svg#icon-a-minus-solid" class="normal"></use>
                    <!--<use xlink:href="../dist/svg/icon-c.svg#icon-c-plus-solid" class="hover"></use>-->
            </svg>
        </div>
        <div class="tui-image-editor-main">
            <div class="tui-image-editor-submenu">
                <div class="tui-image-editor-submenu-style" style="${submenuStyle}"></div>
            </div>
            <div class="tui-image-editor-wrap">
                <div class="tui-image-editor-size-wrap">
                    <div class="tui-image-editor-align-wrap">
                        <div class="tui-image-editor"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`);
