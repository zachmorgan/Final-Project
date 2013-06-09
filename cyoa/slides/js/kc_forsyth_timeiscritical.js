
Slides.kc_forsyth_timeiscritical = new Slide();

var SVG = null;

Slides.kc_forsyth_timeiscritical.Load = function () {

    var d = $.Deferred();

    //Make sure to add <div id="svgcontainer"></div> 
    $("#svgcontainer").svg(function (svg) {

        var svgsToLoad = [];

        SVG = svg;

        svgsToLoad.push(LoadSvg(svg, "slides/resources/kc_forsyth_fatman.svg"));
        svgsToLoad.push(LoadSvg(svg, "slides/resources/kc_forsyth_fatmanEating.svg"));
        svgsToLoad.push(LoadSvg(svg, "slides/resources/kc_forsyth_bruce.svg"));

        $.when.apply($, svgsToLoad).done(function () {
            d.resolve();
        });
    });

    return d.promise();
};

Slides.kc_forsyth_timeiscritical.Unload = function () {
};

Slides.kc_forsyth_timeiscritical.Show = function () {

    SVG.configure({ viewBox: "0 0 620 460" })

    //animations

    var dude1 = $("g#fatman");
    var dude2 = $("g#fatmanEating");


    dude1.attr("transform", "translate(380 , 270) scale(1.5, 1.5)");
    dude2.attr("transform", "translate(380 , 270) scale(1.5, 1.5)");


    function dinnertime() {
        dude2.hide(0);
        dude1.show(5000);
        dude1.hide(5000);
        dude1.hide(0);

        dude2.show(5000);
        dude2.hide(5000);
    }

    dinnertime();
    dinnertime();
    dinnertime();
    dinnertime();
    dinnertime();

 

    d.resolve();
    return d.promise();
};

Slides.kc_forsyth_timeiscritical.Hide = function () {
    return $("figure").fadeOut().promise();
};

