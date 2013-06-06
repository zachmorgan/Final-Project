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
    $("svg").attr("overflow", "hidden");

    var barrel = $("g#Barrel").detach().appendTo("svg");
    var glob = $("g#Greenglob");
    var outline = $("g#Outline").detach().appendTo("svg");
    var caution = $("g#Tape").detach().appendTo("svg");




    barrel.attr("transform", "translate(200,230) scale(2,2)");
    glob.attr("opacity", 0.3);
    outline.attr("transform", "translate(550,330) scale(1.5,1.5)");
    caution.attr("transform", "translate(200,430) scale(2,1.5)");



    function glow() {
        glob.animate({ svgOpacity: 0.3 }, 2000).animate({ svgOpacity: 1 }, 2000, glow);
    }

    glow();


    d.resolve();
    return d.promise();

};

Slides.jameson_nuss_accident.Hide = function () {
    return $("figure").fadeOut().promise();
};

