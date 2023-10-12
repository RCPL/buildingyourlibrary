var thingstoFix = jQuery('.fixed-aspect-ratio');

function resizeFixedAspectRatios(){
	for(var i=0; i<thingstoFix.length; i++){
		var Aw = thingstoFix[i].dataset.width || 16;
		var Ah = thingstoFix[i].dataset.height || 9;
		var Bw = thingstoFix[i].offsetWidth;
		var new_height = Bw / Aw * Ah;
		thingstoFix[i].style.height = new_height + 'px';
	}
}

resizeFixedAspectRatios();

window.addEventListener('resize', resizeFixedAspectRatios,false);
