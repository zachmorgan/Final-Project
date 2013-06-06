
Slides.kaori_price_accept = new Slide();

Slides.kaori_price_accept.Load = function () {

    var d = $.Deferred();

    //Make sure to add <div id="svgcontainer"></div> 
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
    var person = $("g#person");
    person.attr("transform", "translate(00,00) scale(0.2,0.2)");


    //for (var i = 0; i < 18; i++) {

    //    var c = person.clone();

    //    c.attr("opacity", "1");

    //    c.appendTo($("svg"));

    //    var rX = (Math.random() * 620);
    //    var rY = (Math.random() * 460);

    //    var transform = "translate({x},{y}) rotate({r}) scale({sX},{sY})".supplant({ x: rX, y: rY, r: 360 * Math.random(), sX: 1, sY: 1 });

    //    var promise = c.animate({ svgTransform: transform, svgOpacity: "0" }, 1000 * ((Math.random() * 5) + 2)).promise();

    //    smokeyPromises.push(promise);
    //}


    var d = $.Deferred();
    d.resolve();
    return d.promise();
};

Slides.kaori_price_accept.Hide = function () {
    return $("figure").fadeOut().promise();
};

