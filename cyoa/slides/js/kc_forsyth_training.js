
Slides.kc_forsyth_training = new Slide();

Slides.kc_forsyth_training.Load = function () {

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

Slides.kc_forsyth_training.Unload = function () {
};

Slides.kc_forsyth_training.Show = function () {
    var d = $.Deferred();
    d.resolve();
    return d.promise();
};

Slides.kc_forsyth_training.Hide = function () {
    return $("figure").fadeOut().promise();
};

