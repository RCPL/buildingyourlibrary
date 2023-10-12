/*
* nearby.js
*/


var branchLocations = {
    ballentine: {
        address: '1200 Dutch Fork Rd, Irmo, SC 29063',
        latitude: 34.127259,
        longitude: -81.227182
    },
    blythewood: {
        address: '218 McNulty St, Blythewood, SC 29016',
        latitude: 34.216132,
        longitude: -80.976817
    },
    cooper: {
        address: '5317 N Trenholm Rd, Columbia, SC 29206',
        latitude: 34.021546,
        longitude: -80.966601
    },
    eastover: {
        address: '608 Main St, Eastover, SC 29044',
        latitude: 33.877196,
        longitude: -80.694748
    },
    edgewood: {
        address: '2101 Oak St, Columbia, SC 29204',
        latitude: 34.017926,
        longitude: -81.021301
    },
    edventure: {
        address: '211 Gervais St, Columbia, SC 29201',
        latitude: 33.997307,
        longitude: -81.048043
    },
    lowerrichland: {
        address: '9019 Garners Ferry Rd, Hopkins, SC 29061',
        latitude: 33.9452902,
        longitude: -80.8723545
    },
    main: {
        address: '1431 Assembly St, Columbia, SC 29201',
        latitude: 34.004625,
        longitude: -81.037160
    },
    northmain: {
        address: '5306 N Main St, Columbia, SC 29203',
        latitude: 34.052259,
        longitude: -81.021881
    },
    northeast: {
        address: '7490 Parklane Rd, Columbia, SC 29223',
        latitude: 34.076023,
        longitude: -80.957776
    },
    sandhills: {
        address: '763 Fashion Drive, Columbia, SC 29229',
        latitude: 34.126491,
        longitude: -80.883608
    },
    southeast: {
        address: '7421 Garners Ferry Rd, Columbia, SC 29209',
        latitude: 33.968516,
        longitude: -80.946070
    },
    standrews: {
        address: '2916 Broad River Rd, Columbia, SC 29210',
        latitude: 34.047822,
        longitude: -81.102758
    },
    wheatley: {
        address: '931 Woodrow St, Columbia, SC 29205',
        latitude: 34.002232,
        longitude: -81.005498
    }
};

if (Number.prototype.toRadians === undefined) {
    Number.prototype.toRadians = function() { return this * Math.PI / 180; };
}

function haversine(A,B){
    var R = 6371000; // metres
    var φ1 = A.latitude.toRadians();
    var φ2 = B.latitude.toRadians();
    var Δφ = (B.latitude-A.latitude).toRadians();
    var Δλ = (B.longitude-A.longitude).toRadians();

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var d = R * c;

    return d;
}

/**
 * jQuery.fn.sortElements
 * --------------
 * @param Function comparator:
 *   Exactly the same behaviour as [1,2,3].sort(comparator)
 *
 * @param Function getSortable
 *   A function that should return the element that is
 *   to be sorted. The comparator will run on the
 *   current collection, but you may want the actual
 *   resulting sort to occur on a parent or another
 *   associated element.
 *
 *   E.g. $('td').sortElements(comparator, function(){
 *      return this.parentNode;
 *   })
 *
 *   The <td>'s parent (<tr>) will be sorted instead
 *   of the <td> itself.
 */
jQuery.fn.sortElements = (function(){

    var sort = [].sort;

    return function(comparator, getSortable) {

        getSortable = getSortable || function(){return this;};

        var placements = this.map(function(){

            var sortElement = getSortable.call(this),
                parentNode = sortElement.parentNode,

                // Since the element itself will change position, we have
                // to have some way of storing its original position in
                // the DOM. The easiest way is to have a 'flag' node:
                nextSibling = parentNode.insertBefore(
                    document.createTextNode(''),
                    sortElement.nextSibling
                );

            return function() {

                if (parentNode === this) {
                    throw new Error(
                        "You can't sort elements if any one is a descendant of another."
                    );
                }

                // Insert before flag:
                parentNode.insertBefore(this, nextSibling);
                // Remove flag:
                parentNode.removeChild(nextSibling);

            };

        });

        return sort.call(this, comparator).each(function(i){
            placements[i].call(getSortable.call(this));
        });

    };

})();

window.getNearby = function(){
    if(navigator !== undefined){
        navigator.geolocation.getCurrentPosition(
            function(geoposition){
                for(key in branchLocations){
                    var $target = jQuery('#findYourLibrary_' + key);
                    var distance = haversine(geoposition.coords,branchLocations[key]);
                    jQuery($target).data('distance',distance);
                    distance *= 0.000621371192; // convert to miles
                    distance *= 10; // multiply by 100
                    distance = Math.round(distance) / 10;
                    $target.children('.distance').text(distance + 'mi');
                }

                jQuery('#findYourLibrary_menu a').sortElements(function(a, b){
                    return jQuery(a).data('distance') > jQuery(b).data('distance') ? 1 : -1;
                });
            },
            function(error){console.error(error);}
        );
    }
};
