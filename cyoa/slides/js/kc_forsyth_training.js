
Slides.kc_forsyth_training = new Slide();

var SVG = null;

Slides.kc_forsyth_training.Load = function () {

    var d = $.Deferred();

    //Make sure to add <div id="svgcontainer"></div> 
    $("#svgcontainer").svg(function (svg) {

        var svgsToLoad = [];

        SVG = svg;

        svgsToLoad.push(LoadSvg(svg, "slides/resources/kc_forsyth_man1.svg"));
        svgsToLoad.push(LoadSvg(svg, "slides/resources/kc_forsyth_man2.svg"));
        svgsToLoad.push(LoadSvg(svg, "slides/resources/kc_forsyth_man3.svg"));
        svgsToLoad.push(LoadSvg(svg, "slides/resources/kc_forsyth_man4.svg"));
        svgsToLoad.push(LoadSvg(svg, "slides/resources/kc_forsyth_banner.svg"));

        $.when.apply($, svgsToLoad).done(function () {
            d.resolve();
        });
    });

    return d.promise();
};

Slides.kc_forsyth_training.Unload = function () {
};

Slides.kc_forsyth_training.Show = function () {

    SVG.configure({ viewBox: "0 0 620 460" })

    //animations

    var i = i++

    var dude1 = $("g#man1");
    var dude2 = $("g#man2");
    var dude3 = $("g#man3");
    var dude4 = $("g#man4");
    var schoolBanner = $("g#banner");

    dude1.attr("transform", "translate(80 , 270) scale(1.1, 1.1)");
    dude2.attr("transform", "translate(200 , 240) scale(1.1, 1.1)");
    dude3.attr("transform", "translate(320 , 270) scale(1.1, 1.1)");
    dude4.attr("transform", "translate(440 , 240) scale(1.1, 1.1)");
    schoolBanner.attr("transform", "translate(0 , 50) scale(1.29, 1)");
    
    function jumpingjacks(){
        dude1.animate({ svgTransform: 'translate(80 230)' }, 1000);
        dude2.animate({ svgTransform: 'translate(200 270)' }, 1000);
        dude3.animate({ svgTransform: 'translate(320 260)' }, 1000);
        dude4.animate({ svgTransform: 'translate(440 270)' }, 1000);

        dude1.animate({ svgTransform: 'translate(80 270)' }, 1000);
        dude2.animate({ svgTransform: 'translate(200 240)' }, 1000);
        dude3.animate({ svgTransform: 'translate(320 270)' }, 1000);
        dude4.animate({ svgTransform: 'translate(440 240)' }, 1000);
    }

    jumpingjacks();
    jumpingjacks();
    jumpingjacks();
    jumpingjacks();
    jumpingjacks();
    jumpingjacks();
  

    d.resolve();
    return d.promise();
};

Slides.kc_forsyth_training.Hide = function () {
    return $("figure").fadeOut().promise();
};

