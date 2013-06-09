
//define a place to store all of our slides
var Slides = {};

//define a slide object that can be Loaded, Unloaded, Shown and Hidden
var Slide = function() {
    this.Load = function() {
    };
    this.Unload = function() {
    };
    this.Show = function() {
    };
    this.Hide = function() {
    };
};

//keep track of the current slide
var currentSlide = null;

//go to a slide by name
function GoToSlide(name) {
    //hide and remove the current slide
    HideAndRemoveCurrentSlide()
        .then(function () {
            //then load the next one by name
            LoadAndShowNextSlide(name);
        });
}

//if there is currently a slide, hide it and unload it
function HideAndRemoveCurrentSlide() {
    var d = $.Deferred();
    
    //only if there is a current slide
    if (currentSlide != null) {
        //when the slide is done hiding
        currentSlide.Hide().done(function () {
            
            //tell the slide it is unloaded
            currentSlide.Unload();

            //remove it's style
            $("head style").remove();
            
            //empty the slide container
            $("#container").empty();

            //notify that hiding has finished
            d.resolve();
        });
    }
    else {
        //skip immediately to hiding finished
        d.resolve();
    }

    //allow our caller to know when we're done
    return d.promise();
}

//loads the next slide by name and shows it
function LoadAndShowNextSlide(name) {
    var d = $.Deferred();

    //derive the file names 
    var jsUrl = "slides/js/" + name + ".js";
    var cssUrl = "slides/css/" + name + ".css";
    var htmlUrl = "slides/html/" + name + ".html";

    //fetch the css with ajax
    var getCss = $.get(cssUrl, function (data) {
        //when it's done add it to a style element in the head element
        $("<style/>", { type: "text/css" }).text(data).appendTo("head");
    });

    //fetch the html with ajax
    var getHtml = $.get(htmlUrl, function (data) {

        $("#container").append(data);

        var text = $("#container").find("article");
        $("#text").text(text.text());
        text.remove();

        var button1 = $("#container").find("button:first");
        var button2 = $("#container").find("button:last");

        $("#button1").text(button1.text());
        $("#button1").data("slide", button1.data("slide"));

        $("#button2").text(button2.text());
        $("#button2").data("slide", button2.data("slide"));

        button1.remove();
        button2.remove();
    });

    //fetch the javascript with ajax (getScript automatically runs it for us)
    var getJs = $.getScript(jsUrl).fail(function(e) {
        alert(e);
    });

    //when all three have completed
    $.when(getCss, getHtml, getJs).done(function () {
        
        //update the current slide to the new slide
        currentSlide = Slides[name];
        
        //load it
        currentSlide.Load().done(function () {
            //show it
            currentSlide.Show();
            //notify that it is complete and has been shown
            d.resolve();
        });
    });

    //allow our caller to know when the slide has finished loading and showing
    return d.promise();
}

$(function () {

    $.ajaxSetup({
        // Disable caching of AJAX responses
        cache: false
    });

    //go to the start slide
    GoToSlide("zachary_morgan_toughdecision");
});