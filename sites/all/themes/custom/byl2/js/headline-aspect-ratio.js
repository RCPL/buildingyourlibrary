var headline_el = document.getElementById('headline');
var headline_content_el = document.getElementById('headlineContent');

var smallWidth = 470;
var largeWidth = 1600;

function invertedAspectRatio(){
	var headlineWidth = headline_el.offsetWidth;
    var contentHeight = headline_content_el.offsetHeight;
    var lerp = (headlineWidth - smallWidth) / (largeWidth - smallWidth);
    
    var heightAddition = (1 - lerp) * 200;
    
    var newHeight = contentHeight + heightAddition + 40;
    
    headline_el.style.height = newHeight + 'px';
}

invertedAspectRatio();

window.addEventListener('resize', invertedAspectRatio,false);
