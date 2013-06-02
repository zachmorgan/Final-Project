
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
    return $("p").fadeIn().promise();
};

Slides.start.Hide = function () {
    return $("p").fadeOut().promise();
};

