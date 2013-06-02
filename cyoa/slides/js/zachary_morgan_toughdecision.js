if (!String.prototype.supplant) {
    String.prototype.supplant = function (o) {
        return this.replace(
            /\{([^{}]*)\}/g,
            function (a, b) {
                var r = o[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            }
        );
    };
}


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

    $("#svgcontainer").svg(function (svg) {

        Slides.zachary_morgan_toughdecision.svg = svg;

        var svgsToLoad = [];

        svgsToLoad.push(LoadSvg(svg, "/slides/resources/morgan_ovaloffice.svg"));

        $.when.apply($, svgsToLoad).done(function () {
            d.resolve();
        });
    });

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

