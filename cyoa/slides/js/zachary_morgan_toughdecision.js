
Slides.start = new Slide();

Slides.start.Load = function () {
    $("button").click(function() {
        GoToSlide("president");
    });

    $("p").hide();
};

Slides.start.Unload = function() {
    $("button").unbind("click");
};

Slides.start.Show = function () {
    return $("figure").fadeIn().promise();
};

Slides.start.Hide = function () {
    return $("figure").fadeOut().promise();
};

