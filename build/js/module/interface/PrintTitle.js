define(["require","exports","module","lib/CommonUtil","module/interface/kit/PrintMenu","module/GlobalVar"],function(e,t){"use strict";function s(){return r.getMenuContent()}function o(){var e=i.touchSensorManager;document.getElementById("addSupportButton").addEventListener("click",function(t){e.setStatus(e.STATUS_PRINT_CUSTOM.ADD_SUPPORT)}),document.getElementById("removeSupportButton").addEventListener("click",function(t){e.setStatus(e.STATUS_PRINT_CUSTOM.REMOVE_SUPPORT)})}var n=e("lib/CommonUtil"),r=e("module/interface/kit/PrintMenu"),i=e("module/GlobalVar");t.getMenuContent=s,t.bindEvent=o});