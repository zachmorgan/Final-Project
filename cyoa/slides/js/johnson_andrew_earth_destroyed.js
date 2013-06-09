
Slides.johnson_andrew_earth_destroyed = new Slide();

var SVG = null;

Slides.johnson_andrew_earth_destroyed.Load = function () {

    var d = $.Deferred();

    //Make sure to add <div id="svgcontainer"></div> 
    $("#svgcontainer").svg(function (svg) {

        var svgsToLoad = [];
        SVG = svg;
        svgsToLoad.push(LoadSvg(svg, "/slides/resources/johnson_andrew_earth_broken.svg"));
        svgsToLoad.push(LoadSvg(svg, "/slides/resources/johnson_andrew_boom.svg"));
       

        $.when.apply($, svgsToLoad).done(function () {
            d.resolve();
        });
    });

    return d.promise();
};

Slides.johnson_andrew_earth_destroyed.Unload = function () {

};

Slides.johnson_andrew_earth_destroyed.Show = function () {

    SVG.configure({ viewBox: "0 0 1000 800" })
    var d = $.Deferred();

    var boom = $("g#boom");
    var earth01 = $("g#earth01");
    var earth02 = $("g#earth02");
    var earth03 = $("g#earth03");
    var earth04 = $("g#earth04");
    var earth = $("g#earth01, g#earth02, g#earth03, g#earth04");
    var i = -1;
    var z = -1;
    

    earth.attr("transform", "translate(1000,1000)");

    boom.remove();
    
    while ( ++i < 5 ) {
        earth.animate( { svgTransform: 'translate(30 40)' }, 50);            
        earth.animate( { svgTransform: 'translate(-30 -20)' }, 50);
        earth.animate({ svgTransform: 'translate(20 -20)' }, 100, function () {
            var boomPromises = [];

            for (var i = 0; i < 10; i++) {

                var c = boom.clone();

                c.attr("opacity", "1");
                c.attr("transform", "translate(550,500)");

                c.appendTo($("svg"));

                var rX = (Math.random() * 1000);
                var rY = (Math.random() * 1000);

                var transform = "translate({x},{y}) rotate({r}) scale({sX},{sY})".supplant({ x: rX, y: rY, r: 360 * Math.random(), sX: .3, sY: .3 });

                var promise = c.animate({ svgTransform: transform, svgOpacity: "0" }, 1000 * ((Math.random() * 5) + 2)).promise();

                boomPromises.push(promise);
            }

            boom.remove();

            d.resolve();
        });
    };

    earth01.animate( { svgTransform: 'rotate(500 100 75) translate(500 30)' }, 900);
    earth02.animate( { svgTransform: 'rotate(500 130 75) translate(500 30)' }, 2000);
    earth03.animate( { svgTransform: 'rotate(600 20 75) translate(500 30)' }, 2000);
    earth04.animate( { svgTransform: 'rotate(600 5 100) translate(800 30)' }, 2000);

    

    return d.promise();
};

Slides.johnson_andrew_earth_destroyed.Hide = function () {
    return $("figure").fadeOut().promise();
};

