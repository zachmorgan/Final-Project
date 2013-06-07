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
        svgsToLoad.push(LoadSvg(svg, "/slides/resources/jameson_nuss_device.svg"));


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
    var lightbeam = $("g#beam");
    var travelbacktext = $("g#travelback").detach().appendTo("svg");
    var satellite = $("g#device").detach().appendTo("svg");


    travelbacktext.attr("transform", "translate(-450,230) scale(1,1)").attr("opacity", 1);
    shuttletakeoff.attr("transform", "translate(400,400) scale(1,1)").attr("opacity", 0);
    shuttlespace.attr("transform", "translate(-150,700) scale(1,1)").attr("opacity", 0);
    satellite.attr("transform", "translate(400,130) scale(1,1)").attr("opacity", 0);
    flame.attr("opacity", 0.3);
    lightbeam.attr("opacity", 0);


    shuttletakeoff.animate({ svgTransform: "translate(400,400)" }, 2000);

    travelbacktext.animate({ svgTransform: "translate(400,230)" }, 2000).delay(2000).animate({ svgOpacity: 0 }, 2000, function () {

        shuttletakeoff.animate({ svgOpacity: 1 }, 2000).animate({ svgTransform: 'translate(400,-1000)' }, function () {
            // shuttletakeoff.animate({ svgTransform: 'translate(400,-1000)' }, 3000);
            shuttlespace.animate({ svgOpacity: 1 }, 2000);
            shuttlespace.animate({ svgTransform: 'rotate(-30 700 100) translate(100,100)' }, 4000, function () {
                
                beam();

            });
            satellite.animate({ svgOpacity: 1 }, 4000);



        });



    });





    function fire() {
        flame.animate({ svgOpacity: 0.3 }, 2000).animate({ svgOpacity: 1 }, 2000, fire);
    }

    fire();


    function beam() {
        lightbeam.animate({ svgOpacity: 0.3 }, 1000).animate({ svgOpacity: 1 }, 2000, beam);
    }





    d.resolve();
    return d.promise();

};

Slides.jameson_nuss_time.Hide = function () {
    return $("figure").fadeOut().promise();
};

