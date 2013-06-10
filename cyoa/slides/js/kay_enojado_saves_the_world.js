Slides.kay_enojado_saves_the_world = new Slide();


Slides.kay_enojado_saves_the_world.Load = function () {
    var d = $.Deferred();

    //Make sure to add <div id="svgcontainer"></div> 
    $("#svgcontainer").svg(function (svg) {

        var svgsToLoad = [];
        
        svgsToLoad.push(LoadSvg(svg, '/slides/resources/kay_enojado_asteroid_destroyed.svg'));
        svgsToLoad.push(LoadSvg(svg, '/slides/resources/kay_enojado_saves_the_world.svg'));
       
        $.when.apply($, svgsToLoad).done(function () {
            d.resolve();
        });
    });

    return d.promise();
};

Slides.kay_enojado_saves_the_world.Unload = function() {
    //if I get the time to put in Audio, it will go here
    //$('audio').each(function (){
      //  this.pause();
    });
};

Slides.kay_enojado_saves_the_world.Show = function () {

    var asteroidboom = $("g#asteroidgoesboom");
    var worldsaved = $("g#worldissaved");
    //var myAudio = document.getElementById('')
    //myAudio= function () { this.play()}; 

    asteroidboom.attr("transform", "translate(480,300) scale(1.5,1.5)");
    worldsaved.attr("transform", "translate(480,300) scale(1.5,1.5)").hide();

    $('svg').append(worldsaved);

    asteroidboom.attr("transform", "translate(500,320) scale(1.5,1.5)").fadeIn(6000); 
    //function(){myAudio.play()};
    worldsaved.attr("transform", "translate(480,300) scale(1.5,1.5)").fadeIn(10000);

    var d = $.Deferred();
	d.resolve();
	return d.promise();

};

Slides.kay_enojado_saves_the_world.Hide = function () {
    return $("figure").fadeOut().promise();
};

