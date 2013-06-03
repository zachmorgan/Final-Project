
Slides.kaori_price_accept = new Slide();

Slides.kaori_price_accept.Load = function () {

    var d = $.Deferred();

    $("#svgcontainer").svg(function (svg) {

        var svgsToLoad = [];

        svgsToLoad.push(LoadSvg(svg, "/slides/resources/price_person.svg"));

        $.when.apply($, svgsToLoad).done(function () {
            d.resolve();
        });
    });

    return d.promise();
};

Slides.kaori_price_accept.Unload = function () {
};

Slides.kaori_price_accept.Show = function () {

    //var person = $("g#person");

    //var personPromises = [];

    //for (var i = 0; i < 100; i++) {

    //    var c = person.clone();

    //    c.attr("opacity", "1");
    //    c.attr("transform", "translate(310,230)");

    //    c.appendTo($("svg"));

    //    var rX = (Math.random() * 620);
    //    var rY = (Math.random() * 460);

    //    var transform = "translate({x},{y}) rotate({r}) scale({sX},{sY})".supplant({ x: rX, y: rY, r: 360 * Math.random(), sX: 1, sY: 1 });


    //    var promise = c.animate({ svgTransform: transform, svgOpacity: "0" }, 1000 * ((Math.random() * 5) + 2)).promise();

    //    personPromises.push(promise);
    //}


    //Slides.kaori_price_person.svg.remove($("g#person")[0]);

    //$.when.apply($, personPromises).then(function () {
    //    var missile = $("g#person");

    //    for (var i = 0; i < 1000; i++) {
    //        var c = missile.clone();

    //        var start = "translate({x},{y}) rotate(45)".supplant({ x: 400 + Math.random() * 800, y: 400 + Math.random() * 400 });

    //        c.attr("transform", start);

    //        c.appendTo($("svg"));

    //        c.animate({ svgTransform: "translate({x},{y}) rotate({r})".supplant({ x: -500 + Math.random() * 400, y: -500 + Math.random() * 400, r: 25 + Math.random() * 40 }) }, 3000 + (Math.random() * 6000));
    //    }
    //    Slides.kaori_price_accept.svg.remove($("g#person")[0]);

    //});

};

Slides.kaori_price_accept.Hide = function () {
    return $("figure").fadeOut().promise();
};

