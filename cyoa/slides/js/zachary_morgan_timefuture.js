function LoadSvg(svg, url) {
    var d = $.Deferred();

    svg.load(url, function () {
        d.resolve();
    });

    return d.promise();
}

Slides.zachary_morgan_timefuture = new Slide();

Slides.zachary_morgan_timefuture.Load = function () {
	var d = $.Deferred();

    $("#svgcontainer").svg(function (svg) {

        Slides.zachary_morgan_toughdecision.svg = svg;

        var svgsToLoad = [];

        svgsToLoad.push(LoadSvg(svg, "/slides/resources/morgan_earth.svg"));
		svgsToLoad.push(LoadSvg(svg, "/slides/resources/morgan_teleflash.svg"));
		svgsToLoad.push(LoadSvg(svg, "/slides/resources/morgan_damagedearth1.svg"));
		svgsToLoad.push(LoadSvg(svg, "/slides/resources/morgan_damagedearth2.svg"));
		svgsToLoad.push(LoadSvg(svg, "/slides/resources/morgan_damagedearth3.svg"));
		svgsToLoad.push(LoadSvg(svg, "/slides/resources/morgan_damagedearth4.svg"));
		svgsToLoad.push(LoadSvg(svg, "/slides/resources/morgan_timetraveler.svg"));
		

        $.when.apply($, svgsToLoad).done(function () {
            d.resolve();
        });
    });

    return d.promise();
    $("p").hide();
};

Slides.zachary_morgan_timefuture.Unload = function() {
    $("button").unbind("click");
};

Slides.zachary_morgan_timefuture.Show = function () {
	var wearth = ("g#earth");
	
	wearth.attr("opacity", "1");
    wearth.attr("transform", "translate(310,230)");
	
    return $("figure").fadeIn().promise();
};

Slides.zachary_morgan_timefuture.Hide = function () {
    return $("figure").fadeOut().promise();
};

