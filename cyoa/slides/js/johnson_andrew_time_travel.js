
Slides.johnson_andrew_time_travel = new Slide();

Slides.johnson_andrew_time_travel.Load = function () {

    var d = $.Deferred();

    //Make sure to add <div id="svgcontainer"></div> 
    $("#svgcontainer").svg(function (svg) {

        var svgsToLoad = [];

        svgsToLoad.push(LoadSvg(svg, "/slides/resources/johnson_andrew_sign.svg"));
        svgsToLoad.push(LoadSvg(svg, "/slides/resources/johnson_andrew_light.svg"));
        svgsToLoad.push(LoadSvg(svg, "/slides/resources/johnson_andrew_light2.svg"));
        svgsToLoad.push(LoadSvg(svg, "/slides/resources/johnson_andrew_time_machine.svg"));



        $.when.apply($, svgsToLoad).done(function () {
            d.resolve();
        });
    });

    return d.promise();
};

Slides.johnson_andrew_time_travel.Unload = function () {
    $("audio").each(function () {
        this.pause();
        
    });
};

Slides.johnson_andrew_time_travel.Show = function () {
    var d = $.Deferred();

    var sign = $("g#sign");
    var light = $("g#light");
    var light2 = $("g#light2");
    var machineleft = $("#machineleft");
    var machineright = $("#machineright");
    var machinecenter = $("#machinecenter");
    var machine2left = $("#machine2left");
    var machine2right = $("#machine2right");
    var machine2center = $("#machine2center");
    var timeMachine = $("g#machine, g#leftlight, g#rightlight,  g#knobs, g#door");
    var lightleft = $("line#left");
    var lightmiddle = $("line#middle");
    var lightright = $("line#right");
    var water1 = $("path#water1");
    var water2 = $("path#water2");
    var water3 = $("path#water3");
    var water4 = $("path#water4");
    var bubble1 = $("circle#bubble1");
    var bubble2 = $("circle#bubble2");
    var bubble3 = $("circle#bubble3");
    var bubble4 = $("circle#bubble4");
    var bubble5 = $("circle#bubble5");
    var bubble6 = $("circle#bubble6");
    var greenlight = $("rect#greenlight");
    var yellowlight = $("rect#yellowlight");
    var redlight = $("circle#redlight");

    var myAudio = document.getElementById('audio1')
    myAudio.oncanplaythrough = function () { this.play(); }


    light.attr("transform", "translate(-180,-160)");
    light2.attr("transform", "translate(180,-160)");
    sign.attr("transform", "translate(-150,-25)");
    timeMachine.attr("transform", "translate(60, 45)");
   

    var i = 0;

    while (i < 500) {
        lightleft.hide(250).show(150);
        lightright.hide(250).show(450);
        lightmiddle.hide(250).show(550);
        machineleft.hide(250).show(150);
        machineright.hide(250).show(450);
        machinecenter.hide(250).show(350);
        machine2left.hide(250).show(150);
        machine2right.hide(250).show(450);
        machine2center.hide(250).show(350);
        water1.hide(3000).show(2000);
        water2.hide(6000).show(5000);
        water3.hide(6000).show(5000);
        water4.hide(3000).show(2000);
        yellowlight.hide(250).show(450);
        greenlight.hide(450).show(450);
        redlight.hide(250).show(450);
        bubble1.animate({ svgTransform: 'translate(-1 0)' }, 900);
        bubble1.animate({ svgTransform: 'translate(2 0)' }, 900);
        bubble1.hide(3000).show(2000);
        bubble2.animate({ svgTransform: 'translate(-3 0)' }, 900);
        bubble2.animate({ svgTransform: 'translate(3 0)' }, 900);
        bubble2.hide(1000).show(1000);
        bubble3.animate({ svgTransform: 'translate(3 0)' }, 900);
        bubble3.animate({ svgTransform: 'translate(-3 0)' }, 900);
        bubble3.hide(1500).show(1000);
        bubble4.animate({ svgTransform: 'translate(-1 0)' }, 900);
        bubble4.animate({ svgTransform: 'translate(2 0)' }, 900);
        bubble4.hide(2500).show(2000);
        bubble5.animate({ svgTransform: 'translate(3 0)' }, 900);
        bubble5.animate({ svgTransform: 'translate(-3 0)' }, 900);
        bubble5.hide(1000).show(1000);
        bubble6.animate({ svgTransform: 'translate(-3 0)' }, 900);
        bubble6.animate({ svgTransform: 'translate(3 0)' }, 900);
        bubble6.hide(2500).show(1000);
        
        i++;
    }
   

    d.resolve();
    return d.promise();
};

Slides.johnson_andrew_time_travel.Hide = function () {
    return $("figure").fadeOut().promise();
};

