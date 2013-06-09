Slides.zachary_morgan_timefuture = new Slide();

Slides.zachary_morgan_timefuture.Load = function () {
	var d = $.Deferred();

    $("#svgcontainer").svg(function (svg) {

        Slides.zachary_morgan_timefuture.svg = svg;

        var svgsToLoad = [];

        svgsToLoad.push(LoadSvg(svg, "/slides/resources/morgan_damagedearth1.svg"));
        svgsToLoad.push(LoadSvg(svg, "/slides/resources/morgan_damagedearth2.svg"));
        svgsToLoad.push(LoadSvg(svg, "/slides/resources/morgan_damagedearth3.svg"));
        svgsToLoad.push(LoadSvg(svg, "/slides/resources/morgan_damagedearth4.svg"));
        svgsToLoad.push(LoadSvg(svg, "/slides/resources/morgan_teleflash.sbg"));
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
    var wearth = $("g#broken_earth");
    var topBit = $("g#earth_bit_top");
    var midBit = $("g#earth_bit_mid");
    var bottomBit = $("g#earth_bit_bottom");
    var flash = $("g#tele_flash");
    var traveler = $("g#time_traveler");
	
    wearth.attr("opacity", "1");
    topBit.attr("opacity", "1");
    midBit.attr("opacity", "1");
    bottomBit.attr("opacity", "1");
    flash.attr("opacity", "0");
    traveler.attr("opacity", "0");

    wearth.attr("transform", "translate(400,1500) scale(5,5)");
    topBit.attr("transform", "translate(200,-850) scale(5,5)");
    midBit.attr("transform", "translate(-400,150) scale(5,5)");
    bottomBit.attr("transform", "translate(-650,250) scale(5,5)");

    //topBit.animate({ svgTransform: "rotate(5)" }, 1500);

    wearth.animate({ svgTransform: "translate(550,400) scale(0.75,0.75)" }, 7000);
    topBit.animate({ svgTransform: "translate(400,150) scale(0.75,0.75)" }, 7000);
    midBit.animate({ svgTransform: "translate(280,275) scale(0.75,0.75)" }, 7000);
    bottomBit.animate({ svgTransform: "translate(225,450) scale(0.75,0.75)" }, 7000);

    //flash.attr("transform", "translate(200,500)");
    //flash.animate({ svgTransform: "opacity(1)" }, 200);
    
};

Slides.zachary_morgan_timefuture.Hide = function () {
    return $("figure").fadeOut().promise();
};

