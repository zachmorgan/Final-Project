
Slides.start = new Slide();
var SVG = null;
Slides.start.Load = function () {

    var d = $.Deferred();

    //Make sure to add <div id="svgcontainer"></div> 
    $("#svgcontainer").svg(function (svg) {
        var svgsToLoad = [];

        SVG = svg;

        svgsToLoad.push(LoadSvg(svg, "/slides/resources/price_person.svg"));

        $.when.apply($, svgsToLoad).done(function () {
            d.resolve();
        });
    });

    return d.promise();
};

Slides.start.Unload = function() {
 
};

Slides.start.Show = function () {
    SVG.configure({ viewBox: "0 0 620 460" });

    var director = $("g#person").detach();

    var door = SVG.rect(20, 0, 90, 120,
    { fill: '#b3b3b3', stroke: '#b3b3b3', strokeWidth: 5 });

    var room = SVG.rect(220, 150, 400, 240,
    { fill: '#b3b3b3', stroke: '#b3b3b3', strokeWidth: 5 });

    var room = SVG.rect(220, 150, 400, 240,
    { fill: '#b3b3b3', stroke: '#b3b3b3', strokeWidth: 5 });

    var room = SVG.rect(220, 150, 400, 240,
    { fill: '#b3b3b3', stroke: '#b3b3b3', strokeWidth: 5 });

    var room = SVG.rect(220, 150, 400, 240,
    { fill: '#b3b3b3', stroke: '#b3b3b3', strokeWidth: 5 });

    director.attr("opacity", "1");
    director.animate({ svgFill: "#fff" }, 2000);
    director.appendTo($("svg"));
};

Slides.start.Hide = function () {
   
};

