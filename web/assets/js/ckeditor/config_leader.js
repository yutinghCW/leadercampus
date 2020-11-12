/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.stylesSet.add('styles_leader', [
    // Block-level styles.
    //{name: '內文重點段落', element: 'div', attributes: {'class': 'content-focus'}}
    // Inline styles.
    {name: '內文重點文字', element: 'span', attributes: {'class': 'content-focus'}}
    //{name: 'Marker: Yellow', element: 'span', styles: {'background-color': 'Yellow'}}
]);
CKEDITOR.addTemplates("quota", {templates: [
        {title: "引言", html: '<div class="sentences2"><span>這是引言</span></div>'},
        {title: "中標題", html: '<h3>這是中標題</h3>'},
        {title: "小標題", html: '<h4>這是小標題</h4>'}
    ]});
CKEDITOR.editorConfig = function (config) {

    config.toolbarGroups = [
        {name: 'document', groups: ['mode', 'document', 'doctools']},
        {name: 'clipboard', groups: ['clipboard', 'undo']},
        {name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing']},
        {name: 'forms', groups: ['forms']},
        '/',
        {name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
        {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph']},
        {name: 'links', groups: ['links']},
        {name: 'insert', groups: ['insert']},
        {name: 'youtube', groups: ['youtube']},
        '/',
        {name: 'styles', groups: ['styles']},
        {name: 'colors', groups: ['colors']},
        {name: 'tools', groups: ['tools']},
        {name: 'others', groups: ['others']},
        {name: 'about', groups: ['about']}
    ];

    config.removeButtons = 'Print,Preview,NewPage,Save,Find,Replace,SelectAll,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,CreateDiv,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock,BidiLtr,BidiRtl,Language,Flash,Smiley,PageBreak,Iframe,Font,FontSize,TextColor,BGColor,ShowBlocks';


    // Set the most common block elements.
    config.format_tags = 'p;h1;h2;h3;h4;h5;h6';
    //config.enterMode = CKEDITOR.ENTER_P;
    //config.shiftEnterMode = CKEDITOR.ENTER_BR;

    // Simplify the dialog windows.
    config.removeDialogTabs = 'image:advanced;link:advanced';
    config.extraPlugins = 'youtube';
    config.allowedContent = true;
    config.extraAllowedContent = 'iframe[*];div(*)';
    config.stylesSet = 'styles_leader';
    config.contentsCss = ['/assets/css/layout.css', '/assets/css/lesson.css', '/assets/css/course-content.css'];
    config.templates = 'quota';
    config.templates_replaceContent = false;
    config.bodyClass = 'lesson course-content';
    config.skin = 'moono';
};
