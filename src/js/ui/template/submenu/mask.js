export default () => (`
    <ul class="tui-image-editor-submenu-item" style="overflow: auto; height: 100%" id="change-scroll">
        <li>
            <img id="background1" src="assets/img/background-demo.png"
            alt="" style="width: 150px; padding: 3px">
        </li>
        <li>
            <img id="background2" src="assets/img/background2-demo.png"
            alt="" style="width: 150px; padding: 3px">
        </li>
        <li>
            <img id="background3" src="assets/img/background3.jpg" alt="" style="width: 150px; padding: 3px">
        </li>
        <li>
            <img id="background4" src="assets/img/background4.jpg" alt="" style="width: 150px; padding: 3px">
        </li>
        <li class="tui-image-editor-partition only-left-right">
            <div></div>
        </li>
        <li style="margin-bottom: 15px">
            <div class="tui-image-editor-button">
                <div>
                    <input type="file" accept="image/*" id="tie-mask-image-file">
                    <svg class="svg_ic-submenu">
                        <use xlink:href="../css/svg/icon-d.svg#icon-d-ic-mask-load" class="normal"/>
                        <use xlink:href="../css/svg/icon-c.svg#icon-c-ic-mask-load" class="active"/>
                    </svg>
                </div>
                <label> Load Image </label>
            </div>
        </li>
    </ul>
`);
