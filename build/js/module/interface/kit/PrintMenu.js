define(["require","exports","module","thirdLib/mustache.min","text!../../../../html/MenuItem.html"],function(e,t){"use strict";function i(){return{itemID:"printMenu",itemContent:"print",itemChildrens:n.render(r,{menuItems:[{itemID:"addSupportButton",itemContent:"addSupport"},{itemID:"removeSupportButton",itemContent:"removeSupport"},{itemID:"printModelButton",itemContent:"printModel"}]})}}var n=e("thirdLib/mustache.min"),r=e("text!../../../../html/MenuItem.html");t.getMenuContent=i});