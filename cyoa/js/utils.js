
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
