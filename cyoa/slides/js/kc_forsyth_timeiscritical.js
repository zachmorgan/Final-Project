
Slides.kc_forsyth_timeiscritical = new Slide();

Slides.kc_forsyth_timeiscritical.Load = function () {

    var d = $.Deferred();

    //Make sure to add <div id="svgcontainer"></div> 
    $("#svgcontainer").svg(function (svg) {

        var svgsToLoad = [];

        svgsToLoad.push(LoadSvg(svg, "/slides/resources/kc_forsyth_man1.svg"));
        svgsToLoad.push(LoadSvg(svg, "/slides/resources/kc_forsyth_man2.svg"));
        svgsToLoad.push(LoadSvg(svg, "/slides/resources/kc_forsyth_man3.svg"));
        svgsToLoad.push(LoadSvg(svg, "/slides/resources/kc_forsyth_man4.svg"));
        svgsToLoad.push(LoadSvg(svg, "/slides/resources/kc_forsyth_banner.svg"));

        $.when.apply($, svgsToLoad).done(function () {
            d.resolve();
        });
    });

    return d.promise();
};

Slides.kc_forsyth_timeiscritical.Unload = function () {
};

Slides.kc_forsyth_timeiscritical.Show = function () {
    var d = $.Deferred();

    

    d.resolve();
    return d.promise();
};

Slides.kc_forsyth_timeiscritical.Hide = function () {
    return $("figure").fadeOut().promise();
};

