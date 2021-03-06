﻿
Slides.kay_enojado_still_too_late = new Slide();

 
var SVG = null;

Slides.kay_enojado_still_too_late.Load = function () {
    var d = $.Deferred();

    //Make sure to add <div id="svgcontainer"></div> 
    $("#svgcontainer").svg(function (svg) {

        var svgsToLoad = [];
        
        SVG = svg;

        svgsToLoad.push(LoadSvg(svg, '/slides/resources/kay_enojado_earth.svg'));
        svgsToLoad.push(LoadSvg(svg, '/slides/resources/kay_enojado_earth_exploding.svg'));
        svgsToLoad.push(LoadSvg(svg, '/slides/resources/kay_enojado_mission_failed.svg'));
        svgsToLoad.push(LoadSvg(svg, '/slides/resources/kay_enojado_asteroid.svg'));
       

        $.when.apply($, svgsToLoad).done(function () {
            d.resolve();
        });
    });

    return d.promise();
};

Slides.kay_enojado_still_too_late.Unload = function() {
    $('audio').each(function (){
        this.pause();
    });
};

Slides.kay_enojado_still_too_late.Show = function () {

    SVG.configure({ viewBox: "0 0 950 680" })

    var earth = $("g#earth");
    var earthexploding = $("g#earthexploding");
    var missionfailed = $("g#missionfailed");
    var asteroid = $("g#asteroid");
    var myAudio = document.getElementById('boom')
    //myAudio= function () { this.play()}; 

    earth.attr("transform", "translate(480,300) scale(1.5,1.5)");
    earthexploding.attr("transform", "translate(480,300) scale(1.5,1.5)").hide();
    missionfailed.attr("transform", "translate(480,300) scale(1.5,1.5)").hide();
    asteroid.attr("transform", "translate(-100,-100) scale(1.5,1.5)");

    $('svg').append(missionfailed);

    asteroid.animate({ svgTransform: 'translate(480,300) scale(1.5,1.5)'}, 1400, function(){
        myAudio.play();
    });

    earthexploding.attr("transform", "translate(500,320) scale(1.5,1.5)").fadeIn(6000);
    earth.attr("transform", "translate(480,300) scale(1.5,1.5)").fadeOut(4000);
    asteroid.animate({ svgTransform: 'translate(480,300) scale(1.5,1.5)'}).fadeOut(500);
    missionfailed.attr("transform", "translate(480,300) scale(1.5,1.5)").fadeIn(10000);

    var d = $.Deferred();
	d.resolve();
	return d.promise();

};

Slides.kay_enojado_still_too_late.Hide = function () {
    return $("figure").fadeOut().promise();
};

