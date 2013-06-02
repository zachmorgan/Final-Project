
Slides.johnson_andrew_earth_destroyed = new Slide();

Slides.johnson_andrew_earth_destroyed.Load = function () {

    var d = $.Deferred();

    //Make sure to add <div id="svgcontainer"></div> 
    $("#svgcontainer").svg(function (svg) {

        var svgsToLoad = [];

        svgsToLoad.push(LoadSvg(svg, "/slides/resources/andrew_earth_broken.svg"));

        $.when.apply($, svgsToLoad).done(function () {
            d.resolve();
        });
    });

    return d.promise();
};

Slides.johnson_andrew_earth_destroyed.Unload = function () {

};

Slides.johnson_andrew_earth_destroyed.Show = function () {
    var d = $.Deferred();

    var earth01 = $("g#earth01");
    var earth02 = $("g#earth02");
    var earth03 = $("g#earth03");
    var earth04 = $("g#earth04");

    earth01.animate(
            {                
                svgTransform: 'rotate(100 100 75) translate(500 30)'
            }, 2000);
    earth02.animate(
        {
            svgTransform: 'rotate(51 330 75) translate(500 30)'
        }, 2000);
    earth03.animate(
        {
            svgTransform: 'rotate(600 20 75) translate(500 30)'
        }, 2000);
    earth04.animate(
        {
            svgTransform: 'rotate(900 5 100) translate(800 30)'
        }, 2000);
   

    d.resolve();
    return d.promise();
};

Slides.johnson_andrew_earth_destroyed.Hide = function () {
    return $("figure").fadeOut().promise();
};

