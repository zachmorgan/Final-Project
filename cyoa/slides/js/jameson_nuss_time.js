// jameson_nuss_time


Slides.start = new Slide();

Slides.start.Load = function () {
    $("button").click(function() {
        GoToSlide("president");
    });

    $("article").hide();
};

Slides.start.Unload = function() {
    $("button").unbind("click");
};

Slides.start.Show = function () {
    return $("article").fadeIn().promise();
};

Slides.start.Hide = function () {
    return $("article").fadeOut().promise();
};

