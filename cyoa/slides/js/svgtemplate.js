
Slides.svgtemplate = new Slide();

Slides.svgtemplate.Load = function () {

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

Slides.svgtemplate.Unload = function () {
};

Slides.svgtemplate.Show = function () {
    var d = $.Deferred();
    d.resolve();
    return d.promise();
};

Slides.svgtemplate.Hide = function () {
    return $("figure").fadeOut().promise();
};

