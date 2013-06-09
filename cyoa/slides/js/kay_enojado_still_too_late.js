
Slides.kay_enojado_still_too_late = new Slide();

Slides.kay_enojado_still_too_late.Load = function () {
    var d = $.Deferred();

    //Make sure to add <div id="svgcontainer"></div> 
    $("#svgcontainer").svg(function (svg) {

        var svgsToLoad = [];
        svgsToLoad.push(LoadSvg(svg, '/slides/resources/kay_enojado_earth.svg'));
        svgsToLoad.push(LoadSvg(svg, '/slides/resources/kay_enojado_earth_exploding.svg'));
        svgsToLoad.push(LoadSvg(svg, '/slides/resources/kay_enojado_mission_failed.svg'));
       

        $.when.apply($, svgsToLoad).done(function () {
            d.resolve();
        });
    });

    return d.promise();
};

Slides.kay_enojado_still_too_late.Unload = function() {
};

Slides.kay_enojado_still_too_late.Show = function () {
    var earth = $("g#earth");
    var earthexploding = $("g#earthexploding");
    var missionfailed = $("g#missionfailed");
    earth.attr("transform", "translate(480,300) scale(1.5,1.5)");
    earthexploding.attr("transform", "translate(480,300) scale(1.5,1.5)");
    missionfailed.attr("transform", "translate(480,300) scale(1.5,1.5)");

    $('svg').append(missionfailed);

    var d = $.Deferred();
	d.resolve();
	return d.promise();
};

Slides.kay_enojado_still_too_late.Hide = function () {
    return $("figure").fadeOut().promise();
};

//this is an example of a counter but it doesn't work
/* var count = 5;
    function anim() {
    if (count > 0) {
       console.log(count);
        count--;
        setTimeout(anim, 700);
    }
    else {
        alert('end of counting')
    }
}
anim();
*/