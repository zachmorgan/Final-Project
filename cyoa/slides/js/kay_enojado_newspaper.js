
Slides.kay_enojado_newspaper = new Slide();

Slides.kay_enojado_newspaper.Load = function () {
    var d = $.Deferred();

    //Make sure to add <div id="svgcontainer"></div> 
    $("#svgcontainer").svg(function (svg) {

        var svgsToLoad = [];
        svgsToLoad.push(LoadSvg(svg, '/slides/resources/kay_enojado_mission_failed.svg'));
        svgsToLoad.push(LoadSvg(svg, '/slides/resources/kay_enojado_newspaper.svg'));
       

        $.when.apply($, svgsToLoad).done(function () {
            d.resolve();
        });
    });

    return d.promise();
};

Slides.kay_enojado_newspaper.Unload = function() {
};

Slides.kay_enojado_newspaper.Show = function () {
    var missionfailed = $("g#missionfailed");
    var newspaper = $("g#newspaper");
    missionfailed.attr("transform", "translate(480,300) scale(1.5,1.5)");
    newspaper.attr("transform", "translate(480,300) scale(1.5,1.5)");

    $('svg').append(missionfailed);

    var d = $.Deferred();
	d.resolve();
	return d.promise();
};

Slides.kay_enojado_newspaper.Hide = function () {
    return $("figure").fadeOut().promise();
};



