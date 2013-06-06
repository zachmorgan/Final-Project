// jameson_nuss_time


Slides.jameson_nuss_time = new Slide();

Slides.jameson_nuss_time.Load = function () {

    var d = $.Deferred();

    //Make sure to add <div id="svgcontainer"></div> 
    $("#svgcontainer").svg(function (svg) {

        var svgsToLoad = [];

        //svgsToLoad.push(LoadSvg(svg, "/slides/resources/jameson_nuss_shuttle_space.svg"));
        svgsToLoad.push(LoadSvg(svg, "/slides/resources/jameson_nuss_shuttle_takeoff.svg"));
        //svgsToLoad.push(LoadSvg(svg, "/slides/resources/jameson_nuss_satellite.svg"));


        $.when.apply($, svgsToLoad).done(function () {
            d.resolve();
        });
    });

    return d.promise();
};

Slides.jameson_nuss_time.Unload = function () {
};

Slides.jameson_nuss_time.Show = function () {
    var d = $.Deferred();
    $("svg").attr("overflow", "hidden");


    var shuttletakeoff = $("g#takeoff").detach().appendTo("svg");
    //var glob = $("g#Greenglob");
    //var outline = $("g#Outline").detach().appendTo("svg");
    //var caution = $("g#Tape").detach().appendTo("svg");
    //var rushtext = $("g#rushtext").detach().appendTo("svg");



    shuttletakeoff.attr("transform", "translate(400,230) scale(1,1)");


    d.resolve();
    return d.promise();

};

Slides.jameson_nuss_time.Hide = function () {
    return $("figure").fadeOut().promise();
};

