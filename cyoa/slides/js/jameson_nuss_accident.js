// jameson_nuss_accident


Slides.jameson_nuss_accident = new Slide();

Slides.jameson_nuss_accident.Load = function () {

    var d = $.Deferred();

    //Make sure to add <div id="svgcontainer"></div> 
    $("#svgcontainer").svg(function (svg) {

        var svgsToLoad = [];

        svgsToLoad.push(LoadSvg(svg, "/slides/resources/jameson_nuss_barrel.svg"));
        svgsToLoad.push(LoadSvg(svg, "/slides/resources/jameson_nuss_caution_tape.svg"));
        svgsToLoad.push(LoadSvg(svg, "/slides/resources/jameson_nuss_outline.svg"));

        $.when.apply($, svgsToLoad).done(function () {
            d.resolve();
        });
    });

    return d.promise();
};

Slides.jameson_nuss_accident.Unload = function () {
};

Slides.jameson_nuss_accident.Show = function () {
    var d = $.Deferred();

    var barrel = $("g#Barrel");
    var glob = $("g#Greenglob");

    barrel.attr("transform", "translate(500,230) scale(5,5)");

    function glow() {
        glob.animate({ svgOpacity: 0 }, 2000).animate({ svgOpacity: 1 }, 2000, glow);
    }

    glow();


    d.resolve();
    return d.promise();

};

Slides.jameson_nuss_accident.Hide = function () {
    return $("figure").fadeOut().promise();
};

