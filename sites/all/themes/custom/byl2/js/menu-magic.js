// hide sticky menu when scrolling down
// show sticky menu when scrolling up
// no animation necessary

// creative commons zero license

// made vanilla from the following
//var lastScrollTop = 0;
//
//$(window).scroll(function () {
//
//var st = $(this).scrollTop();
//    if (st < lastScrollTop){
//        $('.navbar ').slideDown();
//    } else {
//      $('.navbar ').slideUp();
//    }
//    lastScrollTop = st;
//});

//var menu = document.getElementById('menu');

/*
var previousScrollY = window.scollY;

window.onscroll = function(event){
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

    if( top > previousScrollY || top < 150){
        menu.classList.add('hidden');
        menuOptions.classList.add('hidden');
    }else{
        menu.classList.remove('hidden');
    }
    previousScrollY = top;
};
*/
var menuOptions = document.getElementById('findYourLibrary_menu');
function toggleMenuOptions(){
    jQuery(menuOptions).toggleClass('hidden');
//    if(menuOptions.classList.contains('hidden')){
//        menuOptions.classList.remove('hidden');
//    }else{
//        menuOptions.classList.add('hidden');
//    }
}

function toggleMobileMenu(){
    jQuery('#mobileOpen').toggleClass('hidden');
    jQuery('#mobileClose').toggleClass('hidden');
    jQuery('header').toggleClass('open');
}
