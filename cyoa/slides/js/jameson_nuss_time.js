 // jameson_nuss_time


Slides.jameson_nuss_time = new Slide();

Slides.jameson_nuss_time.Load = function () {

    var d = $.Deferred();

    //Make sure to add <div id="svgcontainer"></div> 
    $("#svgcontainer").svg(function (svg) {

        var svgsToLoad = [];

        svgsToLoad.push(LoadSvg(svg, "/slides/resources/jameson_nuss_shuttle_space.svg"));
        svgsToLoad.push(LoadSvg(svg, "/slides/resources/jameson_nuss_shuttle_takeoff.svg"));
        svgsToLoad.push(LoadSvg(svg, "/slides/resources/jameson_nuss_travelback_text.svg"));


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
    var shuttlespace = $("g#shuttlespace").detach().appendTo("svg");
    var flame = $("g#flames");
    var travelbacktext = $("g#travelback").detach().appendTo("svg");


  
    travelbacktext.attr("transform", "translate(-450,230) scale(1,1)").attr("opacity", 1);
    shuttletakeoff.attr("transform", "translate(400,400) scale(1,1)").attr("opacity", 0);
    shuttlespace.attr("transform", "translate(100,130) scale(1,1)").attr("opacity", 0);
    flame.attr("opacity", 0.3);


    shuttletakeoff.animate({ svgTransform: "translate(400,100)"},2000);

    travelbacktext.animate({ svgTransform: "translate(400,230)" }, 2000).delay(2000).animate({ svgOpacity: 0 }, 2000, function () {

        shuttletakeoff.animate({ svgOpacity: 1 }, 2000);
        shuttlespace.animate({ svgOpacity: 1 }, 2000);
       

    });


    function fire() {
        flame.animate({ svgOpacity: 0.3 }, 2000).animate({ svgOpacity: 1 }, 2000, fire);
    }

    fire();


    d.resolve();
    return d.promise();

};

Slides.jameson_nuss_time.Hide = function () {
    return $("figure").fadeOut().promise();
};

