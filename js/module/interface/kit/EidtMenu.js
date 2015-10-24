/* global define */
define(function (require, exports) {
    'use strict';


    var Mustache = require('thirdLib/mustachejs/mustache.min'),

        MenuItemTemplate = require('text!../../../../html/MenuItem.html');

    function getEidtMenuContent() {
        return {
            itemID: 'eidtMenu',
            itemContent: 'eidt',
            itemChildrens: Mustache.render(MenuItemTemplate, {
                menuItems: [{
                    itemID: 'deleteButton',
                    itemContent: 'delete',
                }]
            })
        };
    }

    exports.getMenuContent = getEidtMenuContent;
});