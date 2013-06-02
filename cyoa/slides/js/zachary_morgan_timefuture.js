
Slides.zachary_morgan_timefuture = new Slide();

Slides.zachary_morgan_timefuture.Load = function () {
    $("p").hide();
};

Slides.zachary_morgan_timefuture.Unload = function() {
    $("button").unbind("click");
};

Slides.zachary_morgan_timefuture.Show = function () {
    return $("figure").fadeIn().promise();
};

Slides.zachary_morgan_timefuture.Hide = function () {
    return $("figure").fadeOut().promise();
};

