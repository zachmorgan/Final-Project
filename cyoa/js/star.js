

$(document).ready(function () {
    for (var i = 0; i < 100; i++) {
        makeStar();
    }
});

function makeStar() {
    // vary size for fun
    var star = $('<div/>').css({
        'position': 'absolute',
        'width': '10px',
        'height': '10px',
        'z-index': '-1'
    }).addClass("star");

    star.append($("<img/>").attr("src", "/images/star.png"));
    

    // make position sensitive to size and document's width
    var posx = (Math.random() * ($(document).width() - 100));
    var posy = (Math.random() * ($(document).height() - 98));

    star.css({
        'left': posx + 'px',
        'top': posy + 'px',
    })
        .animate({width: 50, height: 50}, 10000 * Math.random())
        .appendTo('body');
    function DONKEYS() {
        $(star).hide(6000).show(5000, function () {
            DONKEYS();
        });
    }
    DONKEYS();

    
}

