/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.stylesSet.add('styles_cw', [
    // Block-level styles.
    //{name: 'Blue Title', element: 'h2', styles: {color: 'Blue'}},
    // Inline styles.
    {name: '圖說', element: 'span', attributes: {'class': 'source'}},
    {name: '內文圖片', element: 'p', attributes: {'class': 'article-header'}},
    {name: '內文影音', element: 'div', attributes: {'class': 'video-container'}}
    //{name: 'Marker: Yellow', element: 'span', styles: {'background-color': 'Yellow'}}
]);
CKEDITOR.editorConfig = function (config) {
    // Define changes to default configuration here.
    // For complete reference see:
    // http://docs.ckeditor.com/#!/api/CKEDITOR.config

    // The toolbar groups arrangement, optimized for two toolbar rows.
    config.toolbarGroups = [
        {name: 'clipboard', groups: ['clipboard', 'undo']},
        {name: 'editing', groups: ['find', 'selection', 'spellchecker']},
        {name: 'links'},
        {name: 'insert'},
        {name: 'forms'},
        {name: 'tools'},
        {name: 'document', groups: ['mode', 'document', 'doctools']},
        {name: 'others'},
        '/',
        {name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
        {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi']},
        {name: 'styles'},
        {name: 'colors'},
        {name: 'about'}
    ];

    config.toolbar_Full = [
        ['Source', '-', 'Save', 'NewPage', 'Preview', '-', 'Templates'],
        ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Print', 'SpellChecker', 'Scayt'],
        ['Undo', 'Redo', '-', 'Find', 'Replace', '-', 'SelectAll', 'RemoveFormat'],
        ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'],
        '/',
        ['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript'],
        ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote'],
        ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
        ['Link', 'Unlink', 'Anchor'],
        ['Image', 'Youtube', 'Table', 'HorizontalRule', 'SpecialChar'],
        '/',
        ['Styles', 'Format', 'Font', 'FontSize'],
        ['TextColor', 'BGColor']
    ],
            // Remove some buttons provided by the standard plugins, which are
            // not needed in the Standard(s) toolbar.
            config.removeButtons = 'Underline,Subscript,Superscript';

    // Set the most common block elements.
    config.format_tags = 'p;h1;h2;h3;pre';
    //config.enterMode = CKEDITOR.ENTER_P;
    //config.shiftEnterMode = CKEDITOR.ENTER_BR;

    // Simplify the dialog windows.
    config.removeDialogTabs = 'image:advanced;link:advanced';
    config.extraPlugins = 'youtube';
    config.allowedContent = true;
    config.extraAllowedContent = 'iframe[*];div(*)';
    config.stylesSet = 'styles_cw';
    ///config.contentsCss = ['http://www.cw.com.tw/assets_new/css/normalize.css', 'http://www.cw.com.tw/assets_new/css/main.css'];
};
