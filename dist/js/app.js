function initRobotUI(){stage=new createjs.Stage("canvas1");var e=new createjs.Shape;e.graphics.beginFill("#000").drawCircle(300,100,45);var t=new createjs.Shape;t.graphics.beginFill("#000").drawCircle(500,100,45);var n=new createjs.Shape;n.graphics.setStrokeStyle(10,"round","round"),n.graphics.beginStroke("#000"),n.graphics.beginFill("#FC0"),n.graphics.beginFill(),n.graphics.arc(200,0,200,0,Math.PI),n.x=200,n.y=250,stage.addChild(n,e,t),createjs.Tween.get(e,{loop:!0}).wait(3e3).to({alpha:0}).wait(50).to({alpha:1},50,createjs.Ease.bounceOut),createjs.Tween.get(t,{loop:!0}).wait(3e3).to({alpha:0}).wait(50).to({alpha:1},50,createjs.Ease.bounceOut)}function speak(){createjs.Ticker.setFPS(20),createjs.Ticker.addEventListener("tick",stage),meSpeak.loadConfig("mespeak_config.json"),meSpeak.loadVoice("es.json");if(annyang){var e={"hola me llamo *Alberto":function(e){var t=new createjs.Shape;t.graphics.beginFill("#000").drawCircle(300,100,45),createjs.Ticker.setFPS(20),createjs.Ticker.addEventListener("tick",stage),stage.addChild(g,t),meSpeak.speak("hola que tal?   "+e)},hello:function(){var e=new createjs.Shape;e.graphics.beginFill("#fff").drawCircle(300,100,45),createjs.Ticker.setFPS(20),createjs.Ticker.addEventListener("tick",stage),stage.addChild(g,e),meSpeak.speak("perdon")}};annyang.addCommands(e),annyang.start()}}function initMedia(){var e="SWCanvasPlayer";$("<canvas>").attr({id:e}).css({width:"100%",height:"100%"}).appendTo("#container"),$("#SWCanvasPlayer").addClass("baseCanvas");var t,n,r=$("#SWCanvasPlayer")[0];t=new createjs.Stage(r),$("#container").show(),createjs.Ticker.setFPS(32),createjs.Ticker.addEventListener("tick",t),t.enableMouseOver(10);var i=290,s=40,o=590,u=240,a=o-i,f=u-s,l=null,c="https://media.w3.org/2010/05/sintel/trailer.mp4";l=createDOMElementVideo(a,f,c),l.x=i,l.y=s,t.addChild(l),t.update()}function createDOMElementVideo(e,t,n){var r="#container",i=$(r)[0];if(!i){var s="SWElementVideo.prototype.createDOMElementVideo:: Attempting to add a new video element to the DOM, however, unable to find specified DOM parent element ["+r+"] ";return null}var o=document.createElement("video");o.src=n,o.hidden=!1,o.width=e,o.height=t,o.volume=.6,o.controls=!0;var u=this;o.addEventListener("error",function(e){var t="Error::SWElementVideo:: Error loading video element, event.type ["+e.type+"] Media Details: ["+e.target.src+"]";console.log(t)}),o.play(),i.appendChild(o);var a=new createjs.DOMElement(o);return a}define("app/main",["jquery"],function(e){e(function(){var t={init:function(){e("h1").append(" : jquery DOM loaded"),initRobotUI(),speak()}};t.init()})}),requirejs.config({baseUrl:"/js/",paths:{app:"app",jquery:["vendor/jquery.min"]}}),requirejs(["app/main"]),define("app",function(){});