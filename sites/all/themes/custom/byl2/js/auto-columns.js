var msnry = new Masonry( '.auto-columns', {
  percentPosition: true,
  columnWidth: '.auto-columns > *',
  itemSelector: '.auto-columns > *',
  gutter:50,
  transitionDuration: 0
});

jQuery(window).on('load', function() {
  msnry.layout();
});
