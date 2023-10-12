/**
* highlight sidebar links based on what hash links are visible
*
/ creative commons zero license
**/

(function () {
  
  var links = jQuery('.sidebar a');
  var hrefs = [];
  var targets = [];
  var viewportHeight = 600;
  var threshold = 150;

  function getAnchorPositions(){
    viewportHeight = jQuery(window).height();
    links.each(function(){
      var href = jQuery(this).attr('href');
      var target = jQuery(href);
      if(target.length === 0){
        jQuery(this).hide();
      }
      else{
        hrefs.push(href);
        var t = {};
        t.element = target;
        t.position = target.position();
        t.height = target.height();
        t.link = jQuery(this);
        targets.push(t);
      }
    });
  }
  
  function highlightLinks(){
    
    var headerHeight = jQuery('header').height();
    var scrollTop = jQuery(this).scrollTop();
    for(var i=0; i<targets.length; i++){
      if(
        // is the top of the element above the bottom of the viewport?  
        (targets[i].position.top + threshold < scrollTop + viewportHeight) &&
        // is the bottom of the element below the top of the viewport?
        (targets[i].position.top + targets[i].height > scrollTop + headerHeight)
        )
      {
        targets[i].link.addClass('viewing');
      }else{
        targets[i].link.removeClass('viewing');
      }
    }
  }
  
  jQuery(document).ready(function(){
    getAnchorPositions();
    highlightLinks();
  });
  
  jQuery(window).resize(function(){
    getAnchorPositions();
    highlightLinks();
  });

  jQuery(window).scroll(function () {
    highlightLinks();
  });

})();
