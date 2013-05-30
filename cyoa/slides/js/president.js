
Slides.president = new Slide();

Slides.president.Load = function () {
    $("button").click(function () {
        GoToSlide("president");
    });

    $("p").hide();
};

Slides.president.Unload = function () {
    $("button").unbind("click");
};

Slides.president.Show = function () {
    return $("figure").fadeIn().promise();
};

Slides.president.Hide = function () {
    return $("figure").fadeOut().promise();
};

