function setRem(){document.documentElement.style.fontSize=innerWidth/20+"px"}setRem(),onresize=setRem;for(var i=0,arrDiv=document.querySelectorAll("footer div"),divLen=arrDiv.length;i<divLen;)arrDiv[i].addEventListener("touchstart",function(){console.log("touchstart")},1),arrDiv[i].addEventListener("touchmove",function(){console.log("touchmove")},1),arrDiv[i].addEventListener("touchend",function(){console.log("touchend")},1),i++;