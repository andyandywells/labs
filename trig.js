$(document).ready(function(){   
    $('.button').click(function () {

    var AngleA = parseInt($(".AngleA").val(), 10);
    var AngleB = parseInt($('.AngleB').val(), 10);
    var b = parseFloat($('.b').val(), 10);
    var x = parseFloat($('.x').val(), 10);
    var radiansA = (AngleA * Math.PI / 180);
    var radiansB = (AngleB * Math.PI / 180);

    if (AngleA > 0) {

        trigSide();
    } else if (x > 0) {

        trigAngle();
    } else {
        alert('input');
    }

    function trigSide() {
        var answer = Math.sin(radiansA) * (b / (Math.sin(radiansB)));
        $('.remove_s').fadeOut(100, function () {
            $('.remove_s').html('<div class="resultSide">' + answer + '</div>').fadeIn(500);
        });
    }

    function trigAngle() {
        var answer = (Math.asin(((Math.sin(radiansB)) / b) * x)) / Math.PI * 180;

        $('.remove_a').fadeOut(100, function () {
            $('.remove_a').html('<div class="resultAngle">' + answer + '</div>').fadeIn(500);
        });
     }

$(document).on("click", ".resultSide", function () {
    $('.remove_s').fadeOut(100, function () {
        $('.remove_s').html('<input placeholder="x" class="x"></input>').fadeIn(500);
    });
});
$(document).on("click", ".resultAngle", function () {
    $('.remove_a').fadeOut(100, function () {
        $('.remove_a').html('<input placeholder="Angle A" class="AngleA"></input>').fadeIn(500);
    });
});
$('input').click(function () {
    $(this).val('');
});
});
});