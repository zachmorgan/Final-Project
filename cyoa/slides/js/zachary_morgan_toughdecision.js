function LoadSvg(svg, url) {
    var d = $.Deferred();

    svg.load(url, function () {
        d.resolve();
    });

    return d.promise();
}

Slides.zachary_morgan_toughdecision = new Slide();

Slides.zachary_morgan_toughdecision.Load = function () {
	var d = $.Deferred();

    return d.promise();
	
    $("p").hide();
};

Slides.zachary_morgan_toughdecision.Unload = function() {
    $("button").unbind("click");
};

Slides.zachary_morgan_toughdecision.Show = function () {
    return $("figure").fadeIn().promise();
};

Slides.zachary_morgan_toughdecision.Hide = function () {
    return $("figure").fadeOut().promise();
};

