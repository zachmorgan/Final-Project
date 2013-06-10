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
        $('audio').each(function (){
        this.pause();
    });
};

Slides.kay_enojado_saves_the_world.Show = function () {
    var asteroiddestroyed = $("g#asteroidgoesboom");
    var savesworld = $("g#worldissaved");  
     //var myAudio = document.getElementById('applause');
    //myAudio.oncanplaythrough = function () { this.play(); }
        $("audio").each(function () {
        this.play();
    });

    savesworld.attr("transform", "translate(480,300) scale(1.5,1.5)").hide();
    asteroiddestroyed.attr("transform", "translate(470,300) scale(1.5,1.5)");
    
    $('svg').append(savesworld);

    asteroiddestroyed.attr("transform", "translate(500,300) scale(1.5,1.5)");
    savesworld.attr("transform", "translate(480,300) scale(1.5,1.5)").fadeIn(2000); 

    var d = $.Deferred();
    d.resolve();
    return d.promise();
};

Slides.kay_enojado_saves_the_world.Hide = function () {
    return $("figure").fadeOut().promise();
};



