requirejs.config({baseUrl:"js/",paths:{text:"thirdLib/requirejs/text",MainFrame:"module/MainFrame",THREE:"thirdLib/threejs/Three.min"},shim:{THREE:{exports:"THREE"}}}),define(["require","module/Context","module/CssJsLoader","thirdLib/threejs/Detector"],function(e){"use strict";function s(){var e=["css/pure-min.css","css/grids-min.css","css/menus-min.css","css/grids-responsive-min.css"];e.forEach(function(e){n.loadCssFile(t.getServerUrl()+e)})}var t=e("module/Context"),n=e("module/CssJsLoader"),r=e("thirdLib/threejs/Detector"),i=null;e(["MainFrame"],function(e){r.webgl||r.addGetWebGLMessage();try{i=new e}catch(t){console.error(t)}s()}),window.onbeforeunload=function(){return"Are you sure want to exit"},window.onresize=function(){null!==i&&i.onWindowResize()}});