
Slides.start = new Slide();

var SVG = null;

Slides.start.Load = function () {

    var d = $.Deferred();

    //Make sure to add <div id="svgcontainer"></div> 
    $("#svgcontainer").svg(function (svg) {
        var svgsToLoad = [];

        SVG = svg;

        svgsToLoad.push(LoadSvg(svg, "/slides/resources/start.svg"));
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

    var director = $("g#director");
    var secretary01 = $("g#secretary01");
    var secretary02 = $("g#secretary02");
    var room = $("g#meetingroom");
    var door = $("g#door");
    var keypad = $("g#key");
    var key01 = $("g#key01");
    var key02 = $("g#key02");
    var key03 = $("g#key03");
    var key04 = $("g#key04");
    var key05 = $("g#key05");
    var key06 = $("g#key06");
    var key07 = $("g#key07");
    var key08 = $("g#key08");
    var key09 = $("g#key09");
    var entrance = $("g#entrance");
    var doorleft = $("g#doorleft");
    var doorright = $("g#doorright");

    //Greeting
    director.animate({ svgTransform: "translate(0,27)"}, 1000);
    director.find("*").animate({ svgFill: "#fff" }, 2000);
    secretary01.find("*").animate({ svgFill: "#333" }, 2000);
    secretary02.find("*").animate({ svgFill: "#333" }, 2000);
    //Moving to the meeting room
    director.delay(3000).animate({ svgTransform: "translate(0,260)" }, 6000);
    secretary01.delay(4000).animate({ svgTransform: "translate(0,170)" }, 5000);
    secretary02.delay(4000).animate({ svgTransform: "translate(0,170)" }, 5000);

    director.animate({ svgTransform: "translate(350,280)" }, 4000);
    secretary01.animate({ svgTransform: "translate(390,170)" }, 4000);
    secretary02.animate({ svgTransform: "translate(340,180)" }, 4000);

    secretary01.animate({ svgTransform: "translate(390,130)" }, 1000);
    //Door opens
    doorleft.delay(15000).animate({ svgTransform: "translate(-70,0)" }, 1000);
    doorright.delay(15000).animate({ svgTransform: "translate(70,0)" }, 1000);
    //Go inside
    director.delay(600).animate({ svgTransform: "translate(350,170)" }, 3000);
    secretary01.delay(1700).animate({ svgTransform: "translate(300,70)" }, 3000);
    secretary02.delay(1700).animate({ svgTransform: "translate(350,70)" }, 3000);
    director.find("*").delay(16000).animate({ svgFill: "#808080" }, 1000);
    secretary01.find("*").delay(16000).animate({ svgFill: "#808080" }, 1000);
    secretary02.find("*").delay(16000).animate({ svgFill: "#808080" }, 1000);

    //Door closes
    doorleft.delay(2000).animate({ svgTransform: "translate(0,0)" }, 1000);
    doorright.delay(2000).animate({ svgTransform: "translate(0,0)" }, 1000);
};

Slides.start.Hide = function () {
    return $("figure").fadeOut().promise();
};

