
Slides.start = new Slide();

Slides.start.Load = function () {

    var d = $.Deferred();

    //Make sure to add <div id="svgcontainer"></div> 
    $("#svgcontainer").svg(function (svg) {

        var svgsToLoad = [];

        //svgsToLoad.push(LoadSvg(svg, "/slides/resources/price_missle01.svg"));

        $.when.apply($, svgsToLoad).done(function () {
            d.resolve();
        });
    });

    return d.promise();
};

Slides.start.Unload = function() {
 
};

Slides.start.Show = function () {
    return $("figure").fadeIn().promise();
};

Slides.start.Hide = function () {
    return $("figure").fadeOut().promise();
};

